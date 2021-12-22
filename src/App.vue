<template>
  <html>
    <Navbar />
    <router-view></router-view>
  </html>
</template>

<script>
import { reactive } from '@vue/reactivity';
import Navbar from "./components/Navbar.vue";
import { provide } from '@vue/runtime-core';

export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    const pages = reactive([
      {
        name: 'Home',
        routerLink : 'Home'
      },
      {
        name:'Links',
        routerLink : 'Links'
      },
      {
        name:'Tasks',
        routerLink : 'Tasks'
      },
      {
        name:'Products',
        routerLink : 'Products'
      }
    ]);
    provide('pages',pages)
    return{
      pages
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
html {
  font-family: "Montserrat", sans-serif;
  font-size: 62.5%;
  background: #f4f4f4;
}
h1 {
  font-size: 4rem !important;
  font-weight: 700 !important;
  line-height: 2rem !important;
}
h2 {
  font-size: 2.5rem !important;
  font-weight: 600 !important;
  line-height: 3rem !important;
  text-transform: capitalize !important;
}
h3 {
  font-size: 2.5rem !important;
  font-weight: 500 !important;
  line-height: 2rem !important;
}
h4 {
  font-size: 2.2rem !important;
  font-weight: 500 !important;
  line-height: 2rem !important;
}
h5 {
  font-size: 2rem ;
  font-weight: 600 !important;
  line-height: 2rem !important;
  text-transform: capitalize;
}
p {
  font-size: 1.5rem !important;
  font-weight: 400 !important;
  line-height: 2rem !important;
}
.btn {
  font-size: 1.8rem !important;
}
a {
  font-weight: 400 !important;
  text-decoration: none !important;
}
span{
  font-size: 1.2rem !important;
  font-weight: 400 !important;
  line-height: 2rem !important;
}
input{
  font-size: 1.6rem !important;
}
label{
  font-size: 1.6rem !important;
  font-weight: 500 !important;
}
textarea{
  resize: none !important;
  font-size: 1.6rem !important;
}
span{
  font-weight:500 !important ;
}
</style>
