<template>
  <label :class="wrapClasses">
    <span :class="checkboxClasses">
      <span :class="innerClasses"></span>
      <input
        v-if="group"
        type="checkbox"
        :class="inputClasses"
        :disabled="disabled"
        :value="label"
        v-model="model"
        :name="name"
        @change="change">
      <input
        v-if="!group"
        type="checkbox"
        :class="inputClasses"
        :disabled="disabled"
        :checked="currentValue"
        :name="name"
        @change="change">
    </span>
    <slot><span v-if="showSlot">{{ label }}</span></slot>
  </label>
</template>
<script>
  import { findComponentUpward, sizeValid } from '../../utils/assist';
  import Emitter from '../../mixins/emitter';

  const componentCls = 'izy-checkbox';

  export default {
    name: 'Checkbox',
    mixins: [ Emitter ],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      label: {
        type: [String, Number, Boolean]
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      size: {
        validator (value) {
          return sizeValid(value);
        }
      },
      name: {
        type: String
      }
    },
    data () {
      return {
        model: [],
        currentValue: this.value,   //checked or not.
        group: false,
        showSlot: true,
        parent: findComponentUpward(this, 'CheckboxGroup')
      };
    },
    computed: {
      wrapClasses () {
        return [
          `${componentCls}-wrapper`,
          {
            [`${componentCls}-group-item`]: this.group,
            [`${componentCls}-wrapper-checked`]: this.currentValue,
            [`${componentCls}-wrapper-disabled`]: this.disabled,
            [`${componentCls}-${this.size}`]: !!this.size
          }
        ];
      },
      checkboxClasses () {
        return [
          `${componentCls}`,
          {
            [`${componentCls}-checked`]: this.currentValue,
            [`${componentCls}-disabled`]: this.disabled,
            [`${componentCls}-indeterminate`]: this.indeterminate
          }
        ];
      },
      innerClasses () {
        return `${componentCls}-inner`;
      },
      inputClasses () {
        return `${componentCls}-input`;
      }
    },
    mounted () {
      this.parent = findComponentUpward(this, 'CheckboxGroup');
      if (this.parent) this.group = true;
      if (!this.group) {
        this.updateModel();
        this.showSlot = this.$slots.default !== undefined;
      } else {
        this.parent.updateModel(true);
      }
    },
    methods: {
      change (event) {
        if (this.disabled) {
          return false;
        }

        const checked = event.target.checked;
        this.currentValue = checked;

        let value = checked ? this.trueValue : this.falseValue;
        this.$emit('input', value);

        if (this.group) {
          this.parent.change(this.model);
        } else {
          this.$emit('on-change', value);
          this.dispatch('FormItem', 'on-form-change', value);
        }
      },
      updateModel () {
        this.currentValue = this.value === this.trueValue;
      }
    },
    watch: {
      value (val) {
        if (val !== this.trueValue && val !== this.falseValue) {
          throw 'Value should be trueValue or falseValue.';
        }
        this.updateModel();
      }
    }
  };
</script>
