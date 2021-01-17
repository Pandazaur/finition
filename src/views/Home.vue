<template>
    <div>
        <MainHero/>
        <section id="collections" class="py-10 px-5 md:py-14 md:px-8 text-white mx-auto" v-for="(category, x) of screenCategories" :key="x">
            <h2 class="text-2xl md:text-3xl font-display">{{ category.label }}</h2>
            <hr class="h-px bg-gray-100 opacity-25 mt-5 mb-10">
            <Slider>
                <Slide v-for="(app, i) of category.apps" :key="i" @click.native="onOpenModal(app)">
                    <img class="max-h-80 w-48 rounded transform transition cursor-pointer hover:scale-105" :src="app.pictures[0]" loading="lazy">
                    <legend class="">

                    </legend>
                    <div class="flex items-center justify-center text-xs text-center mt-4">
                        <div class="flex text-center items-center justify-center">
                            <IconImage class="mr-1" :size="16" />
                            <span class="font-thin">{{ app.pictures.length }}</span>
                        </div>
                        <div class="separator h-4 w-px bg-white bg-opacity-25 mx-2"></div>
                        <div class="font-bold">
                            {{ app.name }}
                        </div>
                    </div>
                </Slide>
            </Slider>
        </section>
        <MainFooter/>

        <Modal ref="lightBox">
            <div class="lightbox p-5">
                <Slider v-if="appToShow">
                    <Slide v-for="(picture, i) of appToShow.pictures" :key="i">
                        <img class="max-h-120 w-80 max-w-screen rounded" :src="picture" loading="lazy">
                        <legend class="text-xs text-white text-center mt-4 font-bold">
                            {{ i + 1 }} / {{ appToShow.pictures.length }}
                        </legend>
                    </Slide>
                </Slider>
                <div class="flex justify-center">
                    <span class="text-xs text-white text-center mt-4 font-bold rounded-full bg-black p-3 bg-opacity-70">
                        {{ appToShow.name }}
                    </span>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import MainHero from '@/components/MainHero.vue'
  import MainFooter from '@/components/Footer.vue'
  import Slider from '../components/Slider/Slider.vue'
  import Slide from '../components/Slider/Slide.vue'
  import Modal from '../components/Modal.vue'
  import IconImage from '@/components/icons/IconImage.vue'
  import screenCategories from '@/dataset/screens'
  import {App} from '@/types/App.type'

  export default defineComponent({
        name: 'Home',
        components: {
            MainHero,
            MainFooter,
            Slider,
            Slide,
            Modal,
            IconImage,
        },
        setup () {
            const lightBox = ref<any | null>(null)
            const appToShow = ref<App | null>(null)

            const onOpenModal = (app: App) => {
                if (!app) {
                    return null
                }

                appToShow.value = app

                if (lightBox.value) {
                    lightBox.value.open()
                }
            }

            return {
                lightBox,
                appToShow,
                onOpenModal,
                screenCategories
            }
        }
  })
</script>

<style lang="scss" scoped>
</style>
