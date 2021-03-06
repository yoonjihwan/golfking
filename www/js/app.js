// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(['$httpProvider', function ($httpProvider) {
        // Intercept POST requests, convert to standard form encoding
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
            var key, result = [];

            if (typeof data === "string")
                return data;

            for (key in data) {
                if (data.hasOwnProperty(key))
                    result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
            }
            return result.join("&");
        });
    }])
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('load', {
                url: '/load',
                templateUrl: 'templates/load.html',
                controller: 'LoginCtrl'
            })

            .state('load-member', {
                url: '/load/member',
                templateUrl: 'templates/member.html',
                controller: 'MemberCtrl'
            })

            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })
            .state('tab.dash-transfer', {
                url: '/transfer/dash',
                views: {
                    'tab-transfer': {
                        templateUrl: 'templates/dash-transfer.html',
                        controller: 'DashTransferCtrl'
                    }
                }
            })

            .state('tab.transfer', {
                url: '/transfer/list/:area/:tdate',
                views: {
                    'tab-transfer': {
                        templateUrl: 'templates/list-transfer.html',
                        controller: 'TransferCtrl'
                    }
                }
            })
            .state('tab.transfer-create', {
                url: '/transfer/create',
                views: {
                    'tab-transfer': {
                        templateUrl: 'templates/transfer-create.html',
                        controller: 'TransferCreateCtrl'
                    }
                }
            })
            .state('tab.transfer-detail', {
                url: '/transfer/:transferId',
                views: {
                    'tab-transfer': {
                        templateUrl: 'templates/transfer-detail.html',
                        controller: 'TransferDetailCtrl'
                    }
                }
            })
            .state('tab.dash-join', {
                url: '/teejoin/dash',
                views: {
                    'tab-teejoin': {
                        templateUrl: 'templates/dash-join.html',
                        controller: 'DashJoinCtrl'
                    }
                }
            })
            .state('tab.join', {
                url: '/teejoin/list/:area/:tdate',
                views: {
                    'tab-teejoin': {
                        templateUrl: 'templates/list-join.html',
                        controller: 'JoinCtrl'
                    }
                }
            })
            .state('tab.join-create', {
                url: '/teejoin/create',
                views: {
                    'tab-teejoin': {
                        templateUrl: 'templates/join-create.html',
                        controller: 'JoinCreateCtrl'
                    }
                }
            })
            .state('tab.join-detail', {
                url: '/teejoin/:joinId',
                views: {
                    'tab-teejoin': {
                        templateUrl: 'templates/join-detail.html',
                        controller: 'JoinDetailCtrl'
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/load');

    });
