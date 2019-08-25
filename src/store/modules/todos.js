const state = {
    todos: [
        { id: 1, title: "todo item 1", completed: false },
        { id: 2, title: "todo item 2", completed: true },
        { id: 3, title: "todo item 3", completed: true },
    ]
}
const getters = {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCounts: (state, getters) => getters.completedTodos.length,
    getTodoById: state => id => state.todos.find(todo => todo.id == id)
}
const mutations = {
    setTodos: (state, data) => state.todos = data   //修改todos
}
const actions = {
    async fetacDataAsync({ commit }) {     //从网络获取todos
        //await修饰的语句中数据请求完成后才执行下一句
        const response = await axios.get("http://jsonplaceholder.typicode.com/todos")
        commit("setTodos", response.data)
    }
}

export default {
    state, getters, mutations, actions
}