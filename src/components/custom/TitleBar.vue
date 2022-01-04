<template>
    <div class="title-bar-box grid-cols-12">
        <div class="left" :class="columnLeftSize">
            <h1 class="title" v-if="titleType === 'title'"><slot name="left"></slot></h1>
            <h2 class="sub-title" v-if="titleType === 'subtitle'"><slot name="left"></slot></h2>
        </div>
        <div class="right" :class="columnRightSize"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    props: {
        titleType: {
            type: String,
            default: 'title',
        },
        columnLeftSize: {
            type: String,
            default: 'col-span-9',
        },
        columnRightSize: {
            type: String,
            default: 'col-span-3',
        },
    },
};
</script>

<style lang="scss" scoped>
.title-bar-box {
    display: grid;
    align-items: center;
    .left {
        justify-self: start;
    }
    .right {
        justify-self: end;
    }
    .title {
        margin: 0px;
        color: $primary-color;
        font-size: 24px;
        font-weight: 600;
    }
    .sub-title {
        margin: 0px;
        color: $text-secundary;
        font-size: 20px;
        font-weight: 600;
    }
}
</style>
