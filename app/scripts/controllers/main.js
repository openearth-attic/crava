'use strict';

/**
 * @ngdoc function
 * @name cravaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cravaApp
 */
angular.module('cravaApp')
    .controller('MainCtrl', ['$scope', 'FileUploader', function ($scope, FileUploader) {
        $scope.crava = {
            seismic: [],
            wells: [],
            wavelet: [],
            scale: []
        };
        $scope.properties = {};
        $scope.fileinfo = {};
        var uploader = $scope.uploader = new FileUploader({
            // reference to server address that captures the uploads
            url: '/upload'
        });
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
            // store file info
            $scope.fileinfo[fileItem.file.name] = fileItem;
            // Administrate in crava object
            fileItem.file.properties = {};
            $scope.crava[fileItem.alias].push(fileItem.file);
            console.log($scope.fileinfo);
            // We're changing sub objects, so apply.
            $scope.$apply();
        };
    }]);
