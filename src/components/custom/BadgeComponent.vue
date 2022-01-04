<template>
    <div class="fb-badge" :class="cssClass">
        <slot></slot>
        <span class="material-icons-outlined close-button" v-if="isClosable" @click="$emit('close', identifyValue)"
            >close</span
        >
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
export default {
    props: {
        size: {
            // none = medium, extra-small, small and large
            type: String,
            default: '',
        },
        variant: {
            // fb-default, fb-green, fb-red and fb-orange
            type: String,
            default: 'fb-default',
        },
        block: {
            // button width 100%
            type: Boolean,
            default: false,
        },
        isClosable: {
            type: Boolean,
            default: false,
        },
        identifyValue: {
            type: String,
            default: '',
        },
        rounded: {
            // button rounded by 20px radius
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const blockClass = computed(() => {
            return props.block ? 'w-full text-center' : 'fit-content';
        });
        const roundedClass = computed(() => {
            return props.rounded ? 'rounded-full' : 'rounded-sm';
        });

        const isClosableClass = computed(() => {
            return props.isClosable ? 'is-closable' : '';
        });

        const cssClass = computed(() => {
            {
                return `${props.variant} ${props.size} ${blockClass.value}
                 ${roundedClass.value} ${isClosableClass.value}`;
            }
        });

        return { cssClass };
    },
};
</script>

<style lang="scss" scoped>
.fb-badge {
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;
    font-size: 13px;
    font-weight: 600;
    position: relative;
    display: inline-block;
}

.rounded-full {
    border-radius: 50px;
}
.rounded-sm {
    border-radius: 8px;
}

.fb-badge.is-closable {
    padding-left: 1rem /* 16px */;
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    padding-right: 1.75rem /* 28px */;
}
.fb-badge.fit-content {
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

.fb-orange {
    background-color: $orange;
    color: $white;
}
.fb-black {
    background-color: $black;
    color: $white;
}

/* Sizes */

.small {
    padding-left: 0.75rem /* 12px */;
    padding-right: 0.75rem /* 12px */;
    padding-top: 0.25rem /* 4px */;
    padding-bottom: 0.25rem /* 4px */;
    .material-icons-outlined.close-button {
        margin-left: 0.25rem /* 4px */;
        cursor: pointer;
        top: 5px;
    }
}

.small.is-closable {
    padding-left: 0.75rem /* 12px */;
    padding-top: 0.25rem /* 4px */;
    padding-bottom: 0.25rem /* 4px */;
    padding-right: 1.75rem /* 28px */;
}

.extra-small.is-closable {
    padding-left: 0.75rem /* 12px */;
    padding-top: 0.25rem /* 4px */;
    padding-bottom: 0.25rem /* 4px */;
    padding-right: 1.75rem /* 28px */;
}
.extra-small {
    padding-left: 0.5rem /* 8px */;
    padding-right: 0.5rem /* 8px */;
    .material-icons-outlined.close-button {
        margin-left: 0.25rem /* 4px */;
        cursor: pointer;
        top: 7px;
    }
}

.large {
    padding-left: 1.25rem /* 20px */;
    padding-right: 1.25rem /* 20px */;
    padding-top: 0.75rem /* 12px */;
    padding-bottom: 0.75rem /* 12px */;
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
