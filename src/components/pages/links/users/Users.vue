<template>
  <div class="row">
    <!-- spinner -->
    <div v-if="loading" >
      <div class="spinner-border text-center" style="width: 3rem; fontSize: 2rem ; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <!-- cart -->
    <UserCard v-for="user in users" :key="user.id" :user="user" class="my-2" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import UserCard from "./UserCard.vue";
import axios from 'axios';
export default {
  components: {
    UserCard,
  },
  setup(){
    const users = ref([]);
    const loading = ref(true)
    function getUsers(){
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{
        users.value = response.data;
        loading.value = false
      })
      .catch((Error)=>{
        console.log(Error);
      });
    }
    getUsers()
    return{
      users,
      loading
    }
  }
};
</script>

<style>
</style>