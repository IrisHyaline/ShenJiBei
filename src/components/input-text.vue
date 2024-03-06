<template>
    <tr class="input-text">
        <td>{{ label }}</td>
        <td>&#40;{{ multiplier }}&#41;</td>
        <td>
            <input type="number" v-model="inputNumber" @input="updateNumber" :style="{ width: '40px' }">&nbsp;
            <button @click="increment">+</button> &nbsp;
            <button @click="decrement">-</button> &nbsp;
            <span>{{result }}</span>
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