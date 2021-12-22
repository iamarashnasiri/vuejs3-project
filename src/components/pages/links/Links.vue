<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <nav class="nav my-4">
          <router-link
            @click="setActive"
            class="nav-link"
            active-class="nav-link-active"
            exact-active-class="nav-link-active"
            :to="{ name: 'Posts' }"
            >posts</router-link
          >
          <router-link
            @click="setActive"
            class="nav-link"
            active-class="nav-link-active"
            exact-active-class="nav-link-active"
            :to="{ name: 'Users' }"
            >users</router-link
          >
        </nav>
      </div>
    </div>
    <router-view v-if="active"></router-view>
    <section class="row" v-else>
      <div class="col-md-6">
        <div class="home-cart">
          <h2 class="py-3">users</h2>
          <img
            class="cart-icon"
            src="../../../../src/assets/users-icon.png"
            alt=""
          />
          <p class="px-5">
            This part has been included with API users that we get this APIs
            from JSONPlaceholder website and put this data in bootstrap cards.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="home-cart">
          <h2 class="py-3">posts</h2>
          <img
            class="cart-icon"
            src="../../../../src/assets/posts-icon.png"
            alt=""
          />
          <p class="px-5">
            This part has been included with API posts that we get the APIs from
            JSONPlaceholder website and put this data in bootstrap cards.
          </p>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import { ref } from "@vue/reactivity";
import Footer from "../../Footer.vue";
export default {
  components: { Footer },
  setup() {
    const active = ref(false);
    function setActive() {
      active.value = true;
    }
    return {
      active,
      setActive,
    };
  },
};
</script>

<style scoped>
.nav-link {
  color: #8e8787 !important;
}
.nav-link-active {
  color: #d71a1b !important;
  font-weight: 500 !important;
  border-bottom: #d71a1b solid 2px;
}
</style>