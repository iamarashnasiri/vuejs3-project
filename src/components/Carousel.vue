<template>
  <!-- carousel -->
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
    
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../src/assets/main-banner-box.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h1 class="carousel-text">{{carouselCaption}}</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../src/assets/main-banner-box.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h1 class="carousel-text">{{carouselCaption}}</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../src/assets/main-banner-box.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h1 class="carousel-text">{{carouselCaption}}</h1>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
setup(){
    const carouselCaption = inject('carouselCaption')
    return {
        carouselCaption
    }
}
}
</script>

<style>
.carousel-text {
  text-transform: capitalize;
  color: #FFFFFF;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
}
.carousel-item {
    position: relative !important;
}
.carousel-caption {
    position: absolute !important;
    top: 50%;
}
.carousel-indicators button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 100% !important;
  margin: 1rem !important;
}
</style>