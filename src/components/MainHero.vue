<template>
    <div class="bg-gradient-to-br from-purple-900 to-pink-800">
        <PageHeader />
        <div class="py-24">
            <div class="container px-3 mx-auto text-white">
                <div class="flex flex-col w-full justify-center items-center text-center py-10 md:py-20">
                    <div class="mb-10">
                        <h1 id="brand" class="appear my-4 text-4xl md:text-5xl font-brand leading-tight text-center">
                            FINITION
                        </h1>
                        <p class="appear appear-2 leading-normal font-display font-light text-md md:text-xl mb-8">
                            Get inspired by the biggest companies for your mobile app.
                        </p>
                    </div>
                    <div class="appear appear-3">
                        <a href="#collections" class="mx-auto lg:mx-0 border border-white text-white font-bold py-4 px-8 hover:outline-none hover:shadow-outline hover:bg-white hover:text-gray-800 transform transition hover:scale-105 duration-300 ease-in-out">
                            Let's see that !
                        </a>
                    </div>
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

<style lang="scss" scoped>
    #brand {
        background: -webkit-linear-gradient(60deg, #C02425, #F0CB35);
        // background: -webkit-linear-gradient(60deg, #dcdfde, #747373);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .appear {
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
    }

    .appear-2 {
        animation-delay: .2s;
    }

    .appear-3 {
        animation-delay: .4s;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(70px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>
