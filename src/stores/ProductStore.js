// src/store/product.js
import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: [
      { name: "Dried Pineapple", price: 5 },
      { name: "Pineapple Gum", price: 3 },
      // Add more products as needed
    ],
  }),

  actions: {
    getProduct(name) {
      return this.products.find((product) => product.name === name);
    },
  },

  getters: {
    getAllProducts() {
      return this.products;
    },
  },
});
