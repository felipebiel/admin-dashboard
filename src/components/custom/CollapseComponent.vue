<template>
    <div class="fb-collapse" :class="[card ? 'card' : 'simple']">
        <div class="fb-title" @click="toggleCollapse" :style="{ cursor: showCloseButton ? 'pointer' : 'auto' }">
            <h2>{{ title }}</h2>
            <div class="flex justify-end items-baseline">
                <span class="material-icons-outlined header-icon" :class="{ rotate: showBody }" v-if="showCloseButton">
                    {{ iconClose }}
                </span>
            </div>
        </div>
        <transition
            name="custom-classes-transition"
            :enter-active-class="'animate__animated animate__faster ' + animateEnter"
            :leave-active-class="'animate__animated animate__faster ' + animateLeave"
        >
            <div class="fb-body" v-show="showBody">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity';
export default {
    name: 'Collapse',
    props: {
        card: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        initOpen: {
            type: Boolean,
            default: false,
        },
        showCloseButton: {
            type: Boolean,
            default: true,
        },
        iconClose: {
            type: String,
            default: 'keyboard_arrow_down',
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
    setup(props) {
        const self = reactive({
            showBody: false,
        });

        if (props.initOpen) {
            self.showBody = true;
        }

        const toggleCollapse = () => {
            if (props.showCloseButton) self.showBody = !self.showBody;
        };

        return { ...toRefs(self), toggleCollapse };
    },
};
</script>
<style lang="scss" scoped>
/* Tipo card */
.fb-collapse {
    &.card {
        background-color: white;
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
        border-radius: 20px;

        .fb-title {
            position: relative;
            padding-left: 2.5rem /* 40px */;
            padding-right: 2.5rem /* 40px */;
            padding-top: 2.75rem /* 44px */;
            padding-bottom: 2.75rem /* 44px */;
            align-items: center;
            border: none;
            display: flex;
            justify-content: space-between;
            h2 {
                color: $primary-color;
                font-size: 20px;
                font-weight: 600;
            }
        }

        .fb-body {
            padding-left: 2.5rem /* 40px */;
            padding-right: 2.5rem /* 40px */;
            padding-bottom: 2.75rem /* 44px */;
            padding-top: 0;
        }
    }
    &.simple {
        background-color: white;
        width: 100%;
        .fb-title {
            padding-top: 0.75rem /* 12px */;
            padding-bottom: 0.75rem /* 12px */;
            padding-right: 0;
            padding-left: 0;
            align-items: center;
            border-bottom: 1px solid;
            border-color: $gray-light;
            position: relative;
            h2 {
                color: $primary-color;
                font-size: 16px;
                font-weight: 600;
            }
        }
        .fb-body {
            padding-left: 0;
            padding-right: 0;
            padding-top: 0.75rem /* 44px */;
            padding-bottom: 0.75rem /* 44px */;
        }
    }
    .header-icon {
        transform: rotate(0deg);
        transition-duration: 0.3s;
        color: $primary-color;
        font-size: 40px;

        &.rotate {
            transform: rotate(180deg);
        }
    }
}
</style>
