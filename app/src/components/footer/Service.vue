<template>
  <div class="service">
    <h4>{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Service',
  props:['title']
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