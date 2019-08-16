<template>
  <div id="works">
      <div class="nav">
          <router-link to="/works/myworks">
            我的作品
          </router-link>
          <router-link to="/works/mycollect">
            我的收藏
          </router-link>
      </div>
      <router-view></router-view>
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
    #works {
        background: url('~@img/worksbg.png');
        background-attachment:fixed;
        width: 100vw;
        background-size: 100%;
        .nav {
          z-index: 99;
            width: 100vw;
            height: 1.14rem;
            margin-bottom: .13rem;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            a {
                margin: 0 .25rem;
                display: block;
                font-size: .32rem;
                color: #fff;
                position: relative;
                height: .5rem;
            }
            .router-link-active::before{
                content: '';
                display: block;
                height: .06rem;
                width: .3rem;
                background: #fff;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0)
            }     
        }
    }
</style>
