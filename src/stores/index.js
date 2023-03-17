import { createStore } from "vuex";

export const store = createStore({
    state:{
        number: 0
    },
    mutations: {
        add(state){
            state.number ++
        },
        subtract(state){
            state.number <= 0 ? state.number = 0 :state.number --
        },
        reset(state){
            state.number = 0
        },
        setValue(state,payload){
            state.number = (state.number * 1) +  (payload * 1)
        }
    }
    
})