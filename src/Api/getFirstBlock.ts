import { api } from "./const"

export const getFirstBlock = () => {
    return api.get('first-block?populate=*').then((resp) => resp.data)
}