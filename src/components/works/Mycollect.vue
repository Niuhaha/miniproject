<template>
  <div id="mycollect">
      <div class="top"></div>
      <div class="content">
        <Content v-for="{item, index} in [1,1,1,1,1,1,1,1,1,1,1,11,1,]" :key="index"></Content>
      </div>
  </div>
</template>

<script>
import Content from './MycollectContent';
export default {
  components: {
    Content
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang='less'>
  #mycollect {
    .top {
      height: 1.27rem;
    }
    .content {
      padding: 0 .51rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      flex-wrap:  wrap ;
    }
  }
</style>
