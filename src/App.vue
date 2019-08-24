<template>
  <div id="app">
    app.vue:{{count}}
    <p>{{todos}}</p>
    <Count />
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import Count from "./components/Count.vue"
  export default {
    name: 'app',
    components: {
      Count
    },
    /* 写法一 */
    /*  computed: {
       count() {
         return this.$store.state.count
       },
       todos() {
         return this.$store.state.todos
       }
     }, */
    /* 写法二 */
    /* computed: mapState({
      count: state => state.count,
      todos: state => state.todos
    }), */
    /* 写法三 */
    computed: mapState(["count", "todos"])
  }
</script>

<style>

</style>