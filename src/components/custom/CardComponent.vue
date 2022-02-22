<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
    padding-left: 2.5rem /* 40px */;
    padding-right: 2.5rem /* 40px */;
    padding-top: 2.75rem /* 44px */;
    padding-bottom: 2.75rem /* 44px */;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    background-color: $white;
    @media screen and (max-width: 767px) {
        padding: 20px;
    }
}
</style>
