import { api } from "./const"

export const getDiploms = () => {
    return api.get('diploms?populate=*').then((resp) => resp.data)
}