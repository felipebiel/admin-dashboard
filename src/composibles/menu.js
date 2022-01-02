import { reactive, readonly } from 'vue';

const state = reactive({
    toggle: false,
});

const toogleFunction = async () => {
    state.toggle = !state.toggle;
};

export default { state: readonly(state), toogleFunction };
