<template>
  <div class="tense_main">
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    img: String
  }
};
</script>

<style lang="stylus">
.tense_main
  text-align: center;
</style>
