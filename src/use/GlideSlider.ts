import { ref } from 'vue'
// @ts-ignore
import Glide, { Controls, Breakpoints, Swipe, Images } from '@glidejs/glide/dist/glide.modular.esm'

export default function useGlideSlider(selector: string, opts: any = {}) {
    const slider = ref<any>(null)

    const options = Object.assign({
        type: 'slider',
        startAt: 0,
        perView: 5,
        gap: "50px",
        bound: true,
        perTouch: 4,
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
                perView: 3
            }
        }
    }, opts)

    slider.value = new Glide(selector, options)
        .mount({
            Controls,
            Breakpoints,
            Swipe,
            Images,
        })

    return {
        slider
    }
}
