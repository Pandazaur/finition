<template>
    <div class="bg-gray-800 py-6 px-10 relative">
        <div class="absolute"></div>
        
        <div class="text-left font-title text-white">
            <div class="font-brand text-lg opacity-50">FINITION</div>
            <div class="text-xs">by Alexandre Borel</div>
        </div>
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