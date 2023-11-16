import { api } from "./const"

export const getPrivacy = () => {
    return api.get('privacy?populate=*').then((resp) => resp.data);
}