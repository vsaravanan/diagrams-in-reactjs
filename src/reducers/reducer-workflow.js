export default (state = {}, action) => {
  switch (action.type) {
    case 'workflow': {
      return {
        ...state,
        current: action.workflow,
      }
    }
    default:
      return state
  }
}
