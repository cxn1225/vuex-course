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
  /* 更改属性 */
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, num) => state.count -= num
  },
  actions: {

  }
})
