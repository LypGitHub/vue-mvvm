<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <ul>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      articleData: []
    }
  },
  computed: {
    ...mapState({
      articleList: (store) => console.log(store)
    })
  },
  create () {
    this.articleData = this.$store.dispatch('getArticle', {
      perPage: 10,
      page: 1
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
