<template>
    <div class="bg-gray-800 py-12">
        <div class="text-center font-title text-white">Made by Alexandre Borel</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Wave from '@/components/Wave.vue'

    export default defineComponent({
        name: 'Footer',
        components: {
            Wave
        }
    })
</script>