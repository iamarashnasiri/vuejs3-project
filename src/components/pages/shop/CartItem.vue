<template>
  <tr class="table-body">
    <td>
      <img :src="product.url" style="height: 154px" alt="" />
      <h5 class="d-inline">{{ product.name }}</h5>
    </td>
    <td class="text-center price">{{ product.price }} $</td>
    <td class="text-center">
      <button @click="increment(product)" class="btn btn-dark mx-3">+</button>
      {{ product.quantity }}
      <button @click="decrement(product)" class="btn btn-dark mx-3">-</button>
    </td>
    <td class="text-center price">{{ subTotal }} $</td>
    <td class="text-center">
      <button @click="removeItem(product)" class="btn redbtn">remove</button>
    </td>
  </tr>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: {
    product: Object,
  },
  setup(props) {
    const store = useStore();
    const subTotal = computed(
      () => props.product.price * props.product.quantity
    );
    function increment(product) {
      store.dispatch("cart/increment", product);
    }
    function decrement(product) {
      store.dispatch("cart/decrement", product);
    }
    function removeItem(product) {
      store.dispatch("cart/removeItem", product);
    }
    return {
      subTotal,
      increment,
      decrement,
      removeItem
    };
  },
};
</script>

<style>
.redbtn {
  background: #d10b0b !important;
  color: #fff !important;
}
.redbtn:hover {
  background: #d82424 !important;
  color: #fff !important;
}
</style>