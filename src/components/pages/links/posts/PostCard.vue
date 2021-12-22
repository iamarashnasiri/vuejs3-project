<template>
  <div class="col-md-4">
    <router-link :to="{ name: 'PostSingle',params:{ id: post.id} }" class="post-cart">
      <h4 class="my-4 text-dark">{{ post.title }}</h4>
      <p class="text-justify text-body">
        {{ post.body }}
      </p>
      <footer class="d-flex align-items-end">
        <span
          class="d-flex justify-content-between text-secondary"
          style="width: 100%"
        >
          <div>
            <img src="../../../../assets/image.png" alt="" />
            <strong class="px-2 text-dark">YingMing</strong>
          </div>
          4 hours ago
          <div>
            <span class="mx-2">
              <i class="bi bi-lightning"></i>
              25
            </span>
            <span>
              <i class="bi bi-chat-square-dots"></i>
              32
            </span>
          </div>
        </span>
      </footer>
    </router-link>
  </div>
</template>

<script>
import { toRef } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  props: {
    post: Object,
  },
  setup(props) {
    const post = toRef(props, "post");
    const router = useRouter();
    function goSingle() {
      router.push({ name: "PostSingle", params: { id: post.id } });
    }
    return {
      goSingle,
    };
  },
};
</script>

<style>
.post-cart {
  background: #fff;
  display: grid;
  padding: 1rem;
  height: 250px;
  cursor: pointer;
}
.post-cart:hover {
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}
</style>