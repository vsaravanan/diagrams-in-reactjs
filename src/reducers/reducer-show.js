import $ from 'jquery'

export default (state = { item: {} }, action) => {
  switch (action.type) {
    case 'toggle': {
      var tmp2 = state.item
      tmp2[action.show] = tmp2[action.show] === undefined ? false : !tmp2[action.show]

      Object.assign(state.item, tmp2)
      console.log(state)

      console.log('clicked toggle : ' + JSON.stringify(state))
      return $.extend(true, {}, state)
    }
    case 'show': {
      Object.assign(state.item, action.show)
      console.log('constructor action_show : ' + JSON.stringify(state))
      return state
    }
    default:
      return state
  }
}

// append method
// Object.assign(state.item, { a: false })
// Object.assign(state.item, { a: true })
// Object.assign(state.item, { b: true })
// console.log(state)

// replace method
// var tmp = state.item
// tmp = { ...tmp, item: action.show }
// console.log(tmp)
// tmp = { ...tmp, item: { a: false } }
// console.log(tmp)
// tmp = { ...tmp, item: { a: true } }
// console.log(tmp)
// return tmp

// replace method
// var tmp = {}
// Object.assign(tmp, { item: { a: false } })
// console.log(tmp)
// Object.assign(tmp, { item: { a: true } })
// console.log(tmp)
// Object.assign(tmp, { item: { b: true } })
// console.log(tmp)
// return tmp
