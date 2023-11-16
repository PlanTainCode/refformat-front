import { api } from "./const"

export const getSeven = () => {
    return api.get('seven-block?populate=*').then((resp) => resp.data);
}
