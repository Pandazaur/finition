<template>
    <div class="relative">
        <div ref="sliderRef" class="slider flex overflow-auto -mx-5 md:-mx-8 pt-2 pb-10">
            <transition name="appear-from-left">
                <div class="arrow arrow-left" v-if="showLeftArrow">
                    <img class="arrow-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS42NDEgNTExLjY0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjY0MSA1MTEuNjQxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE0OC4zMiwyNTUuNzZMMzg2LjA4LDE4YzQuMDUzLTQuMjY3LDMuOTQ3LTEwLjk4Ny0wLjIxMy0xNS4wNGMtNC4xNi0zLjk0Ny0xMC42NjctMy45NDctMTQuODI3LDBMMTI1LjcwNywyNDguMjkzDQoJCQljLTQuMTYsNC4xNi00LjE2LDEwLjg4LDAsMTUuMDRMMzcxLjA0LDUwOC42NjdjNC4yNjcsNC4wNTMsMTAuOTg3LDMuOTQ3LDE1LjA0LTAuMjEzYzMuOTQ3LTQuMTYsMy45NDctMTAuNjY3LDAtMTQuODI3DQoJCQlMMTQ4LjMyLDI1NS43NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                </div>
            </transition>
            <slot></slot>
            <transition name="appear-from-right">
                <div class="arrow arrow-right" v-if="showRightArrow">
                    <img class="arrow-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS45NDkgNTExLjk0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk0OSA1MTEuOTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4Ni4yMzUsMjQ4LjMwOEwxNDAuOTAyLDIuOTc1Yy00LjI2Ny00LjA1My0xMC45ODctMy45NDctMTUuMDQsMC4yMTNjLTMuOTQ3LDQuMTYtMy45NDcsMTAuNjY3LDAsMTQuODI3bDIzNy43NiwyMzcuNzYNCgkJCWwtMjM3Ljc2LDIzNy44NjdjLTQuMjY3LDQuMDUzLTQuMzczLDEwLjg4LTAuMjEzLDE1LjA0YzQuMDUzLDQuMjY3LDEwLjg4LDQuMzczLDE1LjA0LDAuMjEzYzAuMTA3LTAuMTA3LDAuMjEzLTAuMjEzLDAuMjEzLTAuMjEzDQoJCQlsMjQ1LjMzMy0yNDUuMzMzQzM5MC4zOTUsMjU5LjE4OCwzOTAuMzk1LDI1Mi40NjgsMzg2LjIzNSwyNDguMzA4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                </div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

    export default defineComponent({
        name: 'Slider',
        setup (props) {
            const sliderRef = ref<HTMLDivElement | null>(null)
            const scrollPercentage = ref<number>(1)
            const showLeftArrow = ref<boolean>(false)
            const showRightArrow = ref<boolean>(false)

            onMounted(() => {
                if (sliderRef?.value) {
                    sliderRef.value.addEventListener('scroll', handleScroll)
                    window.addEventListener('resize', () => handleScroll())
                    handleScroll()
                }
            })

            onUnmounted(() => {
                if (sliderRef?.value) {
                    sliderRef.value.removeEventListener('scroll', handleScroll)
                    window.removeEventListener('resize', () => handleScroll())
                }
            })

            const handleScroll = (e: any = null) => {
                if (!e && sliderRef?.value) {
                    e = {
                        target: sliderRef?.value
                    }
                }

                const { scrollLeft, scrollWidth, offsetWidth } = e.target

                scrollPercentage.value = scrollLeft
                    ? scrollLeft / (scrollWidth - offsetWidth)
                    : 0

                showLeftArrow.value = scrollPercentage.value > 0

                if (scrollWidth === offsetWidth || scrollPercentage.value === 1) {
                    showRightArrow.value = false
                } else {
                    showRightArrow.value = true
                }

                console.log({ scrollLeft, scrollWidth, offsetWidth, sliderRef: sliderRef.value })
                console.log({ showLeftArrow: showLeftArrow.value, showRightArrow: showRightArrow.value  })
            }

            return {
                sliderRef,
                showLeftArrow,
                showRightArrow,
            }

        }
    })
</script>

<style lang="scss" scoped>
    .slider {
        scroll-snap-type: x proximity;

        &::after {
            content: '';
            @apply pr-5;
        }
    }

    .arrow {
        --size: 80px;

        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, .9);
        backdrop-filter: blur(2px);
        height: var(--size);
        width: var(--size);
        border-radius: var(--size);
        z-index: 1000;
        box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    .arrow-img {
        height: 30px;
    }

    .arrow-left {
        left: 0;
    }

    .arrow-right {
        right: 0;
    }

    /* TRANSITION */
    .appear-from-left-enter-active, .appear-from-left-leave-active {
        transition: opacity .3s, left .3s;
        transition-timing-function: ease-in-out;
    }
    .appear-from-left-enter-from, .appear-from-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0!important;
        left: -5%!important;
    }

    .appear-from-right-enter-active, .appear-from-right-leave-active {
        transition: opacity .3s, right .3s;
        transition-timing-function: ease-in-out;
    }

    .appear-from-right-enter-from, .appear-from-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        right: -5%;
    }
</style>