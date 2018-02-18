export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_HEADER':
      return Object.assign({}, state, { header: action.header });
    default:
      return state;
  }
};