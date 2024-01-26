<template>
  <li>
    <span>{{ item.name }}</span>
    <span class="whitespace-nowrap">
      <AppCountInput :model-value="count" @update:modelValue="updateCount" />
      <span class="inline-block w-12 text-right"
        >${{ count * item.price }}</span
      >
      <span class="ml-4" @click="clear">
        <fa icon="trash-alt" />
      </span>
    </span>
  </li>
</template>

<script>
import { useCartStore } from "../stores/CartStore";
export default {
  props: {
    item: { type: Object, required: true },
    count: { type: Number, required: true },
  },
  data() {
    return {
      cartStore: useCartStore(),
    };
  },
  computed: {
    items() {
      return this.cartStore.items;
    },
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
