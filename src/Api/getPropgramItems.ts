import { api } from "./const"

export const getProgramItem = () => {
    return api.get('program-items?populate=*').then((resp) => resp.data)
}