export const action_show = (id, flag) => dispatch => {
  const tmp = {}
  tmp[id] = flag
  const tmp2 = {
    type: 'show',
    show: tmp,
  }
  dispatch(tmp2)
}

export const toggle_show = id => dispatch => {
  const tmp2 = {
    type: 'toggle',
    show: id,
  }
  dispatch(tmp2)
}
