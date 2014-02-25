var sxBrowse = angular.module("sxBrowse", []);
sxBrowse.value("apiKey", 'YOUR KEY HERE');
sxBrowse.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])
sxBrowse.controller("AppCtrl", function ($http, apiKey) {
    var main = this;
    console.log('in ap ctrl');

    main.Results;
    main.something = 'Results';
    $http.get('http://apiby.io/api/events?apiKey=' + apiKey).

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