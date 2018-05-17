import { createTest, createVue, destroyVM } from '../util';
import Button from '../../../src/components/button';

describe('Button', () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });
    it('create', () => {
        vm = createTest(Button, {
            type: 'primary'
        }, true);
        let buttonElm = vm.$el;
        expect(buttonElm.classList.contains('izy-btn')).to.be.true;
    })

    it('click', done => {
        let result;
        vm = createVue({
            template: `
        <Button @click="handleClick"></Button>
      `,
            methods: {
                handleClick(evt) {
                    result = evt;
                }
            }
        }, true);
        vm.$el.click();

        setTimeout(_ => {
            expect(result).to.exist;
            done();
        }, 20);
    });
});