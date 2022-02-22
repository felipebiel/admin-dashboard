<template>
    <div class="table-responsive">
        <table id="fb-table">
            <thead>
                <tr class="tr-head">
                    <th
                        class="title"
                        :key="index"
                        v-for="(header, index) in headers"
                        :style="{ width: header.columnSize ? header.columnSize : 'auto' }"
                    >
                        {{ header.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-if="rows.length > 0">
                    <tr
                        :style="isSubtitleTable ? `border-left: 5px solid ${row.colorTable};` : ''"
                        :key="index"
                        v-for="(row, index) in rows"
                        @click="$emit('selectedRow', row)"
                    >
                        <td v-for="(col, index) in columns" :key="index" class="table-value">
                            <slot v-if="!!slots[col]" v-bind:item="row" :name="col"></slot>
                            <template v-else>{{ row[col] }}</template>
                        </td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td :colspan="columns.length" class="no-register">
                            <slot name="no-register">Nenhum registro foi encontrado</slot>
                        </td>
                    </tr>
                </template>

                <template v-if="showLoadMore && !loading">
                    <tr>
                        <td :colspan="columns.length" class="load-more" @click="$emit('loadMore')">Ver Mais</td>
                    </tr>
                </template>

                <template v-if="loading">
                    <tr>
                        <td :colspan="columns.length" class="loading-bottom">
                            <div class="lds-dual-ring"></div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';

export default {
    name: 'TableComponent',
    emits: ['selectedRow'],
    props: {
        headers: {
            default: () => [],
            type: Array,
        },
        items: {
            default: () => [],
            type: Array,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        showMore: {
            type: Boolean,
            default: true,
        },
        hasMorePaginate: {
            type: [String, Boolean],
            default: '',
        },
        isSubtitleTable: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { slots }) {
        const rows = computed(() => {
            return props.items;
        });
        const columns = computed(() => {
            return props.headers.map(({ value }) => {
                return value;
            });
        });

        const showLoadMore = computed(() => {
            return props.showMore && props.hasMorePaginate;
        });

        return { columns, rows, slots, showLoadMore };
    },
};
</script>

<style scoped lang="scss">
table {
    border-collapse: collapse;
    width: 100%;
}

#fb-table tbody {
    vertical-align: top;
}
.tr-head {
    color: $primary-color;
}
.tr-head .title {
    font-size: 13px;
    font-weight: bold;
    text-align: left;
    padding: 1rem /* 24px */;
}
.table-value {
    border-top: 1px solid #dbdbdb;
    font-size: 13px;
    color: $text-secundary;
    font-weight: 600;
    padding: 1rem /* 24px */;
}

.no-register {
    text-align: center;
    padding: 1rem /* 24px */;
    border-top: 1px solid #dbdbdb;
    font-size: 13px;
    font-weight: bold;
    color: #a5a5a5;
}

.loading-bottom {
    padding-top: 3.5rem /* 56px */;
    text-align: center;
}

/* Load more */

.load-more {
    padding-top: 3.5rem /* 56px */;
    text-align: center;
    color: $primary-color;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;
}

.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
}
.lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid $primary-color;
    border-color: $primary-color transparent $primary-color transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.table-responsive {
    @media screen and (max-width: 767px) {
        overflow-x: scroll;
    }
}
</style>
