import { api } from "./const"

export const getSliderImages = () => {
    return api.get('slider-images?populate=*').then((resp) => resp.data)
}