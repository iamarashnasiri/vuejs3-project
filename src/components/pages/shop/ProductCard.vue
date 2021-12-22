<template>
  <div class="col-md-3">
    <div class="product-card bg-white text-center p-3">
      <img :src="product.url" style="height: 200px" alt="" />
      <h5 class="my-2">{{ product.name }}</h5>
      <p class="text-success price">{{ product.price }} $</p>
      <button @click="addCart(product)" class="btn btn-dark fs-4 mb-2">
        <i class="bi bi-cart-plus mx-2"></i>
        add to cart
      </button>
    </div>

  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: {
    product: Object,
  },
  setup(){
    const store = useStore()
    function addCart(product){
      store.dispatch('cart/addCart', product)
    }
    return{
      addCart
    }
  }
};
</script>

<style>
.product-card:hover {
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}
.price {
  font-size: 1.4rem;
  font-weight: 500 !important;
  padding: 2rem;
}
</style>