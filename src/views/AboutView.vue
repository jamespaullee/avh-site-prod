<template>
  <div class="about">
    <AboutLeaders></AboutLeaders>
    <AboutStaff></AboutStaff>
    <AboutCTA></AboutCTA>
    <CareersHeader></CareersHeader>
    <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
      <router-link
        to="/careers"
        class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
        >Apply Now</router-link
      >
    </div>
  </div>
</template>

<script setup>
import AboutLeaders from "@/components/AboutLeaders.vue";
import AboutStaff from "@/components/AboutStaff.vue";
import CareersHeader from "@/components/CareersHeader.vue";
import AboutCTA from "@/components/AboutCTA.vue";
</script>
