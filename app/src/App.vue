<template>
  <div>
    <TopNav v-show="$route.meta.showTopNav"></TopNav>
    <Header></Header>
    <router-view></router-view>
    <Footer class="foot" v-show="$route.meta.hasFooter"></Footer>
    <Contact></Contact>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/footer/contact'
import TopNav from './components/header/topNav'
export default {
  name: 'App',
  components: {
    Header,Footer,Contact,TopNav
  },
  mounted(){
    // console.log(this.$router);
    // console.log(this.$store);
    this.$store.dispatch("categoryList");
    // console.log(this);
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
