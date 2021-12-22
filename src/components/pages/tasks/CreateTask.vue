<template>
  <div class="row">
    <h4 class="mt-5">Create a Task :</h4>
    <div class="col-md-6">
      <form @submit.prevent="createTask" class="d-flex my-2" action="">
        <input
          class="form-control d-inline-block my-2 fs-3"
          style="width: 75%"
          type="text"
          placeholder="Tast content"
          v-model="title"
        />
        <input
          class="btn btn-dark mx-2 my-2 d-inline-block fs-3"
          type="submit"
          value="Create"
        />
      </form>
    </div>
    <hr />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from 'vuex';
export default {
  setup() {
    const title = ref("");
    const store = useStore()
    function createTask() {
      if (title.value == "") {
        alert("Fill the input");
      } else {
          store.dispatch('task/postTask', title.value)
      }
    }
    return {
      createTask,
      title,
    };
  },
};
</script>

<style>
</style>