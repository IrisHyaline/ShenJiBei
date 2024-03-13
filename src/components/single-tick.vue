<template>
    <tr class="single-tick">
        <td><label>{{ label }}</label></td>
        <td>&#40;{{ multiplier }}&#41;</td>
        <td><input type="checkbox" class="image-checkbox" v-model="isChecked" @change="handleCheckboxChange" /></td>
    </tr>
</template>

<script>
export default {
    props: {
        multiplier: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: ''
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
                this.result = 0;
            }
            this.$emit('tick-changed', this.result);
        }
    }
};
</script>

<style scoped>
.image-checkbox {
    appearance: none; /* 移除默认样式 */
    background-image: url('../assets/blank.png'); /* 设置未选中状态的背景图片 */
    background-size: cover; /* 使背景图片覆盖整个 checkbox */
    width: 20px; /* 根据需要调整 checkbox 的大小 */
    height: 20px; /* 根据需要调整 checkbox 的大小 */
    vertical-align: middle; /* 添加这一行 */
}

.image-checkbox:checked {
    background-image: url('../assets/selected.png'); /* 设置选中状态的背景图片 */
    width: 20px; /* 根据需要调整 checkbox 的大小 */
    height: 20px; /* 根据需要调整 checkbox 的大小 */
    vertical-align: middle; /* 添加这一行 */
}
</style>
