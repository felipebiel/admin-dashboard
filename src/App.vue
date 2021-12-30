<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
};
</script>

<style lang="scss">
#app {
    text-align: center;
    color: $text-primary;
    margin-top: 60px;
}
</style>
