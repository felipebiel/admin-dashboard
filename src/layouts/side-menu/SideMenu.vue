<template>
    <div class="navigation">
        <ul>
            <li>
                <router-link :to="{ name: 'Home' }">
                    <span class="icon"><span class="material-icons"> business </span></span>
                    <span class="title">Logo Empresa</span>
                </router-link>
            </li>
            <li v-for="(link, index) in links" :key="index" :class="{ active: $route.name === link.routerName }">
                <!-- Links Internos -->
                <router-link :to="{ name: link.routerName }" v-if="!link.externalLink">
                    <span class="icon">
                        <span class="material-icons">{{ link.icon }} </span>
                    </span>
                    <span class="title">{{ link.title }}</span>
                </router-link>
                <!-- Links Externos -->
                <a :href="link.url" target="_blank" v-else>
                    <span class="icon">
                        <span class="material-icons">{{ link.icon }} </span>
                    </span>
                    <span class="title">{{ link.title }}</span>
                </a>
            </li>
            <li>
                <router-link :to="{ name: 'Home' }">
                    <span class="icon"><span class="material-icons"> logout </span></span>
                    <span class="title">Sair</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
// CONSTANTE COM OS INTENS DO MENU
import { LINKS_MENU } from '@/services/links-menu.js';
export default {
    setup() {
        const links = computed(() => {
            return LINKS_MENU;
        });
        return { links };
    },
};
</script>

<style lang="scss" scoped>
// navegação
.navigation {
    position: fixed;
    height: 100%;
    width: 300px;
    background-color: $primary-color;
    border-left: 10px solid $primary-color;
    transition: 0.5s;
    overflow: hidden;
    ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        li {
            position: relative;
            width: 100%;
            list-style: none;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            &:hover,
            &.active {
                background-color: $body-color;
            }
            &:nth-child(1) {
                margin-bottom: 40px;
                // tira o evento de hover
                pointer-events: none;
            }
            a {
                position: relative;
                display: block;
                width: 100%;
                display: flex;
                text-decoration: none;
                color: $text-primary;
                .icon {
                    position: relative;
                    display: block;
                    min-width: 60px;
                    height: 60px;
                    line-height: 77px;
                    text-align: center;
                    .material-icons {
                        font-size: 1.75rem;
                    }
                }
                .title {
                    position: relative;
                    display: block;
                    padding: 0 10px;
                    height: 60px;
                    line-height: 60px;
                    text-align: start;
                    white-space: nowrap;
                }
            }
            &:hover a,
            &.active a {
                color: $primary-color;
            }
            /* Curvas do lado de fora */
            &:hover a::before,
            &.active a::before {
                content: '';
                position: absolute;
                right: 0;
                top: -50px;
                width: 50px;
                height: 50px;
                background-color: transparent;
                border-radius: 50%;
                box-shadow: 35px 35px 0 10px $body-color;
                pointer-events: none;
            }
            &:hover a::after,
            &.active a:after {
                content: '';
                position: absolute;
                right: 0;
                bottom: -50px;
                width: 50px;
                height: 50px;
                background-color: transparent;
                border-radius: 50%;
                box-shadow: 35px -35px 0 10px $body-color;
                pointer-events: none;
            }
        }
    }
}
</style>