<template>
    <div class="container">
        <div class="navigation">
            <ul>
                <li>
                    <router-link :to="{ name: 'Home' }">
                        <span class="icon"><span class="material-icons"> business </span></span>
                        <span class="title">Logo Empresa</span>
                    </router-link>
                </li>
                <li :class="{ active: $route.name === 'Home' }">
                    <router-link :to="{ name: 'Home' }">
                        <span class="icon"><span class="material-icons"> home </span></span>
                        <span class="title">Dashboard</span>
                    </router-link>
                </li>
                <li :class="{ active: $route.name === 'Question' }">
                    <router-link :to="{ name: 'Home' }">
                        <span class="icon"><span class="material-icons"> question_mark </span></span>
                        <span class="title">Ajuda</span>
                    </router-link>
                </li>
                <li :class="{ active: $route.name === 'Settings' }">
                    <router-link :to="{ name: 'Home' }">
                        <span class="icon"><span class="material-icons"> settings </span></span>
                        <span class="title">Configurações</span>
                    </router-link>
                </li>
                <li :class="{ active: $route.name === 'SignOut' }">
                    <router-link :to="{ name: 'Home' }">
                        <span class="icon"><span class="material-icons"> logout </span></span>
                        <span class="title">Sair</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <!-- <div class="main">
        <router-view></router-view>
    </div> -->
</template>

<script>
export default {
    name: 'LayoutBase',
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
                    color: $white;
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
}
</style>