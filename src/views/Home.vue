<template>
    <div>
        <MainHero/>
        <section id="collections" class="py-10 px-5 md:py-14 md:px-8 text-white mx-auto" v-for="(category, x) of screenCategories" :key="x">
            <h2 class="text-2xl md:text-3xl font-display">{{ category.label }}</h2>
            <hr class="h-px bg-gray-100 opacity-25 mt-5 mb-10">
            <Slider>
                <Slide v-for="(app, i) of category.apps" :key="i">
                    <img class="max-h-80 rounded transform transition cursor-pointer hover:scale-105" :src="app.pictures[0]" loading="lazy">
                    <legend class="text-xs text-center mt-4 font-bold">{{ app.name }}</legend>
                </Slide>
            </Slider>
        </section>
        <MainFooter/>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MainHero from '@/components/MainHero.vue'
  import MainFooter from '@/components/Footer.vue'
  import Slider from '../components/Slider/Slider.vue'
  import Slide from '../components/Slider/Slide.vue'
  import screenCategories from '@/dataset/screens'

  export default defineComponent({
        name: 'Home',
        components: {
            MainHero,
            MainFooter,
            Slider,
            Slide,
        },
        setup () {
            return {
                screenCategories
            }
        }
  })
</script>

<style lang="scss">
</style>