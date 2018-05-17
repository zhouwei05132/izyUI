<template>
  <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
    <Icon class="izy-load-loop" type="load-c" v-if="loading"></Icon>
    <Icon :type="icon" v-if="icon && !loading"></Icon>
    <span v-if="showSlot" ref="slot"><slot></slot></span>
  </button>
</template>
<script>
  import Icon from '../icon';
  import {sizeValid} from '../../utils/assist';

  const componentCls = 'izy-btn';

  export default {
      name: 'Button',
    components: {Icon},
    props: {
          type: {
              validator(value) {
                  return ~['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default'].indexOf(value);
              }
          },
          shape: {
            validator (value) {
              return ~['circle', 'circle-outline'].indexOf(value);
            }
          },
          size: {
            validator (value) {
              return sizeValid(value);
            }
          },
          loading: Boolean,
          disabled: Boolean,
          htmlType: {
            default: 'button',
            validator (value) {
              return ~['button', 'submit', 'reset'].indexOf(value);
            }
          },
          icon: String,
          long: {
            type: Boolean,
            default: false
          }
    },
    data () {
      return {
        showSlot: true
      };
    },
    computed: {
        classes() {
            return [
              `${componentCls}`,
              {
                [`${componentCls}-${this.type}`]: !!this.type,
                [`${componentCls}-long`]: this.long,
                [`${componentCls}-${this.shape}`]: !!this.shape,
                [`${componentCls}-${this.size}`]: !!this.size,
                [`${componentCls}-loading`]: this.loading != null && this.loading,
                [`${componentCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
              }
            ];
        }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event);
      }
    },
    mounted () {
      this.showSlot = this.$slots.default !== undefined;
    }
  }
</script>
