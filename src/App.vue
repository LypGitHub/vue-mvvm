<template>
  <div id="app">
    <router-view></router-view>
    <ul class="articles">
      <li v-for="item in articleData">
        <div class="articles_cover">
          <img :src="item.imageUrl" :alt="item.title" :title="item.title" />
        </div>
        <div class="articles_content">

        </div>
      </li>
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
    // 不保存在store
    this.$store.dispatch('getArticleList', params)
      .then(data => {
        this.articleData = data.list
      })
    // 保存在store
    this.$store.dispatch('getArticleWidthStore', params)
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.articles {
  list-style: none;
}
.articles > li {
  padding: 5px;
  overflow: hidden;
  .articles_cover {
    float: left;
    img {
      display: block;
      width: 120px;
      background-color: #f5f5f5;
      height: 80px;
    }
  }
  .articles_content {

  }
}
</style>
