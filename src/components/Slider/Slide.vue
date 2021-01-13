<template>
    <div class="slider__item inline-block mx-5 md:mx-8 flex-grow-0 flex-shrink-0">
        <slot></slot>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: "Slide"
    })
</script>

<style scoped>
</style>