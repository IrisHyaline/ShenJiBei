<template>
    <tr class="single-tick">
        <td><label>{{ label }}</label></td>
        <td>&#40;{{ multiplier }}&#41;</td>
        <td><input type="checkbox" v-model="isChecked" @change="handleCheckboxChange" /></td>
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
