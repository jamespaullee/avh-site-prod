<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative overflow-hidden bg-white pb-32">
    <div class="relative">
      <div class="mt-24">
        <div
          class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
        >
          <div
            class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"
          >
            <div>
              <div>
                <span
                  class="iconify flex px-2 h-12 w-12 items-center justify-center rounded-md bg-indigo-600"
                  data-icon="bi-check-lg"
                  style="color: #fff"
                  width="50"
                >
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                  We've got you covered
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  Commercial plumbing services encompass a wide range of
                  activities, from fixing leaks and installing new fixtures to
                  maintaining sewer lines and repairing pipelines. Plumbers who
                  work in commercial settings typically have more experience and
                  training than those who work in residential settings, as the
                  plumbing systems in commercial buildings are often more
                  complex. As a result, commercial plumbers are able to handle a
                  wider range of repair and maintenance tasks. Call us today for
                  all your plumbing needs!
                </p>

                <div class="mt-6">
                  <router-link
                    to="/pricing"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white hover:bg-red-600"
                    >View Pricing</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div class="sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://avhstorage.blob.core.windows.net/website/Water_Heater.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
      >
        <div
          class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0"
        >
          <div>
            <div>
              <span
                class="iconify flex px-2 h-12 w-12 items-center justify-center rounded-md bg-indigo-600"
                data-icon="bi-people-fill"
                style="color: #fff"
                width="50"
              >
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                Committed to diversity & inclusion
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                AVH Plumbing is a proud supporter of the LGBTQ+ community. We
                believe in the importance of diversity and are committed to
                creating an inclusive environment for all of our employees. Our
                goal is to create a workplace where everyone feels welcome,
                respected, and valued. We believe that diversity makes us
                stronger, and we are committed to promoting an inclusive culture
                in our company. Thank you for supporting our mission to create a
                more diverse and inclusive workplace!
              </p>
              <div class="mt-6 grid grid-cols-4 gap-4">
                <router-link
                  to="/about"
                  class="lg:col-span-1 inline-flex items-center sm:col-start-1 sm:col-span-2 justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white hover:bg-red-600"
                  >Learn More</router-link
                >
                <router-link
                  to="/careers"
                  class="lg:col-span-1 xl:col-start-2 sm:col-start-3 sm:col-span-2 inline-flex items-center justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white hover:bg-red-600"
                  >Apply Now</router-link
                >
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p class="text-base text-gray-500">
                  &ldquo;Women working in the plumbing industry is very rare. I
                  appreciate the focus that AVH Plumbing has on making a change
                  and encouraging anyone to become a plumber and learn trade
                  skills.&rdquo;
                </p>
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                  </div>
                  <div class="text-base font-medium text-gray-700">
                    Lauren Cuervo, Executive Assistant
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://as1.ftcdn.net/v2/jpg/04/02/09/94/1000_F_402099430_pkUiHKFpTDTrDVQ7h2SB8qKK3KAUbvdG.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
