export let state = () => ({
  a11y: {
    reduceMotion: false,
  },
});

export let mutations = {
  setA11y(state, preference) {
    state.a11y = { ...state.a11y, ...preference };
  },
};
