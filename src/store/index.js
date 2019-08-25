import Vue from 'vue'
import Vuex from 'vuex'
import Count from "./modules/count"
import Todos from "./modules/todos"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Count,
        Todos
    }
})