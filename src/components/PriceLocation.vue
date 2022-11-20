<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-around lg:px-8"
    >
      <div class="max-w-xl">
        <h2
          class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          Your Quote in <br> 2 Easy Steps
        </h2>
        <p class="mt-5 text-xl text-gray-500">
          Start with your zip code, then select a few details about the service you need. <b>Get your quote instantly! </b>
        </p>
      </div>
      <div class="mt-10 w-full max-w-xs">
        <label for="currency" class="block text-base font-medium text-gray-500"
          >Enter Your Zip Code</label
        >
        <div class="relative mt-1.5">
          <input
            type="text"
            name="zip-code"
            id="zip-code"
            autocomplete="zip-code"
            v-model="store.zipCode"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <a
            @click="$emit('zipComplete')"
            href="#"
            class="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white hover:bg-red-600"
          >
            Select Service
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/stores/pinia";

const store = useStore();

const emit = defineEmits(["zipComplete"]);
const zipCode = ref(null);
</script>
