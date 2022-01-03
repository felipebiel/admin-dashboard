<template>
    <div class="card">
        <div>
            <div class="numbers">{{ numbers }}</div>
            <div class="card-name">{{ title }}</div>
        </div>
        <div class="icon-bx">
            <span class="material-icons"> {{ icon }} </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        numbers: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    background-color: $white;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    &:hover {
        background-color: $primary-color;
        .numbers,
        .card-name {
            color: $text-primary;
        }
        .icon-bx {
            .material-icons {
                color: $text-primary;
            }
        }
    }
    .numbers {
        position: relative;
        font-size: 2.5em;
        font-weight: 500;
        color: $primary-color;
    }
    .card-name {
        color: $text-secundary;
        font-size: 1.1em;
        margin-top: 5px;
    }
    .icon-bx {
        .material-icons {
            font-size: 3.5em;
            color: $text-secundary;
        }
    }
}
.card {
    position: relative;
    background-color: $white;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    &:hover {
        background-color: $primary-color;
        .numbers,
        .card-name {
            color: $text-primary;
        }
        .icon-bx {
            .material-icons {
                color: $text-primary;
            }
        }
    }
    .numbers {
        position: relative;
        font-size: 2.5em;
        font-weight: 500;
        color: $primary-color;
    }
    .card-name {
        color: $text-secundary;
        font-size: 1.1em;
        margin-top: 5px;
    }
    .icon-bx {
        .material-icons {
            font-size: 3.5em;
            color: $text-secundary;
        }
    }
}
</style>