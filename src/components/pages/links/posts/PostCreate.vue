<template>
  <h4>Create Post :</h4>
  <div class="col-md-6">
    <hr />
    <form class="my-4" @submit.prevent="createPost">
      <label class="form-label my-3" for="title">Title :</label><br />
      <input
        v-model="form.title"
        class="form-control"
        type="text"
        name="title"
      /><br />
      <label class="form-label my-3" for="body">Body :</label><br />
      <textarea
        class="form-control col-12"
        name="body"
        v-model="form.body"
        rows="5"
      ></textarea>
      <input class="btn btn-dark my-3" type="submit" value="Create" />
      <button class="btn btn my-3 mx-4" @click="backToPosts">
        Back to Posts
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive } from "@vue/reactivity";
import Swal from "sweetalert2";
export default {
  setup() {
    const form = reactive({
      title: "",
      body: "",
    });
    const router = useRouter();
    function backToPosts() {
      router.push("/links/posts");
    }
    function createPost() {
      if (form.title == "" && form.body == "") {
        alert("Please fill the inputs");
      } else {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            title: form.title,
            body: form.body,
            userId: 1,
          })
          .then(() => {
            // sweet allert
            Swal.fire({
              title: "success!",
              text: "post created successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
            router.push("/links/posts");
          })
          .catch((Error) => {
            console.log(Error);
          });
      }
    }
    return {
      backToPosts,
      createPost,
      form,
    };
  },
};
</script>

<style>
</style>