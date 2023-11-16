import { api } from "./const"

export const getFourthBlock = () => {
    return api.get('fourth-block?populate=*').then((resp) => resp.data)
}
