<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<!-- :style="{'background-image':'url(https://avhstorage.blob.core.windows.net/website/istockphoto-962416468-1024x1024.jpg)'}" -->
  <div class="relative bg-white pt-16 sm:pt-20 lg:pt-20" >
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-lg font-semibold text-blue-800">Professional Plumbing</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">High quality service you trust </p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500"> Responsiveness and quality are both important factors when choosing a commercial plumbing service. Below are some of the services you can trust <br> AVH Plumbing to handle with professionalism and at competitve prices. </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="iconify shadow-lg inline-flex items-center justify-center rounded-md bg-blue-800 " :data-icon=feature.icon style="color: #fff;" width="50">

                  </span>
                </div>
                <h3 class="mt-8 text-lg font-semibold tracking-tight text-gray-900">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


const features = [
  {
    name: 'Plumbing Repair',
    description: "If you're in need of plumbing repair, call a professional as soon as possible. Untreated leaks can cause significant damage.",
    icon: "mdi-pipe-wrench",
  },
  {
    name: 'Water Heaters',
    description: "Water heaters keep the hot water flowing in your business. If problems arise with your water heater, we're here to help.",
    icon: "mdi-water-thermometer",
  },
  {
    name: 'Fixture Installation',
    description: "Plumbing fixtures give you access to your water supply. We install all types of fixtures from faucets to toilets and beyond. ",
    icon: "mdi-faucet-variant",
  },
  {
    name: 'Drain Cleaning',
    description: 'Drain cleaning is important to keep your drains flowing smoothly and prevent clogs. We can unclog and keep your drains clear in no time!',
    icon: "mdi-water-check",
  },
  {
    name: 'Sewer Services',
    description: "Sewer services prevent pollution and keep our waterways clean. We keep your business open and connected to these services.",
    icon: "mdi-toilet",
  },
  {
    name: 'Booster Pumps',
    description: "We install booster pumps! These are machines that take in water at low pressure and gives it an extra push to the level you need.",
    icon: "mdi-pump",
  },
]
</script>