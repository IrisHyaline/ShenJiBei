<template>
    <tr class="input-text" style="text-align: center;">
        <td>{{ label }}</td>
        <td>&#40;{{ multiplier }}&#41;</td>
        <td>
            <button class="button-decrease" @click="decrement"></button> 
            <input type="number" class="input-background" v-model="inputNumber" @input="updateNumber">
            <button class="button-increase" @click="increment"></button> &nbsp;
            <span class="result-span">{{ result }}</span>
        </td>
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
            default: ""
        }
    },
    data() {
        return {
            inputNumber: 0
        };
    },
    methods: {
        updateNumber(event) {
            this.inputNumber = Number(event.target.value);
            this.$emit('text-input-changed', this.result);
        },
        increment() {
            this.inputNumber++;
            this.$emit('text-input-changed', this.result);
        },
        decrement() {
            if (this.inputNumber > 0) {
                this.inputNumber--;
            }
            this.$emit('text-input-changed', this.result);
        }
    },
    computed: {
        result() {
            return this.inputNumber * this.multiplier;
        }
    }
};
</script>

<style scoped>
.result-span {
    display: inline-block; /* 必须设置为 inline-block 或 block 才能应用宽度 */
    width: 20px; /* 设置宽度为 100px */
    text-align: right; /* 右对齐文本 */
}

.button-increase{
    appearance: none; /* 移除默认样式 */
    background-image: url('../assets/right.png'); /* 设置未选中状态的背景图片 */
    background-size: cover; /* 使背景图片覆盖整个 checkbox */
    width: 25px; /* 根据需要调整 checkbox 的大小 */
    height: 25px; /* 根据需要调整 checkbox 的大小 */
    vertical-align: middle; /* 添加这一行 */
    border: none;
    background-color: transparent; 
}

.button-decrease{
    appearance: none; /* 移除默认样式 */
    background-image: url('../assets/left.png'); /* 设置未选中状态的背景图片 */
    background-size: cover; /* 使背景图片覆盖整个 checkbox */
    width: 25px; /* 根据需要调整 checkbox 的大小 */
    height: 25px; /* 根据需要调整 checkbox 的大小 */
    vertical-align: middle; /* 添加这一行 */
    border: none;
    background-color: transparent; 
}

.input-background{
    background-image: url('../assets/input.png'); /* 设置背景图片 */
    background-size: cover; /* 使背景图片覆盖整个 input */
    color: black; /* 设置文字颜色为白色 */  
    background-color: transparent; 
    text-align: center;
    width: 50px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>