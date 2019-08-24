<template>
  <div id="app">
    app.vue:{{count}}
    <p>{{todos}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCounts}}</p>
    <p>{{getTodoById(2)}}</p>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex"
  import Count from "./components/Count.vue"
  export default {
    name: 'app',
    components: {
      Count
    },
    /* 简写 */
    computed: mapGetters([
      "count",
      "completedTodos",
      "completedTodosCounts",
      "getTodoById"
    ]),
    /* 写法一 */
    /* computed: {
      count() {
        return this.$store.getters.getCount
      },
      todos() {
        return this.$store.state.todos
      },
      completedTodos() {
        return this.$store.getters.completedTodos
      },
      completedTodosCounts() {
        return this.$store.getters.completedTodosCounts
      },
      getTodoById() {
        return this.$store.getters.getTodoById
      }
    }, */
    methods: {

    },
    /* 写法二 */
    /* computed: mapState({
      count: state => state.count,
      todos: state => state.todos
    }), */
    /* 写法三 */
    /*  computed: mapState(["count", "todos"]) */
  }
</script>

<style>

</style>