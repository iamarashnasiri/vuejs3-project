<template>
  <div class="col-md-4">
    <div class="task-card" :class="{'bg-light' : task.completed}">
      <p class="align-items-center align-self-center" 
      :class="{'text-decoration-line-through':task.completed}">
        {{task.title}}
      </p>
      <span class="align-items-center align-self-center">
        <i @click="updateTask" class="bi bi-check-all mx-3 fs-4" v-if="task.completed"></i>
        <i @click="updateTask" class="bi bi-check mx-3 fs-4" v-else></i>
        <i @click="removeTask" class="bi bi-trash-fill fs-4"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { toRef } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
  props:{
    task:Object,
  },
  setup(props){
    const store = useStore()
    const task = toRef(props,'task')
    async function updateTask(){
      await store.dispatch('task/updateTask',task.value)
    }
    async function removeTask(){
      await store.dispatch('task/removeTask',task.value)
    }

    return{
      updateTask,
      removeTask
    }
  }
};
</script>

<style>
.task-card {
  background: #fff;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 85% 15%;
  height: 80px;
}
</style>