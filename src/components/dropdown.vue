<template>
    <div class="dropdown-component">
        <div class="dropdown-container" >
            <div class="title">{{ title }}</div>
            <div>
                <select v-model="selectedOption" @change="handleChange">
                    <option value="0">无作战分数</option>
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: {
        title: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        backgroundImage: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selectedOption: null,
            score: 0
        };
    },
    computed: {
        truncatedOptions() {
            return this.options.map(option => {
                if (option.text.length > this.maxTextLength) {
                    return {
                        ...option,
                        text: option.text.substring(0, this.maxTextLength) + '...'
                    };
                }
                return option;
            });
        }
    },
    methods: {
        handleChange() {
            this.updateScore();
            this.$emit('score-changed', this.score);
        },
        updateScore() {
            // 根据选中的选项更新得分，这里假设每个选项的 value 是得分
            this.score = this.selectedOption;
        }
    }
};
</script>

<style scoped>
.dropdown-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -40px;
    margin-bottom: 50px;
    width: 550px;
}

.dropdown-container {
    display: flex;
    align-items: center;
    background-size: cover;
    /* 根据需要调整 */
    background-position: center;
    /* 根据需要调整 */
}

select {
    width: 170px;
    height: 44px;
    max-width: 170px;
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: #fff;
    text-align: center;
    margin-left: 85px;
    -webkit-appearance: none;
    /* 隐藏小三角 - 针对 WebKit 浏览器 */
    -moz-appearance: none;
    /* 隐藏小三角 - 针对 Firefox */
    appearance: none;
    /* 隐藏小三角 - 针对其他浏览器 */
}

select option {
    background-color: rgba(255, 255, 255, 0.1);
    /* 设置选项背景透明 */
    color: #000;
    /* 设置选项文本颜色 */
}

select:focus {
    outline: none;
    /* 移除聚焦时的默认边框 */
}

select::-ms-expand {
    display: none;
    /* 移除 IE 默认的下拉箭头 */
}

.score {
    display: inline-block;
    /* 必须设置为 inline-block 或 block 才能应用宽度 */
    width: 30px;
    /* 设置宽度为 100px */
    text-align: right;
    /* 右对齐文本 */
}
</style>