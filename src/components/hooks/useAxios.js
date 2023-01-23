import useSWR from 'swr'

import api from "../../services/api"

export function useAxios(url){
    const {data, error, mutate} = useSWR(url, async (url) => {
        const res = await api.get(url)

        return res.data;
    })

    return {data, error, mutate}
}