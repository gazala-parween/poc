function words(state = [], action) {
  switch (action.type) {
    case 'NEW_WORDS' :
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i]},
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}

export default words;
