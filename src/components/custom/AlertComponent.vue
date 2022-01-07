<template>
    <transition
        name="custom-classes-transition"
        :enter-active-class="'animate__animated animate__faster ' + animateEnter"
        :leave-active-class="'animate__animated animate__faster ' + animateLeave"
    >
        <div class="fb-alert" :class="cssClass" v-if="show && showSelf">
            <span class="icon" v-if="hasIcon">
                <span class="material-icons"> {{ icon }} </span>
            </span>
            <slot></slot>
            <span class="material-icons-outlined close-button" v-if="isClosable" @click="closeAlert">close</span>
        </div>
    </transition>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
export default {
    props: {
        variant: {
            // fb-default, fb-green, fb-red, fb-orange, fb-info
            type: String,
            default: 'fb-default',
        },
        icon: {
            // fb-default, fb-green, fb-red and fb-orange
            type: String,
            default: 'error',
        },
        isClosable: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
            default: false,
        },
        show: {
            type: Boolean,
            default: true,
        },
        hasIcon: {
            type: Boolean,
            default: true,
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
        const borderClass = computed(() => {
            return props.border ? 'fb-border-left' : '';
        });

        const isClosableClass = computed(() => {
            return props.isClosable ? 'is-closable' : '';
        });

        const cssClass = computed(() => {
            {
                return `${props.variant} ${props.size}
                 ${borderClass.value} ${isClosableClass.value}`;
            }
        });

        const showSelf = ref(true);
        const closeAlert = () => {
            if (props.isClosable) showSelf.value = false;
        };

        return { cssClass, showSelf, closeAlert };
    },
};
</script>

<style lang="scss" scoped>
.fb-alert {
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;
    font-size: 13px;
    font-weight: 600;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    .icon {
        padding-right: 10px;
    }
}

.fb-border-left::after {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 5px;
    background-color: rgba(0, 0, 0, 0.1);
}

.fb-alert.is-closable {
    padding-left: 1rem /* 16px */;
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    padding-right: 1.75rem /* 28px */;
}
.fb-alert.fit-content {
    width: fit-content;
}

.fb-default {
    background-color: #efefef;
    color: #707070;
}

.fb-green {
    background-color: $green;
    color: $white;
}

.fb-red {
    background-color: $red;
    color: $white;
}
.fb-info {
    background-color: $blue;
    color: $white;
}

.fb-orange {
    background-color: $orange;
    color: $white;
}
.fb-black {
    background-color: $black;
    color: $white;
}

/* close button */
.material-icons-outlined.close-button {
    margin-left: 0.5rem /* 8px */;
    margin-left: 0.25rem;
    font-size: 10px;
    position: absolute;
    cursor: pointer;
    right: 8px;
    background-color: #00000029;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 2px;
    padding-right: 3px;
    border-radius: 100%;
}
</style>
