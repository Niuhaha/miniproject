<template>
  <div id="mycollect-content">
    <div class="cover">
      <img src="@img/1.png" alt="">
      <div class="time">
        02:30
      </div>
    </div>
    <div class="title">
      三体片段
    </div>
    <div class="type">
      #悬疑 #动作
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang='less'>
  #mycollect-content{
    margin-bottom: .45rem;
    .cover {
      height: 3rem;
      width: 3rem;
      border-radius: .05rem;
      position: relative;
      img{
        height: 3rem;
        width: 3rem;
      }
      .time {
        font-size: .14rem;
        position: absolute;
        bottom: 0;
        right: 0;
        height: .5rem;
        width: 1rem;
        background: rgba(0, 0, 0 ,0.6);
        border-radius: .05rem;
        line-height: .5rem;
        text-align: center;
        color: #fff;
      } 
    }
    .title{
      font-size: .3rem;
      font-weight: 600;
      color: #fff;
      margin: .18rem 0;
    }
    .type {
      font-size: .16rem;
      color: #fff;
    }
  }
</style>
