<template>
  <div class="sm:col-span-2">
    <label for="company" class="block text-sm font-medium text-gray-700"
      >Company</label
    >
    <div class="mt-1">
      <input
        type="text"
        name="company"
        id="company"
        autocomplete="organization"
        class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  </div>
  <div class="sm:col-span-2">
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Email</label
    >
    <div class="mt-1">
      <input
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  </div>
  <div class="sm:col-span-2">
    <label for="phone-number" class="block text-sm font-medium text-gray-700"
      >Phone Number</label
    >
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <label for="country" class="sr-only">Country</label>
        <select
          id="country"
          name="country"
          class="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </select>
      </div>
      <input
        type="text"
        name="phone-number"
        id="phone-number"
        autocomplete="tel"
        class="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="+1 (555) 987-6543"
      />
    </div>
  </div>
  <div class="sm:col-span-2">
    <label for="message" class="block text-sm font-medium text-gray-700"
      >Message</label
    >
    <div class="mt-1">
      <textarea
        id="message"
        name="message"
        rows="4"
        class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  </div>
</template>
