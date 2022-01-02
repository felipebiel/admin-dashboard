<template>
    <div class="toolbar">
        <div class="toggle"><span class="material-icons"> menu </span></div>
        <div class="search">
            <label>
                <input type="text" placeholder="Buscar ..." />
                <span class="material-icons"> search </span>
            </label>
        </div>
        <div class="user">
            <span class="material-icons"> account_circle </span>
        </div>
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
.toolbar {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: $white;
    .toggle {
        position: relative;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5em;
        cursor: pointer;
    }
    .search {
        position: relative;
        width: 400px;
        margin: 0 10px;
        label {
            position: relative;
            width: 100%;
            input {
                width: 100%;
                height: 40px;
                border-radius: 40px;
                padding: 5px 20px;
                padding-left: 40px;
                outline: none;
                border: 1px solid $text-secundary;
                background-color: $white;
                font-size: 18px;
            }
            .material-icons {
                position: absolute;
                top: 0px;
                left: 10px;
                font-size: 1.5em;
            }
        }
    }
    .user {
        position: relative;
        min-width: 40px;
        .material-icons {
            font-size: 2.5em;
            color: $primary-color;
        }
    }
}
</style>