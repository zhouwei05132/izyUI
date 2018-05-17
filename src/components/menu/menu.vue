<template>
    <ul class="izy-menu" :class="'izy-menu-' + mode" :style="styles"><slot></slot></ul>
</template>
<script>
    import { findComponentsDownward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'Menu',
        mixins: [ Emitter ],
        props: {
            mode: {
                validator (value) {
                    return ~['horizontal', 'vertical'].indexOf(value)
                },
                default: 'vertical'
            },
            activeName: {
                type: [String, Number]
            },
            openNames: {
                type: Array,
                default () {
                    return [];
                }
            },
            accordion: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '240px'
            }
        },
        data () {
            return {
                currentActiveName: this.activeName
            };
        },
        computed: {
            styles () {
                let style = {};

                if (this.mode === 'vertical') style.width = this.width;

                return style;
            }
        },
        methods: {
            updateActiveName () {
                if (this.currentActiveName === undefined) {
                    this.currentActiveName = -1;
                }
                this.broadcast('Submenu', 'on-update-active-name', false);
                this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName);
            },
            updateOpenKeys (name) {
                const index = this.openNames.indexOf(name);
                if (index > -1) {
                    this.openNames.splice(index, 1);
                } else {
                    this.openNames.push(name);
                    if (this.accordion) {
                        this.openNames.splice(0, this.openNames.length);
                        this.openNames.push(name);
                    }
                }
            },
            updateOpened () {
                const items = findComponentsDownward(this, 'Submenu');

                if (items.length) {
                    items.forEach(item => {
                        if (this.openNames.indexOf(item.name) > -1) item.opened = true;
                    });
                }
            }
        },
        mounted () {
            this.updateActiveName();
            this.updateOpened();
            this.$on('on-menu-item-select', (name) => {
                this.currentActiveName = name;
                this.$emit('on-select', name);
            });
        },
        watch: {
            openNames () {
                this.$emit('on-open-change', this.openNames);
            },
            activeName (val) {
                this.currentActiveName = val;
            },
            currentActiveName () {
                this.updateActiveName();
            }
        }
    };
</script>