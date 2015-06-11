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
        $scope.fileinfo = {};
        $scope.properties = {};
        var uploader = $scope.uploader = new FileUploader({
            // reference to server address that captures the uploads
            url: '/upload'
        });
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
            // store file info
            fileItem.properties = {};
            $scope.fileinfo[fileItem.file.name] = fileItem;
            console.log($scope.fileinfo);
        };
    }]);
