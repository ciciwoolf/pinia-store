<template>
  <span>
    <button
      class="cursor-pointer bg-gray-200 px-2 rounded-l"
      @click="decrement"
    >
      -
    </button>
    <input :value="modelValue" type="number" min="0" @input="updateValue" />
    <button
      class="bg-gray-200 px-2 rounded-r cursor-pointer"
      @click="increment"
    >
      +
    </button>
  </span>
</template>

<script>
export default {
  props: {
    modelValue: { type: [Number, String], default: 0 },
  },
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    },
    decrement() {
      this.updateValue(this.modelValue > 0 ? this.modelValue - 1 : null);
    },
    increment() {
      this.updateValue(this.modelValue + 1);
    },
  },
};
</script>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid gray;
  @apply border-gray-500 w-10 text-center;
}
button {
  border: 1px solid gray;
}
</style>
