<template>
  <div id="app">
    app.vue:{{getCount}}

    <p>{{completedTodosCounts}}</p>
    <p>{{getTodoById(2)}}</p>
    <button @click="decrementCountAsync(5)">减</button>
    {{getCount}}
    <button @click="incrementCountAsync">加</button>
    <hr>
    <p>{{completedTodos}}</p>
    <button @click="fetacDataAsync">FetchData</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
  import Count from "./components/Count.vue"
  export default {
    name: 'app',
    computed: mapGetters([
      "getCount",
      "completedTodos",
      "completedTodosCounts",
      "getTodoById"
    ]),

    /*  methods: {
       incrementCountAsync() {
         //触发actions
         this.$store.dispatch("incrementCountAsync")
       },
       decrementCountAsync(n) {
         //触发actions(传参)
         this.$store.dispatch("decrementCountAsync", n)
       },
       fetacDataAsync() {
         this.$store.dispatch("fetacDataAsync")
       }
     }, */
    methods: mapActions(["incrementCountAsync", "decrementCountAsync", "fetacDataAsync"])
  }
</script>

<style>

</style>