<template>
  <div :class="classes">
    <div :class="headClasses"><slot name="title"></slot></div>
    <div :class="extraClasses"><slot name="extra"></slot></div>
    <div :class="bodyClasses" :style="bodyStyles"><slot></slot></div>
  </div>
</template>
<script>
  const prefixCls = 'izy-card';
  const defaultPadding = 16;

  export default {
    name: 'Card',

    props: {
      bordered: {
        type: Boolean,
        default: true
      },
      disHover: {
        type: Boolean,
        default: false
      },
      shadow: {
        type: Boolean,
        default: false
      },
      padding: {
        type: Number,
        default: defaultPadding
      }
    },
    data () {
      return {
        showHead: true,
        showExtra: true
      };
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-bordered`]: this.bordered && !this.shadow,
            [`${prefixCls}-dis-hover`]: this.disHover || this.shadow,
            [`${prefixCls}-shadow`]: this.shadow
          }
        ];
      },
      headClasses () {
        return `${prefixCls}-head`;
      },
      extraClasses () {
        return `${prefixCls}-extra`;
      },
      bodyClasses () {
        return `${prefixCls}-body`;
      },
      bodyStyles () {
        if (this.padding !== defaultPadding) {
          return {
            padding: `${this.padding}px`
          };
        } else {
          return '';
        }
      }
    }
  };
</script>
