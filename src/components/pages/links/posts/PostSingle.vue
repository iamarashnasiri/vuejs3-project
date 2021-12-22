<template>
  <div class="col-md-6">
    <!-- spinner -->
    <div v-if="loading">
      <div
        class="spinner-border text-center"
        style="width: 3rem; fontsize: 2rem; height: 3rem"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <!-- content -->
    <div v-else class="post-cart-single">
      <h4 class="my-4">{{ post.title }}</h4>
      <p class="text-justify text-body">
        {{ post.body }}
      </p>
      <button @click="backToPosts" class="btn btn-secondary">
        <i class="bi bi-arrow-left"></i>
      </button>
      <router-link
        :to="{ name: 'PostEdit', params: { id: post.id } }"
        class="btn btn-secondary mx-4 my-2"
        >Edit</router-link
      >
      <button @click="removePost" class="btn btn-danger my-2">Remove</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import Swal from "sweetalert2";
export default {
  setup() {
    const loading = ref(true);
    const post = ref([]);
    const router = useRouter();
    const route = useRoute();
    function backToPosts() {
      router.push("/links/posts");
    }
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((response) => {
          post.value = response.data;
          loading.value = false;
        });
    }
    getPost();
    function removePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(() => {
          Swal.fire({
            title: "success!",
            text: "post edited successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          router.push("/links/posts");
        });
    }
    return {
      backToPosts,
      post,
      loading,
      removePost,
    };
  },
};
</script>

<style>
.post-cart-single {
  background: #fff;
  padding: 1rem;
}
</style>