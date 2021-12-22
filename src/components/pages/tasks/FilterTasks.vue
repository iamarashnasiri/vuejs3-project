<template>
  <div class="row g-3">
    <div class="col-md-3 my-5">
      <h5>FilterTasks</h5>

      <select
        @change="filterTasks"
        v-model="number"
        class="form-select fs-5"
        aria-label="Default select example"
      >
        <option selected>all</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const number = ref();
    const store = useStore();
    function filterTasks() {
      store.dispatch("task/filterTasks", number.value);
    }
    return {
      filterTasks,
      number,
    };
  },
};
</script>

<style>
</style>