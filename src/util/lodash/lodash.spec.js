import lodashModule from './index.js';

describe('lodash', ()=> {
    beforeEach(angular.mock.module(lodashModule));

    let lodash;
    beforeEach(inject(_ => {
        lodash = _;
    }));

    it('exported as an angular service', () => {
        expect(lodash).toBeDefined();
    });

    it('works', ()=> {
        expect(lodash.range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
