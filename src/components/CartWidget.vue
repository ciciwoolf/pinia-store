<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="toggleCart">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">10</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="closeCart">
      <div>
        <ul class="items-in-cart">
          <CartItem
            :product="{ name: 'Dried Pineapple', price: 5 }"
            :count="5"
            @updateCount="updateCount"
            @clear="clearItem"
          />
          <CartItem
            :product="{ name: 'Pineapple Gum', price: 3 }"
            :count="5"
            @updateCount="updateCount"
            @clear="clearItem"
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>$40</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2" @click="clearCart"
            >Clear Cart</AppButton
          >
          <AppButton class="primary">Checkout</AppButton>
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <!-- <div><em>Cart is Empty</em></div> -->
    </AppModalOverlay>
  </div>
</template>

<script>
import { ref } from "vue";
import AppModalOverlay from "./AppModalOverlay.vue";
import CartItem from "./CartItem.vue";
import AppButton from "./AppButton.vue"; // Import your AppButton component

export default {
  components: {
    AppModalOverlay,
    CartItem,
    AppButton,
  },
  data() {
    return {
      active: ref(false),
    };
  },
  methods: {
    toggleCart() {
      this.active = !this.active;
    },
    closeCart() {
      this.active = false;
    },
    updateCount(value) {
      // Handle count update logic here
      console.log("Updating count:", value);
    },
    clearItem() {
      // Handle clear item logic here
      console.log("Clearing item");
    },
    clearCart() {
      // Handle clear cart logic here
      console.log("Clearing cart");
      this.active = false;
    },
  },
};
</script>

<style lang="pcss" scoped>
.items-in-cart {
  @apply mb-5;
}
.items-in-cart li {
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even) {
  @apply bg-gray-300;
}
</style>
