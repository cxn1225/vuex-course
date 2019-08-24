import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 在任何组件都可以使用store的数据 */
export default new Vuex.Store({
  state: {
    /* 属性 */
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: true },
      { id: 3, title: "todo item 3", completed: true },
    ]
  },
  /* 修饰属性 */
  getters: {
    getCount: state => state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCounts: (state, getters) => getters.completedTodos.length,
    getTodoById: state => id => state.todos.find(todo => todo.id == id)
  },
  /* 更改属性(同步请求) */
  mutations: {
    incrementCount: state => state.count++,   //加
    decrementCount: (state, num) => state.count -= num,    //减（传参）
    setTodos: (state, data) => state.todos = data   //修改todos
  },
  //更改属性(异步请求)，实际上是异步调用mutations
  actions: {
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
    //ES9完美异步：async
    async fetacDataAsync({ commit }) {     //从网络获取todos
      //await修饰的语句中数据请求完成后才执行下一句
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos")
      commit("setTodos", response.data)
    }
  }
})
