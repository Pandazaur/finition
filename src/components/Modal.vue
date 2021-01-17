<template>
    <teleport to="body">
        <transition name="fadeIn">
            <div class="modal-bg" v-if="isVisible" @click="() => isVisible = false">
                <div class="modal" @click.stop="() => null" v-if="isVisible">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'

    export default defineComponent({
        name: 'Modal',
        setup (props) {
            const isVisible = ref<boolean>(false)

            const open = () => {
                isVisible.value = true
            }

            const close = () => {
                isVisible.value = false
            }

            return {
                open,
                close,
                isVisible
            }
        }
    })
</script>

<style lang="scss" scoped>
    .modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .1);
        backdrop-filter: blur(5px);
        z-index: 9999;

        display: flex;
        align-items: safe center;
        justify-content: safe center;
    }

    .modal {
        animation: slideUp;
        animation-delay: 100ms;
        animation-duration: 350ms;
        animation-timing-function: ease-in-out;
        animation-fill-mode: both;
    }

    @keyframes slideUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .fadeIn-enter-active, .fadeIn-leave-active {
        transition: opacity 200ms;
        transition-timing-function: ease-in-out;
    }

    .fadeIn-enter-from, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
