import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    items: [],
  }),

  actions: {
    addToCart(product) {
      const cartProduct = this.items.find((item) => item.name === product.name);

      if (cartProduct) {
        cartProduct.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(productName) {
      this.items = this.items.filter((item) => item.name !== productName);
    },

    updateCartItemQuantity({ productName, quantity }) {
      const product = this.items.find((item) => item.name === productName);
      if (product) {
        product.quantity = quantity;
      }
    },
  },

  getters: {
    getCartTotal() {
      return this.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    getCartItems() {
      return this.items;
    },
  },
});
