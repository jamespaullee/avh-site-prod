<template>
  <nav aria-label="Progress" class=" bg-white">
    <ol
      role="list"
      class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
    >
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        class="relative md:flex md:flex-1"
      >
        <a
          v-if="step.status === 'complete'"
          class="group flex w-full items-center"
        >
          <span class="flex items-center px-6 py-4 text-sm font-medium">
            <span
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 "
            >
              <CheckIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <span class="ml-4 text-sm font-medium text-gray-900">{{
              step.name
            }}</span>
          </span>
        </a>
        <a
          v-else-if="step.status === 'current'"
          class="flex items-center px-6 py-4 text-sm font-medium"
          aria-current="step"
        >
          <span
            class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600"
          >
            <span class="text-indigo-600">{{ step.id }}</span>
          </span>
          <span class="ml-4 text-sm font-medium text-indigo-600">{{
            step.name
          }}</span>
        </a>
        <a v-else class="group flex items-center">
          <span class="flex items-center px-6 py-4 text-sm font-medium">
            <span
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300"
            >
              <span class="text-gray-500">{{
                step.id
              }}</span>
            </span>
            <span
              class="ml-4 text-sm font-medium text-gray-500"
              >{{ step.name }}</span
            >
          </span>
        </a>
        <template v-if="stepIdx !== steps.length - 1">
          <!-- Arrow separator for lg screens and up -->
          <div
            class="absolute top-0 right-0 hidden h-full w-5 md:block"
            aria-hidden="true"
          >
            <svg
              class="h-full w-full text-gray-300"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 -2L20 40L0 82"
                vector-effect="non-scaling-stroke"
                stroke="currentcolor"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </template>
      </li>
    </ol>
  </nav>
  <div v-for="step in steps" :key="step.name" class="pricing">
    <PriceLocation
      v-if="step.status === 'current' && step.name === 'Location'"
      @zipComplete="showAlert"
    ></PriceLocation>
    <PriceForm
      v-if="step.status === 'current' && step.name === 'Service Details'"
    ></PriceForm>
  </div>
</template>

<script setup>
import PriceForm from "@/components/PriceForm.vue";
import PriceLocation from "@/components/PriceLocation.vue";
import { CheckIcon } from "@heroicons/vue/24/solid";
import {useStore} from '@/stores/pinia'

const store = useStore()

const steps = [
  { id: "01", name: "Location", href: "#", status: "current" },
  { id: "02", name: "Service Details", href: "#", status: "upcoming" },
  { id: "03", name: "Quote", href: "#", status: "upcoming" },
];

const showAlert = () => {
  if (store.zipCode != null && store.zipCode.length == 5) 
  steps[0].status = "complete",
  steps[1].status = "current";
  else {
    alert('Please Enter a 5 Digit Zip Code')
  }
}

</script>
