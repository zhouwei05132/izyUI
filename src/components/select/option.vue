<template>
  <li :class="classes" @click.stop="select" @mouseout.stop="blur" v-show="!hidden">
    <slot>{{ showLabel }}</slot>
  </li>
</template>
<script>
  import Emitter from '../../mixins/emitter';
  import { findComponentUpward } from '../../utils/assist';

  const prefixCls = 'izy-select-item';
  export default {
      name: 'qfOption',
      componentName: 'select-item',
      mixins: [Emitter],
      props: {
          value: {
              type: [String, Number],
              required: true
          },
          label: {
              type: [String, Number]
          },
          disabled: {
              type: Boolean,
              default: false
          }
      },
      data () {
          return {
              selected: false,
              index: 0,
              isFocus: false,
              hidden: false,  // for search
              searchLabel: '',  // the value is slot, only for search
              autoComplete: false
          };
      },
      computed: {
          classes () {
              return [
                `${prefixCls}`,
                {
                  [`${prefixCls}-disabled`]: this.disabled,
                  [`${prefixCls}-selected`]: this.selected && !this.autoComplete,
                  [`${prefixCls}-focus`]: this.isFocus
                }
              ];
          },
          showLabel () {
              return (this.label) ? this.label : this.value;
          }
      },
      methods: {
          select () {
              if (this.disabled) {
                  return false;
              }
              this.dispatch('qfSelect', 'on-select-selected', this.value);
          },
          blur () {
              this.isFocus = false;
          },
          queryChange (val) {
            const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
            this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel);
          },
          // 在使用函数防抖后，设置 key 后，不更新组件了，导致SearchLabel 不更新
          updateSearchLabel () {
            this.searchLabel = this.$el.innerHTML;
          }
      },
      mounted () {
          this.updateSearchLabel();
          this.dispatch('qfSelect', 'append');
          this.$on('on-select-close', () => {
            this.isFocus = false;
          });
          this.$on('on-query-change', (val) => {
            this.queryChange(val);
          });

          const Select = findComponentUpward(this, 'qfSelect');
          if (Select) this.autoComplete = Select.autoComplete;
      },
      beforeDestroy () {
          this.dispatch('qfSelect', 'remove');
      }
  }
</script>
