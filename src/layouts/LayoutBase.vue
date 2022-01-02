<template>
    <div>
        <div class="container">
            <side-menu></side-menu>
        </div>

        <!-- <div class="main">
            <router-view></router-view>
        </div> -->
        <div class="main" :class="activeClass">
            <toolbar-component></toolbar-component>
        </div>
    </div>
</template>

<script>
import SideMenu from './side-menu/SideMenu.vue';
import ToolbarComponent from './toolbar/ToolbarComponent.vue';
import menuStore from '@/composibles/menu';
import { computed } from '@vue/reactivity';
export default {
    name: 'LayoutBase',
    components: {
        SideMenu,
        ToolbarComponent,
    },
    setup() {
        const activeClass = computed(() => {
            return menuStore.state.toggle ? 'active' : '';
        });
        return { activeClass };
    },
};
</script>

<style lang="scss" scoped>
// container geral
.container {
    width: 100%;
    position: relative;
}

.main {
    position: absolute;
    width: calc(100% - 300px);
    left: 300px;
    min-height: 100vh;
    transition: 0.5s;
    &.active {
        left: 80px;
        width: calc(100% - 80px);
    }
}
</style>