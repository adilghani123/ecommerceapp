<template>
  <div>
    <h3 class="text-center my-5">OUR PRODUCTS</h3>

    <div class="container">
      <div class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-md-4 mb-4 d-flex justify-content-center"
        >
          <div class="card h-100" style="width: 18rem">
            <img
              :src="product.image"
              :alt="product.title"
              class="card-img-top"
              style="height: 250px; object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text text-truncate">{{ product.description }}</p>
              <p class="fw-bold">${{ product.price }}</p>
              <button class="btn btn-primary" @click="goToProduct(product.id)">
                View Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const products = ref([]);

const goToProduct = (id) => {
  router.push(`/products/${id}`);
};

onMounted(async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    products.value = await res.json();
  } catch (error) {
    console.error("❌ Failed to fetch products:", error);
  }
});
</script>
