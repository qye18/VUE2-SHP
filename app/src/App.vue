<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.hasFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    Header,Footer
  },
  mounted(){
    // console.log(this.$router);
  }
}
</script>

<style>

  .title {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>
