app.controller('MainCtrl', function($scope, $http) {

    var apiKey = '234-screenshottool12345';

    $scope.captureScreenshot = function() {
        var lstWebsites = [];
        $scope.screenshots = [];
        $scope.error = false;

        if ($scope.websiteUrl.indexOf(",") > -1) {
            var sLinks = $scope.websiteUrl.split(",");
            angular.forEach(sLinks, function(sLink) {
                lstWebsites.push(sLink.trim(""));
            });
        } else {
            lstWebsites.push($scope.websiteUrl);
        }

        angular.forEach(lstWebsites, function(sWebsiteUrl) {

            var regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
            var m;

            if ((m = regex.exec(sWebsiteUrl)) !== null) {
                // The result can be accessed through the `m`-variable.
                var requestUrl = 'https://image.thum.io/get/width/1200/fullpage/auth/' + apiKey + '/' + sWebsiteUrl;
                $scope.screenshots.push({
                    src: requestUrl,
                    url: sWebsiteUrl
                });
            } else {
                $scope.error = true;
            }
        });
    };

    $scope.reset = function() {
        $scope.screenshots = [];
    };

});
