## Lunch n' Nerd Notes

Session 1 (Jan 26, 2024): Pinia, Options api
https://pinia.vuejs.org/

Pinia is modular by nature, so you can import it just like a module, and use it directly in your components.

Example 'store' files look like:

project-root-diretory >

src

--store

------ProductStore.js

------CartStore.js

This is a little different from Vuex, where you would break up the store into different modules.
For example: (show ERC store modules)

Tour of ProductStore.js
Tour of App.vue, importing the store and displaying the products
Tour of the Vue Console, showing Pinia and the state and getter

Help me do the CartStore and get the cart working!

1. Checkout this repo on Github.
2. Add the VSC Liveshare Extension.
3. Click on the link I share for the Liveshare, and join the liveshare session.
4. Code, edit, and save as you wish!

## I got this boilerplate code from the Vue School's - free on Github

# Pinia Boilerplate Code

![Course Feature Image](https://vueschool.io/media/bc6229f7525d1df7f87bd22604eaa468/Pinia_not-transparent.png)

## How to Use

```
npx degit  vueschool/pinia-course-boilerplate
```

```
npm install
npm run dev
```

[Checkout the course!](https://vueschool.io/courses/pinia-the-enjoyable-vue-store)
