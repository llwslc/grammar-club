<template>
  <span class="note_main">
    <b class="note_title"><slot /></b>
    <b v-if="note">{{ note }}</b>
  </span>
</template>

<script>
export default {
  props: {
    note: String
  }
};
</script>

<style lang="stylus">
.note_main
  display: inline-grid;
  text-align: center;
  text-indent: 0;
  line-height: 1.2;

.note_title
  text-decoration: underline;
</style>
