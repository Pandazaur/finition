<template>
    <div class="bg-gradient-to-br from-purple-900 to-pink-800">
        <PageHeader />
        <div class="pt-24">
            <div class="container px-3 mx-auto text-white">
                <!--Left Col-->
                <div class="flex flex-col w-full justify-center items-center text-center py-10 md:py-20">
                    <!-- <p class="font-display tracking-loose w-full">Out of inspiration ?</p> -->
                    <h1 class="my-4 text-3xl md:text-5xl font-title font-bold leading-tight text-center">
                        Welcome to ????
                    </h1>
                    <p class="leading-normal font-body text-md md:text-xl mb-8">
                        A collection of mobile screen example by big companies.
                    </p>
                    <button class="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        See the collections
                    </button>
                </div>
            </div>
        </div>
        <Wave/>
    </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import Wave from './Wave.vue'
  import PageHeader from './Header.vue'

  export default defineComponent({
        name: 'Home',
        components: {
            Wave,
            PageHeader,
        },
  })
</script>