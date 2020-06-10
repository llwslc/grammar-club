<template>
  <span class="note_main">
    <span v-if="normal"><slot /></span>
    <u v-else-if="ul"><slot /></u>
    <b v-else class="note_title"><slot /></b>

    <span v-if="note">
      <span v-if="ul">{{ note }}</span>
      <b v-else>{{ note }}</b>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    normal: Boolean, // 无下划线，note 加粗
    ul: Boolean, // 有下划线，note 正常
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
