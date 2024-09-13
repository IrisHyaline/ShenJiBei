<template>
    <div class="dropdown-component">
        <div class="dropdown-container">
            <div class="title">{{ title }}：</div>
            <div>
                <select v-model="selectedOption" @change="handleChange">
                    <option value="0">无作战分数</option>
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div class="score">：{{ score }}</div>
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
        maxTextLength: {
            type: Number,
            default: 4 // 默认最大文本长度
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
    margin: 20px;
    width: 550px;
}

.dropdown-container {
    display: flex;
    align-items: center;
}

select {
    width: 100px;
    height: 24px;
    max-width: 100px;
    background-color: transparent;
    border: none;
    color: #fff;
    text-align: center;
    margin-left: 15px;
    white-space: nowrap;
    /* 防止文本换行 */
    overflow: hidden;
    /* 隐藏溢出的文本 */
    text-overflow: ellipsis;
    /* 使用省略号处理溢出的文本 */
}
select option {
    background-color: rgba(255, 255, 255, 0.1); /* 设置选项背景透明 */
    color: #000; /* 设置选项文本颜色 */
}

select:focus {
    outline: none; /* 移除聚焦时的默认边框 */
}

select::-ms-expand {
    display: none; /* 移除 IE 默认的下拉箭头 */
}
</style>