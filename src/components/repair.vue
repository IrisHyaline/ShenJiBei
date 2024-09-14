<template>
    <div class="naive-input-text" style="text-align: center;">
        <!-- <td>{{ label }}</td> -->
        <div>
            <input type="number" class="input-background" v-model="inputNumber" @input="updateNumber">
            <!-- <span class="result-span">{{ result }}</span> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
        }
    },
    computed: {
        result() {
            return this.inputNumber;
        }
    }
};
</script>

<style scoped>
.naive-input-text {
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}

.input-background {
    color: rgb(255, 255, 255);
    background-color: transparent;
    text-align: center;
    border: none;
    width: 100px;
    font-size: 30px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>