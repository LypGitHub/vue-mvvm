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

<style lang="less" src="./test-pc.less"></style>
