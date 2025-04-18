<!-- components/Slider.vue -->
<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="2"
      ></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="image2" class="d-block w-100" alt="Slide 1" />
      </div>
      <div class="carousel-item">
        <img :src="image1" class="d-block w-100" alt="Slide 2" />
      </div>
      <div class="carousel-item">
        <img :src="image3" class="d-block w-100" alt="Slide 3" />
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script setup>
import image1 from "~/public/assets/wal1.jpg";
import image2 from "~/public/assets/wal2.jpg";
import image3 from "~/public/assets/wal3.jpg";
</script>

<style scoped>
.carousel-item img {
  max-height: 450px;
}
</style>
