import { api } from "./const"

export const getNine = () => {
    return api.get('contact?populate=*').then((resp) => resp.data);
}
