import configModule from './index';

describe('config module', () => {
    let $urlRouterProvider;
    let $locationProvider;
    beforeEach(angular.mock.module((_$urlRouterProvider_, _$locationProvider_) => {
        $locationProvider = _$locationProvider_;
        $urlRouterProvider = _$urlRouterProvider_;
        spyOn($locationProvider, 'html5Mode');
        spyOn($urlRouterProvider, 'otherwise');

        console.log('AAAAAAAAAAAAAAAAAAAA');
        console.log($locationProvider);
        console.log($urlRouterProvider);
    }));

    beforeEach(angular.mock.module(configModule));
    beforeEach(angular.mock.inject());

    it('sets the html5mode to false', ()=> {
        expect($urlRouterProvider.html5mode).toHaveBeenCalledWith(false);
    });

    it('sets the otherwide route to /dashboard', ()=> {
        expect($locationProvider.otherwise).toHaveBeenCalledWith('/dashboard');
    });
});
