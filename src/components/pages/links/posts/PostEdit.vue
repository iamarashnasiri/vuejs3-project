<template>
  <h4>Edit Post :</h4>
  <div class="col-md-6">
    <hr />
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
    <form v-else class="my-4" @submit.prevent="updatePost">
      <label class="form-label my-3" for="title">Title :</label><br />
      <input
        class="form-control"
        type="text"
        name="title"
        v-model="post.title"
      /><br />
      <label class="form-label my-3" for="body">Body :</label><br />
      <textarea
        class="form-control col-12"
        name="body"
        v-model="post.body"
        rows="5"
      ></textarea>
      <button @click="goBack" class="btn btn-secondary">
        <i class="bi bi-arrow-left"></i>
      </button>
      <input class="btn btn-dark my-3 mx-4" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  setup() {
    const loading = ref(true);
    const post = reactive({
      title: "",
      body: "",
      id: "",
    });
    const route = useRoute();
    const router = useRouter();
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((response) => {
          post.title = response.data.title;
          post.body = response.data.body;
          post.id = response.data.id;
          loading.value = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getPost();
    function updatePost() {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: post.title,
          body: post.body,
          userId: 1,
        })
        .then(() => {
          // sweet allert 
          Swal.fire({
            title: "success!",
            text: "post edited successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          router.push({ name: "PostSingle", params: { id: post.id } });
        })
        .then((Error) => {
          console.log(Error);
        });
    }
    function goBack() {
      router.push({ name: "PostSingle", params: { id: post.id } });
    }
    return {
      post,
      goBack,
      loading,
      updatePost,
    };
  },
};
</script>

<style>
</style>