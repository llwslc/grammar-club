<template>
  <div>
    <div v-if="q && q.length > 0">
      <div class="test_summary">
        <div v-if="!nt">
          <div class="test_triangle_box">
            <div class="test_triangle" :style="{ transform: open ? 'rotate(90deg)' : '' }"></div>
          </div>
        </div>
        <div :style="{ marginLeft: nt ? '1em' : '' }">{{ q }}</div>
      </div>

      <div class="test_choices" v-if="c && c.length > 0">
        <div class="test_choice" v-for="(d, i) in c">
          <div>({{ options[i] }})&nbsp;</div>
          <div>{{ d }}</div>
        </div>
      </div>
    </div>

    <div v-if="qs">
      <div class="test_summary">
        <div class="test_triangle_box">
          <div class="test_triangle" :style="{ transform: open ? 'rotate(90deg)' : '' }"></div>
        </div>
        <div><slot /></div>
      </div>
    </div>

    <div v-if="!n">
      <div class="test_answer" v-if="open">
        <b>{{ a }}</b>
        <slot />
      </div>

      <div class="test_answer_btn" @click="open = !open">{{ open ? 'Hide' : 'Show' }} Answer</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    q: String, // 问题
    c: Array, // 选项
    a: String, // 答案
    n: Boolean, // 无答案 -> 3 & 14 章
    nt: Boolean, // 无三角 -> 14 章
    qs: Boolean // 有三角 -> 17 章
  },
  data: function() {
    return {
      options: ['A', 'B', 'C', 'D'],
      open: false
    };
  }
};
</script>

<style lang="stylus">
.test_summary
  display: flex;
  margin-top: 1em;
  line-height: 1.7;

.test_triangle_box
  min-width: 1em;
  float: left;
  .test_triangle
    margin-top: 0.5em;
    width: 0;
    height: 0;
    border-top: 0.36em solid transparent;
    border-left: 0.36 * 1.734em solid;
    border-bottom: 0.36em solid transparent;

.test_choices
  margin-left: 1em;
  .test_choice
    display: flex;
    line-height: 1.7;

.test_answer
  margin-top: 1em;
  margin-left: 1em;
  line-height: 1.7;

.test_answer_btn
  cursor: pointer;
  margin-left: 2em;
  margin-top: 2em;
  font-size: 8px;
  display: inline-block;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.5em 2em;
  border-radius: 4px;
  transition: background-color .1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid darken(#3eaf7c, 10%);
  &:hover
    background-color: lighten(#3eaf7c, 10%);
</style>
