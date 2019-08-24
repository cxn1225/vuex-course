<template>
    <div id="count">
        <div>
            <hr>
            <h1>Count.vue:{{count}}</h1>
            <h1>Count.vue:{{todos}}</h1>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'count',
        components: {

        },
        computed: {
            count() {
                /* 使用vuex中的属性 */
                return this.$store.state.count
            },
            todos() {
                return this.$store.state.todos
            }
        },
    }
</script>

<style>

</style>