<template>
  <span>
    <slot></slot>
  </span>
</template>
<script>
  import { findComponentsDownward, sizeValid } from '../../utils/assist';
  import Emitter from '../../mixins/emitter';
  const prefixCls = 'izy-radio-group';

  export default {
    name: 'RadioGroup',
    mixins: [ Emitter ],
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      size: {
        validator (value) {
          return sizeValid(value);
        }
      }
    },
    data() {
        return {
          currentValue: this.value,
          childrens: []
        }
    },
    methods: {
        updateValue() {
            this.childrens = findComponentsDownward(this, 'Radio');
            const value = this.value;

            if (this.childrens) {
              this.childrens.forEach(child => {   //change the 'checked' state of child
                  child.currentValue = value == child.label;
                  child.group = true;
              });
            }
        },
        change(data) { //data.value: radio label
            this.currentValue = data.value;
            this.$emit('input', data.value);
            this.$emit('on-change', data.value);
            this.dispatch('FormItem', 'on-form-change', data.value);
        }
    },
    watch: {
        value() {
            this.updateValue();
        }
    }
  }
</script>
