<template>
    <div>
        <MainHero/>
        <section class="py-10 md:py-14 text-white container px-5 mx-auto" v-for="(category, x) of screenCategories" :key="x">
            <h2 class="text-2xl md:text-3xl font-display">{{ category.label }}</h2>
            <hr class="h-px bg-gray-100 opacity-25 mt-5 mb-10">
            <div class="slider flex overflow-auto -mx-5 pb-10">
                <div class="slider__item inline-block mx-5 flex-grow-0 flex-shrink-0" v-for="(app, i) of category.apps" :key="i">
                    <img class="max-h-80" :src="app.pictures[0]">
                    <legend class="text-xs text-center my-2">{{ app.name }}</legend>
                </div>
            </div>
        </section>
        <MainFooter/>
    </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import MainHero from '@/components/MainHero.vue'
  import MainFooter from '@/components/Footer.vue'
  import screenCategories from '@/dataset/screens'

  export default defineComponent({
        name: 'Home',
        components: {
            MainHero,
            MainFooter,
        },
        setup () {
            return {
                screenCategories
            }
        }
  })
</script>

<style lang="scss">
    .slider::after {
        content: '';
        @apply pr-5;
    }
</style>