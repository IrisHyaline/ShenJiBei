<template>
    <div class="subtitle">
        <div class="title" :style="{ backgroundImage: `url(${backgroundImage})` }">{{ text }}</div> <!-- 文字 -->
    </div>
</template>

<script>
export default {
    name: 'BigSubtitle',
    props: {
        text: {
            type: String,
            default: ""
        },
        backgroundImage: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.subtitle {
    display: flex;
    /* 设置为弹性布局 */
    align-items: center;
    /* 垂直居中对齐子元素 */
    justify-content: center;
    /* 水平居中对齐子元素 */
}


.title {
    font-size: 27px;
    font-weight: bold;
    width: 180px;
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: center;
    background-size: cover;
    /* 根据需要调整 */
    background-position: center;
    /* 根据需要调整 */
}
</style>