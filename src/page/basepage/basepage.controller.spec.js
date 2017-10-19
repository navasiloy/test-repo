import basepage from './index';

describe('BasePageController', () => {
    beforeEach(angular.mock.module(basepage));

    let $controller;
    beforeEach(inject(_$controller_ => {
        $controller = _$controller_;
    }));

    describe('title', () => {
        let controller;

        beforeEach(() => {
            controller = $controller('BasePageController', {$scope: {}});
        });

        it('intializes the title with \'\'', () => {
            expect(controller._title).toBeDefined();
            expect(controller._title).toEqual('');
        });

        it('title can be changed with the setter', () => {
            const expected = 'Test title';
            controller.title = expected;
            expect(controller._title).toBeDefined();
            expect(controller._title).toEqual(expected);
        });

        it('getter returns the correct value', () => {
            const expected = 'Test title';
            controller.title = expected;
            expect(controller.title).toEqual(expected);
        });
    });
});
