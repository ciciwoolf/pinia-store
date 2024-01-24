<template>
  <li class="card">
    <img :src="`/images/${product.image}`" class="mb-3" width="300" />
    <div>
      {{ product.name }} -
      <span class="text-green-500">${{ product.price }}</span>
      <div class="text-center m-4">
        <AppCountInput v-model="count" />
      </div>
      <AppButton class="primary" @click="addToCart">Add to Cart</AppButton>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.count);
      this.count = 0;
    },
  },
};
</script>
