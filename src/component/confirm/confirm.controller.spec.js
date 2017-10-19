import confirmModule from './index';

describe('ConfirmController', () => {
    beforeEach(angular.mock.module(confirmModule));

    let $controller;
    let controller;

    beforeEach(inject(_$controller_ => {
        $controller = _$controller_;
    }));

    let $uibModalInstance;
    let options = {
        test: 'test123'
    };

    beforeEach(() => {
        $uibModalInstance = jasmine.createSpyObj('$uibModalInstance', ['close', 'dismiss']);
        controller = $controller('ConfirmController', {
            $uibModalInstance: $uibModalInstance,
            options: options
        });
    });

    it('initializes the modalOptions with the options parameter', () => {
        expect(controller.modalOptions).toBeDefined();
        expect(controller.modalOptions.test).toBeDefined();
        expect(controller.modalOptions.test).toEqual('test123');
    });

    it('closes the confirm dialog with message "ok" when clicking the ok button', () => {
        controller.ok();
        expect($uibModalInstance.close).toHaveBeenCalledWith('ok');
        expect($uibModalInstance.close).toHaveBeenCalledTimes(1);
    });

    it('dismisses the confirm dialog with message "cancel" when clicking the cancel button', () => {
        controller.cancel();
        expect($uibModalInstance.dismiss).toHaveBeenCalledWith('cancel');
        expect($uibModalInstance.dismiss).toHaveBeenCalledTimes(1);
    });
});
