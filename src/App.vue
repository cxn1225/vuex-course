<template>
  <div id="app">
    app.vue:{{getCount}}
    <p>{{todos}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCounts}}</p>
    <p>{{getTodoById(2)}}</p>
    <button @click="decrementCount(5)">减</button>
    {{getCount}}
    <button @click="incrementCount">加</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from "vuex"
  import Count from "./components/Count.vue"
  export default {
    name: 'app',

    /* 简写：调用vuex的getters */
    computed: mapGetters([
      "getCount",
      "completedTodos",
      "completedTodosCounts",
      "getTodoById"
    ]),

    /* methods: {
      incrementCount() {    //加
        //调用vuex的mutations
        this.$store.commit("incrementCount")
      },
      decrementCount(num) {     //减（传参）
        this.$store.commit("decrementCount", num)
      }
    }, */

    /* 简写 */
    methods: mapMutations(["incrementCount", "decrementCount"])
  }
</script>

<style>

</style>