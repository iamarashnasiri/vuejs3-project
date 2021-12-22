<template>
  <div class="container">
      <div class="row g-4 ">
          <div class="col-md-12">
              <h3 class="text-center py-5">Website Content</h3>
          </div>
          <!-- carts -->
          <div class="col-md-6">
              <div class="home-cart">
                  <h2 class="py-3">users</h2>
              <img class="cart-icon" src="../../src/assets/users-icon.png" alt="">
              <p class="px-5">This part has been included with API  users that we get this APIs from JSONPlaceholder website and put this data in bootstrap cards.</p>
              <footer class="d-flex align-items-end">
                  <button @click="goUsers" class="btn btn-dark">more</button>
              </footer>
              </div>
          </div>
          <div class="col-md-6">
              <div class="home-cart">
                  <h2 class="py-3">posts</h2>
              <img class="cart-icon" src="../../src/assets/posts-icon.png" alt="">
              <p class="px-5">This part has been included with API posts that we get the APIs from JSONPlaceholder website and put this data in bootstrap cards.</p>
              <footer class="d-flex align-items-end">
                  <button @click="goPosts" class="btn btn-dark">more</button>
              </footer>
              </div>
          </div>
          <div class="col-md-6">
              <div class="home-cart">
                  <h2 class="py-3">tasks</h2>
              <img class="cart-icon" src="../../src/assets/tasks-icon.png" alt="">
              <p class="px-5">This part has been included with tasks API that we get this APIs from JSONPlaceholder website and put this data in bootstrap cards.</p>
              <footer class="d-flex align-items-end">
                  <button @click="goTasks" class="btn btn-dark">more</button>
              </footer>
              </div>
          </div>
          <div class="col-md-6">
              <div class="home-cart">
                  <h2 class="py-3">products</h2>
              <img class="cart-icon" src="../../src/assets/products-icon.png" alt="">
              <p class="px-5">This part include products as phone cell that I use unreal data and put in Boostrap cards.</p>
              <footer class="d-flex align-items-end">
                  <button @click="goShop" class="btn btn-dark">more</button>
              </footer>
              </div>
          </div>
          
          
      </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
setup(){
    const router = useRouter()
    function goUsers(){
        router.push({ name: "Users"})
    }
    function goPosts(){
        router.push({ name: "Posts"})
    }
    function goTasks(){
        router.push({ name: "Tasks"})
    }
    function goShop(){
        router.push({ name: "Products"})
    }
    return{
        goUsers,
        goPosts,
        goTasks,
        goShop
    }
}
}
</script>

<style>
.home-cart {
    background: #fff;
    display: grid;
    justify-items: center;
    padding: 2rem;
    height: 450px;
    width: 100%;
}
.home-cart:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}
.cart-icon {
    width: 220px;
}
</style>