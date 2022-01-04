<template>
    <div class="home">
        <div class="card-box">
            <fb-card-info numbers="2,352" title="Visualizações" icon="visibility" :truncateSize="7"></fb-card-info>
            <fb-card-info numbers="80" title="Vendas" icon="shopping_cart" :truncateSize="7"></fb-card-info>
            <fb-card-info numbers="1,381" title="Comentários" icon="question_answer" :truncateSize="7"></fb-card-info>
            <fb-card-info numbers="$80548,36" title="Renda" icon="paid" :truncateSize="7"></fb-card-info>
        </div>
        <div class="details grid-cols-12">
            <div class="col-span-8">
                <fb-card>
                    <fb-title-bar>
                        <template v-slot:left>Compras Recentes</template>
                        <template v-slot:right> <fb-button @click="openModal">Ver todas</fb-button></template>
                    </fb-title-bar>
                    <div class="body">
                        <fb-table :items="tableData" :headers="headersTable" :loading="false"> </fb-table>
                    </div>
                    <fb-modal
                        height="auto"
                        width="650px"
                        :show="showModal"
                        @close="showModal = false"
                        footerPositionItens="right"
                    >
                        <template v-slot:header>Todos os registros</template>
                        <template v-slot:body>
                            <fb-table :items="tableData" :headers="headersTable" :loading="false"></fb-table>
                        </template>
                    </fb-modal>
                </fb-card>
            </div>
            <div class="col-span-4"></div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
export default {
    setup() {
        const self = reactive({
            headersTable: [
                { label: 'Nome', value: 'name' },
                { label: 'Preço', value: 'price' },
                { label: 'Pagamento', value: 'payment' },
                { label: 'Status', value: 'status' },
            ],
            tableData: [
                { name: 'Felipe', price: '1250,50', payment: 'Cartão', status: 'Pendente' },
                { name: 'Davi', price: '830,50', payment: 'Debito', status: 'Pago' },
                { name: 'Gustavo', price: '2,50', payment: 'Cartão', status: 'Pago' },
                { name: 'Arthur', price: '35,00', payment: 'Dinheiro', status: 'Cancelado' },
                { name: 'Jonas', price: '98,25', payment: 'PIX', status: 'Estornado' },
                { name: 'Vilmar', price: '5531,96', payment: 'Vale', status: 'Pendente' },
            ],
            showModal: false,
        });
        const openModal = () => {
            self.showModal = true;
        };
        return { ...toRefs(self), openModal };
    },
};
</script>

<style lang="scss" scoped>
.home {
    padding: 20px;
    .card-box {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
    }
    .details {
        padding-top: 20px;
        position: relative;
        width: 100%;
        grid-gap: 30px;
        .body {
            padding-top: 20px;
        }
    }
}
</style>