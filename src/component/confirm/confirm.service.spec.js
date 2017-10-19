import confirmModule from './index';
import _ from 'lodash';

describe('confirmService', () => {
    beforeEach(angular.mock.module(confirmModule));

    let $uibModal;

    beforeEach(()=> {
        $uibModal = {
            open: ()=> {
            }
        };

        angular.mock.module($provide=> {
            $provide.value('$uibModal', $uibModal);
            $provide.value('_', _);
        });
    });

    let confirmService;
    let $q;
    let $rootScope;
    beforeEach(inject((_confirmService_, _$q_, _$rootScope_) => {
        $q = _$q_;
        confirmService = _confirmService_;
        $rootScope = _$rootScope_;
    }));

    describe('initializes', () => {
        it('modalDefaults', ()=> {
            expect(confirmService.modalDefaults).toBeDefined();
        });

        it('modalOptions', ()=> {
            expect(confirmService.modalOptions).toBeDefined();
        });
    });

    describe('createOptions', () => {
        let options;
        beforeEach(()=> {
            options = {
                closeButtonText: 'NO',
                actionButtonText: 'YES',
                headerText: 'Are you sure?',
                bodyText: 'Lorem ipsum dolor.'
            };
        });

        it('does not overwrite the modalDefaults', () => {
            const result = confirmService.createOptions(options);
            expect(result.resolve).toBeDefined();
            expect(result.resolve.options).toBeDefined();
            expect(confirmService.modalDefaults.resolve).not.toBeDefined();
        });

        it('returns an object containing the user defined options', () => {
            const result = confirmService.createOptions(options);
            expect(result.resolve.options).toEqual(options);
        });

        it('does not overwrite the modalOptions', () => {
            const result = confirmService.createOptions(options);
            expect(result.resolve.options).not.toEqual(confirmService.modalOptions);
        });
    });

    describe('confirm', () => {
        let deferred;
        let functions;
        let $scope;

        beforeEach(() => {
            $scope = $rootScope.$new();
            deferred = $q.defer();
            spyOn($uibModal, 'open').and.returnValue({
                result: deferred.promise
            });

            functions = {
                ok: ()=> {
                },
                cancel: ()=> {
                }
            };

            spyOn(functions, 'ok');
            spyOn(functions, 'cancel');
        });

        it('opens the confirm dialog', () => {
            confirmService.confirm();
            expect($uibModal.open).toHaveBeenCalled();
            expect($uibModal.open).toHaveBeenCalledTimes(1);
        });

        it('calls okFunction when clicked ok', () => {
            confirmService.confirm({}, functions.ok, functions.cancel);
            deferred.resolve();

            // Apply must be called due to the promises
            $scope.$apply();

            expect(functions.ok).toHaveBeenCalledTimes(1);
            expect(functions.cancel).not.toHaveBeenCalled();
        });

        it('calls cancelFunction when clicked cancel', () => {
            confirmService.confirm({}, functions.ok, functions.cancel);
            deferred.reject();

            // Apply must be called due to the promises
            $scope.$apply();

            expect(functions.ok).not.toHaveBeenCalled();
            expect(functions.cancel).toHaveBeenCalledTimes(1);
        });
    });
});
