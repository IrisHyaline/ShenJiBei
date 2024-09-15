<template>
    <input type="checkbox" class="image-checkbox" v-model="isChecked" @change="handleCheckboxChange" />
  </template>
  
  <script>
  export default {
    props: {
      multiplier: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        isChecked: false,
        result: 0
      };
    },
    methods: {
      handleCheckboxChange() {
        if (this.isChecked) {
          this.result = this.multiplier;
        } else {
          this.result = -this.multiplier;
        }
        this.$emit('tick-changed', this.result);
      }
    }
  };
  </script>
  
  <style scoped>
  .image-checkbox {
    margin:-25px;
    margin-bottom: 0;
    appearance: none; /* 移除默认样式 */
    background-image: url('../assets/blank6.png'); /* 设置未选中状态的背景图片 */
    background-size: cover; /* 使背景图片覆盖整个 checkbox */
    width: 300px; /* 根据需要调整 checkbox 的大小 */
    height: 150px; /* 根据需要调整 checkbox 的大小 */
    vertical-align: middle; /* 添加这一行 */
  }

  .image-checkbox:checked {
    margin:-25px;
    margin-bottom: 0;
    background-image: url('@/assets/selected6.png'); /* 设置选中状态的背景图片 */
    width: 300px; /* 根据需要调整 checkbox 的大小 */
    height: 150px; /* 根据需要调整 checkbox 的大小 */
    vertical-align: middle; /* 添加这一行 */
}
  </style>