var sxBrowse = angular.module("sxBrowse", []);
sxBrowse.value("apiKey", 'your key here');
sxBrowse.controller("AppCtrl", function ($http, apiKey) {
    var main = this;
    console.log('in ap ctrl');

    main.Results;
    main.something = 'something else';
    $http.get('//apiby.io/api/events?apiKey=' + apiKey).

        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            console.log('success');
            main.Results = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('fail');
        });
});