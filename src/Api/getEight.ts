import { api } from "./const"

export const getEight = () => {
    return api.get('eight-block?populate=*').then((resp) => resp.data);
}
