<template>
  <button class="btn btn-dark my-4" @click="goCreate">+ Create a Post</button>
  <div class="row">
    <!-- spinner -->
    <div v-if="loading" >
      <div class="spinner-border text-center" style="width: 3rem; fontSize: 2rem ; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <!-- cart -->
    <PostCard v-else v-for="post in posts" :key="post.id" :post="post" class="my-2" />
  </div>
</template>

<script>
import { useRouter, } from "vue-router";
import axios from "axios";
import PostCard from "./PostCard.vue";
import { ref } from '@vue/reactivity';
export default {
  components: {
    PostCard,
  },
  setup() {
    const posts = ref([])
    const router = useRouter();
    const loading = ref(true)

    function goCreate() {
      router.push("/links/posts/create");
    }
    function getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
          posts.value = response.data
          loading.value = false
        })
        .catch(function(error){
          console.log(error);
        })
    }
    getPosts();
    return {
      goCreate,
      posts,
      loading
    };
  },
};
</script>

<style>
</style>