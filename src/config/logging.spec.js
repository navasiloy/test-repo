// import _ from 'lodash';
// import loggingConfig from './logging.js';
// import configModule from './index';
//
// describe('logging configuration', () => {
//     let $logProvider;
//
//     // Importing the function will return an array that consist of the list of dependencies of the function,
//     // and the last element will be the function we need
//     const configFunc = _.last(loggingConfig);
//
//     beforeEach(() => {
//         $logProvider = jasmine.createSpyObj('$loggingProvider', ['debugEnabled']);
//     });
//
//     it('enables debug logging in development environment', ()=> {
//         configFunc($logProvider, {IS_DEVELOPMENT: true});
//         expect($logProvider.debugEnabled).toHaveBeenCalledWith(true);
//     });
//
//     it('disables debug logging in other environments', ()=> {
//         configFunc($logProvider, {IS_DEVELOPMENT: false});
//         expect($logProvider.debugEnabled).toHaveBeenCalledWith(false);
//     });
// });
//
// describe('config module', () => {
//     let $logProvider;
//     beforeEach(()=> {
//         module(_$logProvider_ => {
//             $logProvider = _$logProvider_;
//             spyOn($logProvider, 'debugEnabled');
//             console.log($logProvider);
//         });
//         module(configModule);
//         inject();
//     });
//
//     it('loaded the logging configurtion', ()=> {
//         expect($logProvider.debugEnabled).toHaveBeenCalledWith(true);
//     });
// });
