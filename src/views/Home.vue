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
                        <fb-table :items="tableData" :headers="headersTable" :loading="false">
                            <template v-slot:status="{ item }">
                                <fb-badge :variant="dictStatus[item.status]" size="small" rounded>{{
                                    item.status
                                }}</fb-badge>
                            </template>
                        </fb-table>
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
            <div class="col-span-4 alertas">
                <fb-alert isClosable variant="fb-green" border>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eleifend nisl vel vehicula.
                    Curabitur turpis enim, eleifend nec ullamcorper nec, pretium eget augue.
                </fb-alert>

                <fb-alert variant="fb-red" :show="alertShow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eleifend nisl vel vehicula.
                    Curabitur turpis enim, eleifend nec ullamcorper nec, pretium eget augue.
                </fb-alert>

                <fb-alert
                    variant="fb-orange"
                    :hasIcon="false"
                    :show="alertShow"
                    animateEnter="animate__bounceIn"
                    animateLeave="animate__bounceOut"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eleifend nisl vel vehicula.
                    Curabitur turpis enim, eleifend nec ullamcorper nec, pretium eget augue.
                </fb-alert>

                <fb-alert
                    variant="fb-info"
                    icon="help"
                    :show="alertShow"
                    animateEnter="animate__backInDown"
                    animateLeave="animate__backOutDown"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eleifend nisl vel vehicula.
                    Curabitur turpis enim, eleifend nec ullamcorper nec, pretium eget augue.
                </fb-alert>

                <fb-alert
                    variant="fb-black"
                    icon="gpp_maybe"
                    :show="alertShow"
                    animateEnter="animate__fadeInDown"
                    animateLeave="animate__fadeOutDown"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eleifend nisl vel vehicula.
                    Curabitur turpis enim, eleifend nec ullamcorper nec, pretium eget augue.
                </fb-alert>
                <fb-button @click="alertShow = !alertShow" block rounded>{{ textButton }}</fb-button>
            </div>
            <div class="col-span-12">
                <fb-collapse title="Informações de Perfil" initOpen card>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eleifend nisl vel vehicula.
                    Curabitur turpis enim, eleifend nec ullamcorper nec, pretium eget augue. Praesent pulvinar aliquam
                    magna id tempus.
                    <fb-collapse
                        title="Texto legal"
                        iconClose="arrow_drop_down"
                        :initOpen="false"
                        animateEnter="animate__fadeInDown"
                        animateLeave="animate__fadeOutUp"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eleifend nisl vel
                        vehicula. Curabitur turpis enim, eleifend nec ullamcorper nec, pretium eget augue. Praesent
                        pulvinar aliquam magna id tempus.
                    </fb-collapse>

                    <fb-collapse
                        class="pt-1"
                        title="Coisas legais"
                        iconClose="arrow_drop_down"
                        :initOpen="true"
                        :showCloseButton="false"
                        animateEnter="animate__fadeInDown"
                        animateLeave="animate__fadeOutUp"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat eleifend nisl vel
                        vehicula. Curabitur turpis enim, eleifend nec ullamcorper nec, pretium eget augue. Praesent
                        pulvinar aliquam magna id tempus.
                    </fb-collapse>
                </fb-collapse>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, reactive, toRefs } from '@vue/reactivity';
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
            dictStatus: {
                Pendente: 'fb-orange',
                Pago: 'fb-green',
                Cancelado: 'fb-red',
                Estornado: 'fb-black',
            },
            showModal: false,
            alertShow: true,
        });
        const openModal = () => {
            self.showModal = true;
        };
        const textButton = computed(() => {
            return self.alertShow ? 'Ocultar Alertas' : 'Mostrar Alertas';
        });
        return { ...toRefs(self), openModal, textButton };
    },
};
</script>

<style lang="scss" scoped>
.home {
    padding: 20px;
    @media screen and (max-width: 767px) {
        padding: 0;
    }
    .pt-1 {
        padding-top: 20px;
    }
    .card-box {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
        @media screen and (max-width: 1400px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .details {
        padding-top: 20px;
        position: relative;
        width: 100%;
        grid-gap: 30px;
        @media screen and (max-width: 1400px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .col-span-8 {
            @media screen and (max-width: 1400px) {
                grid-column: span 12 / span 12;
            }
        }
        .col-span-4 {
            @media screen and (max-width: 1400px) {
                grid-column: span 12 / span 12;
            }
        }
        .body {
            padding-top: 20px;
        }
        .alertas {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media screen and (max-width: 1400px) {
                height: 500px;
            }
        }
    }
}
</style>