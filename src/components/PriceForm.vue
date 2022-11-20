<template>

  <div class="overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
    <div class="relative mx-auto max-w-xl">
      <svg
        class="absolute left-full translate-x-1/2 transform"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <svg
        class="absolute right-full bottom-0 -translate-x-1/2 transform"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <div class="mt-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Serivce Details
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Tell us more about what you're experiencing and the urgency of your
          request.
        </p>
      </div>
      <div class="mt-12">
        <form
          action="#"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              for="service-description"
              class="block text-sm font-medium text-gray-700"
              >Service Description</label
            >
            <select
              id="service-description"
              name="service-description"
              v-model="store.serviceDesc"
              class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option value ="Clog" selected="">Clogged Drain / Toilet</option>
              <option value ="Fixture Replacement">Fixture Replacement</option>
              <option value ="Leak or Damaged Fixture">Leaking / Damaged Fixture</option>
              <option value ="Leak or Damaged Pipe">Leaking / Damaged Pipe</option>
              <option value ="Water Pressure">Water Pressure Adjustment</option>
              <option value ="Water Heater">Water Running Cold</option>
              <option value ="Other">Other</option>
            </select>
          </div>
          <div>
            <label
              for="service-urgency"
              class="block text-sm font-medium text-gray-700"
              >Service Urgency</label
            >
            <select
              id="service-urgency"
              name="service-urgency"
              v-model="store.serviceUrgency"
              class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option value="1 Day" selected="">1 Day</option>
              <option value="Same Day" >Same Day</option>
              <option value="Rush" >2 Hour / After-Hours</option>
            </select>
          </div>

          <div class="sm:col-span-2 text-center">
            <a
            @click="getQuote"
              type="submit"
              class="inline-flex w-1/2 items-center justify-center text-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Get Quote
          </a>
          </div>
        </form>
        <div
    class="container mx-auto text-center columns-1 overflow-hidden bg-white py-8"
  >
    <a
      @click="reloadPricing"
      href="#"
      class="inline-flex w-1/4 items-center justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Go Back
    </a>
  </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
import { useStore } from "@/stores/pinia";

const agreed = ref(false);

const store = useStore();

const reloadPricing = () => {
  location.reload();
};

const getQuote = () => {
  console.log(store.serviceDesc)
  console.log(store.serviceUrgency)
};

</script>
