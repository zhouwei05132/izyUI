<template>
  <transition name="izy-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      :class="classes">
      <div :class="[prefixCls + '-spinner']">
        <svg id="Layer_1" x="0px" y="0px"
            viewBox="0 0 24 30">
        <rect x="0" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="10" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>

        <p v-if="text" :class="[prefixCls + '-text']">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
  const prefixCls = 'izy-loading';

  export default {
    data() {
      return {
        prefixCls: prefixCls,
        text: null,
        fullscreen: false,
        visible: false,
        customClass: ''
      };
    },

    computed: {
      classes () {
        let theme = this.theme;
        if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';

        return [
          `${prefixCls}-mask`,
          `${this.customClass}`,
          {
            'is-fullscreen': this.fullscreen
          }
        ];
      },
    },

    methods: {
      handleAfterLeave() {
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      }
    }
  };
</script>
