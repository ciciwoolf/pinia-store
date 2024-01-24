<template>
  <li>
    <span>{{ product.name }}</span>
    <span class="whitespace-nowrap">
      <AppCountInput :model-value="count" @update:modelValue="updateCount" />
      <span class="inline-block w-12 text-right"
        >${{ count * product.price }}</span
      >
      <span class="ml-4" @click="clear">
        <fa icon="trash-alt" />
      </span>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
    count: { type: Number, required: true },
  },
  methods: {
    updateCount(value) {
      this.$emit("updateCount", value);
    },
    clear() {
      this.$emit("clear");
    },
  },
};
</script>
