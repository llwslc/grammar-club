<template>
  <span class="note_main">
    <b class="note_title"><slot /></b>
    <b v-if="note">{{ note }}</b>
  </span>
</template>

<script>
export default {
  props: ['note']
};
</script>

<style lang="stylus">
.note_main
  display: inline-grid;
  text-align: center;
  text-indent: 0;

.note_title
  text-decoration: underline;
</style>
