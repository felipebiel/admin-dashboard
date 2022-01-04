<template>
    <div class="card-box">
        <fb-card-info numbers="2,352" title="Visualizações" icon="visibility" :truncateSize="7"></fb-card-info>
        <fb-card-info numbers="80" title="Vendas" icon="shopping_cart" :truncateSize="7"></fb-card-info>
        <fb-card-info numbers="1,381" title="Comentários" icon="question_answer" :truncateSize="7"></fb-card-info>
        <fb-card-info numbers="$80548,36" title="Renda" icon="paid" :truncateSize="7"></fb-card-info>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.card-box {
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
}
</style>