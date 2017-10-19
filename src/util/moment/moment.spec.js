import momentModule from './index.js';

describe('moment', ()=> {
    beforeEach(angular.mock.module(momentModule));

    let moment;
    beforeEach(inject(_moment_ => {
        moment = _moment_;
    }));

    it('exported as an angular service', () => {
        expect(moment).toBeDefined();
    });

    it('works', ()=> {
        let date = moment('2016.02.01', 'YYYY.MM.DD');

        expect(date.year()).toEqual(2016);
        expect(date.month()).toEqual(1);
    });
});
