const reducer = (
  state = {
    loading: false,
  },
  action
) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "PERFORM_LOADER":
      newState.loading = action.loading;
      return newState;

    default:
      return newState;
  }
};
export default reducer;
