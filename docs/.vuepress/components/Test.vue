<template>
  <details>
    <summary class="test_summary">
      <div class="test_question">{{ q }}</div>
    </summary>

    <div class="test_answer"><slot /></div>
  </details>
</template>

<script>
export default {
  props: ['q']
};
</script>

<style lang="stylus">
.test_summary
  margin-top: 1em;

.test_question
  display: inline-block;
  text-indent: 0;
  line-height: 1.7;
  margin-top: 0;
  margin-bottom: 0;

.test_answer
  margin-top: 1em;
  margin-left: 1em;
</style>
