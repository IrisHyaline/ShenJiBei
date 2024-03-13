<template>
    <div class="subtitle">
        <img src="../../public/arrow-left.png" alt="Image 1"> <!-- 第一张图片 -->
        <div class="title">{{ text }}</div> <!-- 文字 -->
        <img src="../../public/arrow-right.png" alt="Image 2"> <!-- 第二张图片 -->
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ""
        }
    }
};
</script>

<style scoped>
.subtitle {
    display: flex; /* 设置为弹性布局 */
    align-items: center; /* 垂直居中对齐子元素 */
    justify-content: center; /* 水平居中对齐子元素 */
}
.subtitle img {
    margin-top: 10px;
    width: auto; /* 设置图片宽度为 50px */
    height: 8px; /* 设置图片高度为 50px */
}
.title{
    font-size: 18px;
    font-weight: bold;
    width: 120px;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
}
</style>