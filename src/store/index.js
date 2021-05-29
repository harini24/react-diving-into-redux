import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
    console.log(action)
    if (action.type === 'increment') {
        console.log("in increment")
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state
}
const store = createStore(counterReducer)

export default store