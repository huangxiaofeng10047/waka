/**
 * Created by hwen on 15/12/21.
 */

(function(angular) {
    'use strict';

    var URL = 'api';

    angular.module('waka')

        .factory('URL', [function() {
            return URL + '/';
        }])

        .factory('User', ['$resource', function($resource) {
            return $resource(URL + '/user', {}, {
                login: {
                    method: 'POST',
                    url: URL + '/user/login'
                },
                logout: {
                    method: 'GET',
                    url: URL + '/user/logout'
                }
            });
        }])
})(angular);