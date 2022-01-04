<template>
    <transition
        name="custom-classes-transition"
        :enter-active-class="'animate__animated animate__faster ' + animateEnter"
        :leave-active-class="'animate__animated animate__faster ' + animateLeave"
    >
        <div id="modal" :style="cssProps" class="modal-mask" v-show="show" transition="modal">
            <div class="modal-wrapper">
                <div class="modal-header">
                    <a v-if="!persistent" class="close-modal" @click="close()">
                        <span class="material-icons-outlined"> close </span>
                    </a>
                    <p class="header"><slot name="header">Atenção</slot></p>
                </div>
                <div class="modal-container">
                    <div class="modal-body" :id="idBody" :class="{ 'padding-body': paddingBody }">
                        <slot name="body"> default body </slot>
                    </div>
                </div>
                <div class="modal-footer" v-if="showFooter">
                    <slot name="footer">
                        <fb-button @click="close()">OK</fb-button>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { computed } from '@vue/reactivity';
export default {
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            required: true,
            twoWay: true,
        },
        showFooter: {
            type: Boolean,
            default: true,
        },
        width: {
            type: String,
            default: '800px',
        },
        height: {
            type: String,
            default: '300px',
        },
        scrollable: {
            type: Boolean,
            default: true,
        },
        footerPositionItens: {
            type: String,
            default: 'none',
        },
        headerColor: {
            type: String,
            default: '#fff',
        },
        persistent: {
            type: Boolean,
            default: false,
        },
        paddingBody: {
            type: Boolean,
            default: true,
        },
        idBody: {
            type: String,
            default: '',
        },
        animateEnter: {
            type: String,
            default: 'animate__fadeIn',
        },
        animateLeave: {
            type: String,
            default: 'animate__fadeOut',
        },
    },
    emits: ['close'],
    setup(props, { emit }) {
        const close = () => {
            emit('close', false);
        };

        const mobileView = (value) => {
            if (value == 'auto') return value;
            if (~value.indexOf('%')) return value; // retornar valor boleano
            let val = value.split('px')[0];
            let number;
            if (val > 0 && val < 800) number = val * 0.3;
            else if (val >= 800) number = val * 0.6;
            val = val - number;
            return `${val}px`;
        };
        const computedFooterPositionItens = computed(() => {
            if (props.footerPositionItens == 'none') {
                if (window.innerWidth >= 992) return 'right';
                else return 'center';
            } else {
                return props.footerPositionItens;
            }
        });

        const cssProps = computed(() => {
            return {
                '--paddingBody': props.paddingBody ? '20px 30px' : '0px',
                '--height': `${props.height}`,
                '--mobHeight': `${mobileView(props.height)}`,
                '--width': `${props.width}`,
                '--mobWidth': `${mobileView(props.width)}`,
                '--scrollable': `${props.scrollable ? 'auto' : 'hiden'}`,
                '--footerPositionItens': `${computedFooterPositionItens.value}`,
                '--headerColor': `${props.headerColor}`,
            };
        });

        return { close, mobileView, cssProps, computedFooterPositionItens };
    },
};
</script>
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: center;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.close-modal {
    position: absolute;
    right: 20px;
    margin-top: 4px;
    font-size: 20px;
    cursor: pointer;
    font-weight: 600;
}
.modal-container {
    width: var(--width);
    height: var(--height);
    margin: 0px auto;
    background-color: $white;
    overflow-y: var(--scrollable);
    max-height: var(--height);
}
.modal-container::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
}
.modal-container::-webkit-scrollbar-track {
    background: $white; /* color of the tracking area */
}

.modal-container::-webkit-scrollbar-thumb {
    background-color: #dbdbdb; /* color of the scroll thumb */
    border-radius: 10px; /* roundness of the scroll thumb */
    border: 3px solid $white; /* creates padding around scroll thumb */
}
.modal-header {
    margin: 0px auto;
    width: var(--width);
    margin-top: 0;
    border-radius: 20px 20px 0px 0px;
    // border-bottom: 1px solid $text-secundary;
    background-color: var(--headerColor) !important;
    padding: 1.25rem /* 20px */;
    font-size: 20px;
    color: $primary-color;
    font-weight: 600;
    position: relative;
}

.modal-body.padding-body {
    padding: 2.75rem /* 44px */;
}
.modal-footer {
    margin: 0px auto;
    width: var(--width);
    background-color: $white !important;
    padding: 10px;
    border-radius: 2px;
    border-radius: 0px 0px 20px 20px;
    text-align: var(--footerPositionItens);
    // border-top: 1px solid $text-secundary;
    padding: 1.5rem /* 24px */;
}

.close-btn .material-icons-outlined {
    color: $primary-color;
}
.modal-enter,
.modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
@media screen and (max-width: 992px) {
    .modal-header {
        width: var(--mobWidth);
    }
    .modal-container {
        width: var(--mobWidth);
        max-height: var(--mobHeight);
    }
    .modal-footer {
        width: var(--mobWidth);
    }
}
</style>
