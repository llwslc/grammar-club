<template>
  <details>
    <summary class="test_summary">
      <div class="test_question">{{ q }}</div>
      <div class="test_choices">
        <div class="test_choice" v-for="(d, i) in c">({{ options[i] }}) {{ d }}</div>
      </div>
    </summary>

    <div class="test_answer"><slot /></div>
  </details>
</template>

<script>
export default {
  props: {
    q: String,
    c: Array
  },
  data: function() {
    return {
      options: ['A', 'B', 'C', 'D']
    };
  }
};
</script>

<style lang="stylus">
.test_summary
  margin-top: 1em;

.test_question
  display: inline;
  line-height: 1.7;

.test_choices
  margin-left: 1em;
  margin-bottom: 1em;
  .test_choice
    line-height: 1.7;

.test_answer
  margin-top: 1em;
  margin-left: 1em;
</style>
