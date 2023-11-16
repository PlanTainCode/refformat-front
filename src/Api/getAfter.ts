import { api } from "./const"

export const getAfter = () => {
    return api.get('afters?populate=*').then((resp) => resp.data);
}