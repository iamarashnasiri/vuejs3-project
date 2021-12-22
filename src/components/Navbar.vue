<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">VueProject</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(page, index) in pages" :key="index" class="nav-item">
            <router-link
              :to="{ name: page.routerLink }"
              class="nav-link"
              active-class="active"
              >{{ page.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="navbar-nav">
        <router-link to="cart" class="navbar-cart nav-link" active-class="active">
        <i class="bi bi-basket cart-icon"></i>
        <span class="notification">{{notif}}</span>
      </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const pages = inject("pages");
    const store = useStore()
    const notif = computed(() => store.state.cart.cart.length)
    function goCart() {
      router.push("./cart");
    }
    return {
      pages,
      goCart,
      notif
    };
  },
};
</script>

<style>
.nav-link {
  font-size: 1.6rem;
  margin: 0 1rem 0 1rem;
}
.navbar-brand {
  font-size: 1.6rem !important;
  font-weight: 700 !important;
}
.navbar-cart {
  position: relative;
  
}
.cart-icon {
  font-size: 1.8rem;
}
.notification {
  position: absolute;
  bottom: -0.3rem;
  left: -0.5rem;
  font-size: 1.5rem;
  color: #fff;
  background: rgba(242, 0, 0, 0.7);
  padding: 0.05rem 0.66rem;
  border-radius: 100%;
}
</style>