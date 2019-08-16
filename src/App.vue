<template>
  <div id="app">
    <router-view></router-view>
    <div class="nav">
      <router-link class="nav-in" to="/home">
        <div class="nav-in-icon" style="{background:url(./assets/img/icon/hightlight.png)}"></div>
        <div class="nav-in-word">高光</div>
      </router-link>
      <router-link class="nav-in" to="/source">
        <div class="nav-in-icon" style="{background:url(./assets/img/icon/hightlight.png)}"></div>
        <div class="nav-in-word">资源</div>
      </router-link>
      <router-link class="nav-in" to="/works">
        <div class="nav-in-icon" style="{background:url(./assets/img/icon/hightlight.png)}"></div>
        <div class="nav-in-word">作品</div>
      </router-link>
      <router-link class="nav-in" to="/mine">
        <div class="nav-in-icon" style="{background:url(./assets/img/icon/hightlight.png)}"></div>
        <div class="nav-in-word">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style scoped lang='less'>
#app {
  .nav {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1rem;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-around;
    align-items: center;
    &-in {
      &-icon {
        width: .41rem;
        height: .41rem;
      }
      &-word {
        color: #9b9b9b;
        text-decoration: none !important;
        font-size: .18rem;
      }
    }
  }
  .router-link-active {
    .nav-in-word {
      color: #fff;
    }
  }
}
</style>
