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
    ...mapState([
      'articleList'
    ])
  },
  watch: {
    'articleList': function (val) {
      console.log(val)
    }
  },
  created () {
    const params = {
      perPage: 10,
      page: 1
    }
    this.$store.dispatch('getArticleList', params)
      .then(data => {
        this.articleData = data.list
      })
    this.$store.dispatch('getArticleWidthStore', params)
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
