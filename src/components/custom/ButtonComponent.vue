<template>
    <button
        class="fb-button"
        id="fb-button"
        :class="[cssClass]"
        :disabled="disabled"
        @click="$emit('click')"
        @click.stop="$emit('click.stop')"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <span><slot></slot></span>
    </button>
</template>
<script>
import { computed, reactive, toRefs } from '@vue/reactivity';
export default {
    name: 'Button',
    emits: ['click', 'click.stop'],
    props: {
        variant: {
            // fb-primary, fb-primary-outline, fb-secundary fb-primary-outline-exclusive
            type: String,
            default: 'fb-primary',
        },
        size: {
            // none = medium, extra-small, small, large and extra-large
            type: String,
            default: '',
        },
        block: {
            // button width 100%
            type: Boolean,
            default: false,
        },
        rounded: {
            // button rounded by 20px radius
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const self = reactive({
            hover: false,
        });

        const blockClass = computed(() => {
            return props.block ? 'block' : '';
        });
        const roundedClass = computed(() => {
            return props.rounded ? 'rounded' : '';
        });
        const disabledClass = computed(() => {
            return props.disabled ? 'disabled' : '';
        });
        const hoverClass = computed(() => {
            return self.hover && props.loading ? 'hover-class' : '';
        });

        const cssClass = computed(() => {
            {
                return `${props.variant} ${props.size} ${blockClass.value}
                    ${roundedClass.value} ${disabledClass.value}
                    ${hoverClass.value}`;
            }
        });

        return { ...toRefs(self), cssClass };
    },
};
</script>
<style lang="scss" scoped>
.fb-button {
    font-size: 16px;
    font-weight: 600;
    padding: 8px 30px;
    border: none;
    border-radius: 3px;
    box-shadow: none !important;
    position: relative;
    cursor: pointer;
}

.fb-button span {
    display: flex;
}

/* BTN PRIMARY */
.fb-button.fb-primary {
    color: $text-primary;
    background-color: $primary-color;
    text-transform: capitalize;
}

/* BTN SECUNDARY */

.fb-button.fb-primary-outline {
    color: $primary-color;
    background-color: $white;
    box-shadow: inset 0px 0px 1px 1px $primary-color !important;
    text-transform: capitalize;
}

.fb-button.fb-primary-outline:hover {
    background-color: $primary-color;
    color: $white;
}

.fb-button.fb-primary-outline.hover-class:hover {
    color: $primary-color;
    background-color: $white;
    box-shadow: inset 0px 0px 1px 1px $primary-color !important;
    text-transform: capitalize;
}

.fb-button.fb-primary-outline-exclusive {
    color: $primary-color;
    background-color: $white;
    box-shadow: inset 0px 0px 1px 1px $primary-color !important;
    text-transform: capitalize;
}

.fb-button.fb-primary-outline-exclusive:hover {
    color: $primary-color;
    background-color: $white;
    box-shadow: inset 0px 0px 1px 1px $primary-color !important;
    text-transform: capitalize;
}

.fb-button.fb-primary-outline-exclusive.hover-class:hover {
    color: $primary-color;
    background-color: $white;
    box-shadow: inset 0px 0px 1px 1px $primary-color !important;
    text-transform: capitalize;
}

.fb-button.fb-primary-outline-exclusive.loading span {
    color: $primary-color;
    background-color: $white;
    color: transparent !important;
}

/* BTN ACTION */
// .fb-button.fb-secundary {
//     color: #000;
//     background-color: #fdc30c;
//     text-transform: capitalize;
// }

// .fb-button.fb-secundary:hover {
//     background-color: #ffb100;
// }

// .fb-button.fb-secundary.loading span {
//     color: transparent !important;
// }

/* BUTTON  SIZES*/

/* SMALL */
.fb-button.small {
    padding: 4px 30px;
}

/* EXTRA SMALL */
.fb-button.extra-small {
    padding: 2px 10px;
    font-size: 13px;
}

/* LARGE */

.fb-button.large {
    padding: 14px 30px;
}

/* EXTRA LARGE */

.fb-button.extra-large {
    padding: 20px 30px;
    font-size: 18px;
}

/* BTN BLOCK */
.fb-button.block {
    width: 100%;
    span {
        justify-content: center;
    }
}

/* BTN ROUNDED */
.fb-button.rounded {
    border-radius: 20px;
}

/* BTN DISABLED */

.fb-button.disabled {
    background-color: #dbdbdb !important;
    color: #707070 !important;
}

.fb-button.fb-primary-outline.disabled {
    box-shadow: none !important;
}

.fb-button.fb-primary-outline-exclusive.disabled {
    box-shadow: none !important;
}
</style>
