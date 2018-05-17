<template>
    <i class="izy-icon" :class="'izy-icon-' + type" :style="styles"></i>
</template>
<script>
    export default {
        name: 'Icon',
        props: {
            type: String,
            size: [Number, String],
            color: String
        },
        computed: {
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        }
    };
</script>
