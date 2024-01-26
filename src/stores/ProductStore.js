// src/store/product.js
// use 'defineStore to create your store
import { defineStore } from "pinia";
import products from "@/data/products.json"; //normally from an api

// defineStore takes two arguments. The first is the 'id', and is Pascal Case by convention.
// the second argument is an object of options, which includes state, actions, and getters.
// notice anything missing from the usual suspects in this store setup?

// export the store, using the naming convention of prefixing the id with 'use':
export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: products,
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
