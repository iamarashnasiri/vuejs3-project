<template>
  <div class="col-md-4">
    <div class="user-card">
      <h4 class="my-4">{{user.name}} <i class="bi bi-chevron-right fs-5"></i> </h4>
      <div class="row">
          <p class="title col-4">
              username :  <br> <br>
              email : <br> <br>
              phone :
          </p>
          <p class="content col-8">
              {{user.username}} <br> <br>  
              {{user.email}} <br> <br>
              {{user.phone}}
          </p>
        </div>      
      </div>
    </div>
</template>

<script>
export default {
  props:{
    user:Object
  }
};
</script>

<style>
.user-card {
  background: #fff;
  padding: 1.5rem;
  margin: 10px 0 10px 0;
}
.user-card:hover {
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}
.user-card .title {
  font-size: 14px;
  font-weight: 500;
  color: #232222;
}
.user-card .content {
  font-size: 14px;
  font-weight: 400;
  color: #655e5e;
}
</style>