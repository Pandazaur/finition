<template>
    <div>
        <MainHero/>
        <section id="collections" class="py-10 px-5 md:py-14 md:px-8 text-white container mx-auto" v-for="(category, x) of screenCategories" :key="x">
            <h2 class="text-2xl md:text-3xl font-display">{{ category.label }}</h2>
            <hr class="h-px bg-gray-100 opacity-25 mt-5 mb-10">

            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide" v-for="(app, i) of category.apps" :key="i" @click="onOpenModal(app)">
                            <img class="pointer-events-none w-96 rounded cursor-pointer" :src="app.pictures[0]" loading="lazy" >
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
                        </li>
                    </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <div class="arrow arrow-left">
                            <img class="arrow-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS42NDEgNTExLjY0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjY0MSA1MTEuNjQxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE0OC4zMiwyNTUuNzZMMzg2LjA4LDE4YzQuMDUzLTQuMjY3LDMuOTQ3LTEwLjk4Ny0wLjIxMy0xNS4wNGMtNC4xNi0zLjk0Ny0xMC42NjctMy45NDctMTQuODI3LDBMMTI1LjcwNywyNDguMjkzDQoJCQljLTQuMTYsNC4xNi00LjE2LDEwLjg4LDAsMTUuMDRMMzcxLjA0LDUwOC42NjdjNC4yNjcsNC4wNTMsMTAuOTg3LDMuOTQ3LDE1LjA0LTAuMjEzYzMuOTQ3LTQuMTYsMy45NDctMTAuNjY3LDAtMTQuODI3DQoJCQlMMTQ4LjMyLDI1NS43NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                        </div>
                    </button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <div class="arrow arrow-right">
                            <img class="arrow-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS45NDkgNTExLjk0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk0OSA1MTEuOTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4Ni4yMzUsMjQ4LjMwOEwxNDAuOTAyLDIuOTc1Yy00LjI2Ny00LjA1My0xMC45ODctMy45NDctMTUuMDQsMC4yMTNjLTMuOTQ3LDQuMTYtMy45NDcsMTAuNjY3LDAsMTQuODI3bDIzNy43NiwyMzcuNzYNCgkJCWwtMjM3Ljc2LDIzNy44NjdjLTQuMjY3LDQuMDUzLTQuMzczLDEwLjg4LTAuMjEzLDE1LjA0YzQuMDUzLDQuMjY3LDEwLjg4LDQuMzczLDE1LjA0LDAuMjEzYzAuMTA3LTAuMTA3LDAuMjEzLTAuMjEzLDAuMjEzLTAuMjEzDQoJCQlsMjQ1LjMzMy0yNDUuMzMzQzM5MC4zOTUsMjU5LjE4OCwzOTAuMzk1LDI1Mi40NjgsMzg2LjIzNSwyNDguMzA4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
        <MainFooter/>

        <Modal ref="lightBox">
            <div class="lightbox p-5">
                <Slider class="lightbox-slider" v-if="appToShow" :item-count="appToShow.pictures.length">
                    <Slide v-for="(picture, i) of appToShow.pictures" :key="i">
                        <img class="h-full max-w-md rounded" :src="picture" loading="lazy">
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
  import { App } from '@/types/App.type'

  // @ts-ignore
  import Glide, { Controls, Breakpoints, Swipe, Images } from '@glidejs/glide/dist/glide.modular.esm'

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

            onMounted(() => {

                // @ts-ignore
                new Glide('.glide', {
                    type: 'slider',
                    startAt: 0,
                    perView: 5,
                    gap: "50px",
                    bound: true,
                    // perTouch: 4,
                    rewind: false,
                    breakpoints: {
                        600: {
                            perView: 2,
                        },
                        900: {
                            perView: 3,
                            gap: "30px",
                        },
                        1200: {
                            perView: 4
                        }
                    }
                }).mount({
                    Controls,
                    Breakpoints,
                    Swipe,
                    // Images,
                })
            })

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
    /*.lightbox-slider {*/
    /*    height: 50vh;*/
    /*}*/

    .arrow {
        --size: 50px;

        scroll-behavior: smooth;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, .7);
        backdrop-filter: blur(2px);
        height: var(--size);
        width: var(--size);
        border-radius: var(--size);
        z-index: 1000;
        box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    .arrow-img {
        height: calc(var(--size, 30px) / 3);
    }

    .arrow-left {
        left: 0;
    }

    .arrow-right {
        right: 0;
    }

    .glide__track {
        overflow: visible!important;
    }
</style>
