<template>
  <div id="app">
    <router-view></router-view>
    <ul class="articles">
      <li v-for="item in articleData">
        <div class="articles_cover">
          <img :src="item.imageUrl" :alt="item.title" :title="item.title" />
        </div>
        <div class="articles_content">
          <a :href="item.url">{{ item.title }}</a>
          <p>
            文/拉茶 不要总在过去的回忆里缠绵，昨日的太阳晒不干今天的衣裳，
            夏季的炎阳赶不走冬日的寒冷，攒够了失望，就该帅气的离开。 
            『01』 她见了他，变得很低很低，低到尘埃里。但她心...
          </p>
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
  width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
}
.articles {
  list-style: none;
  margin: 0;
  padding: 0;
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
      height: 100px;
      border-radius: 5px;
      border: 1px solid #f0f0f0;
    }
  }
  .articles_content {
    text-align: left;
    margin-left: 130px;
    padding-top: 5px;
    a {
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #333;
    }
    p {
      margin: 0;
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
    }
  }
}
</style>
