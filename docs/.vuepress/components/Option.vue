<template>
  <div class="test_choice">
    <div>{{ numero }}</div>
    <div class="test_choices" v-if="c && c.length > 0">
      <div class="test_choice_item" v-for="(d, i) in c" :key="i">
        <div>({{ options[i] }})&nbsp;</div>
        <div>{{ d }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numero: String, // 选项编号
    c: Array // 选项列表
  },
  data: function () {
    return {
      options: ['A', 'B', 'C', 'D']
    };
  }
};
</script>

<style scoped>
.test_choice {
  margin-left: 1em;
  line-height: 1.7;
}

.test_choices {
  margin-left: 1em;
  padding-left: .1em;
}

.test_choice_item {
  display: flex;
}
</style>
