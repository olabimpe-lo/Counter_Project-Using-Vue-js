
const useCount = (num,store) => {

const increment = () => {
        // number.value = number.value + 1
        store.commit('add')
    }

    const decrement = () => {
        store.commit('subtract')
    }

    const reset = () => {
        store.commit('reset')
    }

    const setValue = (num) => {
        store.commit('setValue',num)        

    }

    return {increment,decrement,reset,setValue}
}

export default useCount