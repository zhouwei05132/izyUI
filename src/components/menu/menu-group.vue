<template>
    <li class="izy-menu-item-group">
        <div class="izy-menu-item-group-title">{{ title }}</div>
        <ul><slot></slot></ul>
    </li>
</template>
<script>
    export default {
        name: 'MenuGroup',
        props: {
            title: ''
        },
        data () {
            return {
            };
        }
    };
</script>
