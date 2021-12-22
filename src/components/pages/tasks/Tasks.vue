<template>
  <div class="container">
    <!-- form  -->
    <CreateTask />
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
    <!-- filter component -->
    <FilterTasks />
    <div class="row g-3">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
  <Footer />
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Footer from "../../Footer.vue";
import TaskCard from "./TaskCard.vue";
import FilterTasks from "./FilterTasks.vue";
import CreateTask from "./CreateTask.vue";
export default {
  components: {
    TaskCard,
    Footer,
    FilterTasks,
    CreateTask,
  },
  setup() {
    const store = useStore();
    const loading = ref(false);
    const tasks = computed(() => store.getters['task/allTasks']);
    async function fetchTasks() {
      loading.value = true;
      await store.dispatch("task/fetchTasks");
      loading.value = false;
    }
    fetchTasks();
    return {
      tasks,
      loading,
    };
  },
};
</script>

<style>
</style>