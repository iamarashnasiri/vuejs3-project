<template>
  <div class="container">
    <h4 class="my-5">Cart :</h4>

    <div v-if="products.length == 0" class="row">
      <div class="col-md-12">
        <div class="empty-class">
          <h1 class="align-self-center text-center">
            <i
              class="bi bi-basket cart-icon"
              style="fontSize: 10rem;"
            ></i>
          </h1>
          <h1 class="align-self-center text-center">Cart is Empty</h1>
        </div>
      </div>
    </div>

    <div v-else class="row">
      <div class="table-responsive bg-white my-2">
        <table class="table align-middle">
          <thead>
            <tr class="table-header">
              <td width="40%">product</td>
              <td class="text-center">price</td>
              <td class="text-center">quantity</td>
              <td class="text-center">subtotal</td>
              <td class="text-center">action</td>
            </tr>
          </thead>
          <tbody>
            <CartItem
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </tbody>
          <tfoot>
            <tr class="table-header">
              <td width="40%">
                <button @click="removeAll" class="btn redbtn my-3">
                  Clear Cart
                </button>
              </td>
              <td class="text-center"></td>
              <td class="text-center">total :</td>
              <td class="text-center">{{ sum }}</td>
              <td class="text-center">
                <button class="btn btn-dark">Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import CartItem from "./CartItem.vue";
import Footer from "../../Footer.vue";
export default {
  components: {
    Footer,
    CartItem,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters["cart/allCart"]);
    const sum = computed(() => store.getters["cart/totalAmount"]);
    function removeAll() {
      store.dispatch("cart/removeAll");
    }
    return {
      products,
      sum,
      removeAll,
    };
  },
};
</script>

<style>
.table-header {
  font-size: 1.6rem;
  font-weight: 500;
  color: #232222;
  text-transform: capitalize;
}
.table-body {
  color: #232222;
  font-size: 1.4rem;
}
.empty-class {
  display: grid;
  height: 300px;
}
</style>