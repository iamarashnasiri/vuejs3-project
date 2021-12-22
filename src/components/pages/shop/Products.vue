<template>
<div class="container">
    <div class="row">
        <h4 class="my-5">Products :</h4>
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</div>
<Footer />
</template>

<script>
import ProductCard from './ProductCard.vue'
import Footer from '../../Footer.vue'
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
components:{
    ProductCard,
    Footer
},
setup(){
    const store = useStore()
    const products = computed( () => store.getters['product/allProducts'] )

  return {
    products,
  }
  }
}
</script>

<style>

</style>