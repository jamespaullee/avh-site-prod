<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-100 py-5">
    <main class="lg:relative">
      <div
        class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center  lg:text-left"
      >
        <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block xl:inline">Commercial plumbing </span>
            {{ " " }}
            <span class="block text-blue-800 xl:inline"
              >and repair services</span
            >
          </h1>
          <p
            class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Commercial plumbing services are an important part of keeping any business up and running. From maintaining proper water pressure to keeping drainage systems clear, <b>AVH Plumbing</b> keeps your business running smoothly.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <router-link
                to="/pricing"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-600 md:py-4 md:px-10 md:text-lg"
                >View Pricing</router-link
              >
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <router-link
                to="/about#"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-800 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >Learn About Us</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
      >
        <img
          class="rounded-bl-md rounded-tl-md absolute inset-0 h-full w-full object-cover drop-shadow-3xl"
          src="https://avhstorage.blob.core.windows.net/website/stock-photo-portrait-of-female-plumber-working-on-central-heating-boiler-721759927.jpg"
          alt=""
        />
      </div>
    </main>
  </div>
</template>
