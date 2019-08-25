const state = {
    count: 0,
}
const getters = {
    getCount: state => state.count,
}
const mutations = {
    incrementCount: state => state.count++,   //加
    decrementCount: (state, num) => state.count -= num,    //减（传参）
}
const actions = {
    incrementCountAsync: ({ commit }) => {   //加
        setTimeout(() => {
            //context相当于this.$store
            commit("incrementCount")
        }, 2000)
    },
    decrementCountAsync: ({ commit }, payload) => {   //减（传参）
        setTimeout(() => {
            commit("decrementCount", payload)
        }, 1000)
    },
}

export default {
    state, getters, mutations, actions
}