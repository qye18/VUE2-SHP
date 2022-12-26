<template>
  <div class="service">
    <h4>服务</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Service',
}
</script>

<style scoped>
  h4 {
    font-weight: 500;
    margin-bottom: 10px;
  }
  li {
    font-size: 12px;
  }
</style>