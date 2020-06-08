<template>
  <div class="card_main">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.card_main
  border: 2px solid #9a9a9a;
  margin: 0 -1em;
  padding: 0 1em 0 1em;
</style>
