<template>
    <Modal ref="lightBox">
        <div class="lightbox p-5">
            <div class="flex items-center">
                <button
                    v-if="pictureIndexToShow > 0"
                    @click="onPrevious"
                >
                    <div class="arrow arrow-left" @click="onPrevious">
                        <img class="arrow-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS42NDEgNTExLjY0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjY0MSA1MTEuNjQxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE0OC4zMiwyNTUuNzZMMzg2LjA4LDE4YzQuMDUzLTQuMjY3LDMuOTQ3LTEwLjk4Ny0wLjIxMy0xNS4wNGMtNC4xNi0zLjk0Ny0xMC42NjctMy45NDctMTQuODI3LDBMMTI1LjcwNywyNDguMjkzDQoJCQljLTQuMTYsNC4xNi00LjE2LDEwLjg4LDAsMTUuMDRMMzcxLjA0LDUwOC42NjdjNC4yNjcsNC4wNTMsMTAuOTg3LDMuOTQ3LDE1LjA0LTAuMjEzYzMuOTQ3LTQuMTYsMy45NDctMTAuNjY3LDAtMTQuODI3DQoJCQlMMTQ4LjMyLDI1NS43NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                    </div>
                </button>
                <img class="zoomed-picture rounded mx-auto" :src="pictureShown" loading="lazy">
                <button
                    v-if="pictureIndexToShow < appToShow.pictures.length - 1"
                    @click="onNext">
                    <div class="arrow arrow-right">
                        <img class="arrow-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS45NDkgNTExLjk0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk0OSA1MTEuOTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4Ni4yMzUsMjQ4LjMwOEwxNDAuOTAyLDIuOTc1Yy00LjI2Ny00LjA1My0xMC45ODctMy45NDctMTUuMDQsMC4yMTNjLTMuOTQ3LDQuMTYtMy45NDcsMTAuNjY3LDAsMTQuODI3bDIzNy43NiwyMzcuNzYNCgkJCWwtMjM3Ljc2LDIzNy44NjdjLTQuMjY3LDQuMDUzLTQuMzczLDEwLjg4LTAuMjEzLDE1LjA0YzQuMDUzLDQuMjY3LDEwLjg4LDQuMzczLDE1LjA0LDAuMjEzYzAuMTA3LTAuMTA3LDAuMjEzLTAuMjEzLDAuMjEzLTAuMjEzDQoJCQlsMjQ1LjMzMy0yNDUuMzMzQzM5MC4zOTUsMjU5LjE4OCwzOTAuMzk1LDI1Mi40NjgsMzg2LjIzNSwyNDguMzA4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                    </div>
                </button>
            </div>
            <legend class="text-xs text-white text-center mt-4 font-bold" v-if="appToShow">
                {{ pictureIndexToShow + 1 }} / {{ appToShow.pictures.length }}
            </legend>
            <div class="flex justify-center">
                <span class="text-xs text-white text-center mt-4 font-bold rounded-full bg-black p-3 bg-opacity-70">
                    {{ appToShow.name }}
                </span>
            </div>
        </div>
    </Modal>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'
    import Modal from '../Modal.vue'
    import { App } from '@/types/App.type'

    export default defineComponent({
        name: 'Lightbox',
        components: {
            Modal,
        },
        setup () {
            const appToShow = ref<App | null>(null)
            const pictureIndexToShow = ref<number>(0)
            const lightBox = ref<any | null>(null)

            const open = (app: App) => {
                appToShow.value = app
                pictureIndexToShow.value = 0

                if (lightBox.value) {
                    lightBox.value.open()
                }
            }

            const pictureShown = computed(() => {
                return appToShow.value?.pictures[pictureIndexToShow.value]
            })

            const onNext = () => {
                if (!appToShow.value) {
                    return null
                }

                if (pictureIndexToShow.value + 1 < appToShow.value.pictures.length) {
                    pictureIndexToShow.value++
                }
            }

            const onPrevious = () => {
                if (!appToShow.value) {
                    return null
                }

                if (pictureIndexToShow.value - 1 >= 0) {
                    pictureIndexToShow.value--
                }
            }

            return {
                appToShow,
                lightBox,
                pictureIndexToShow,
                pictureShown,
                open,
                onNext,
                onPrevious,
            }
        }
    })
</script>

<style lang="scss" scoped>
    .glide-track {
        overflow: visible!important;
    }

    .zoomed-picture {
        max-height: 70vh;
    }

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
</style>
