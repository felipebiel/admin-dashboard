<template>
    <div>
        <div class="container">
            <side-menu></side-menu>
        </div>

        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SideMenu from './side-menu/SideMenu.vue';
export default {
    name: 'LayoutBase',
    components: {
        SideMenu,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
// container geral
.container {
    width: 100%;
    position: relative;
}
</style>