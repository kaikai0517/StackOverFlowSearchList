import { useEffect, useState } from 'react';
import axios from '../services/axios'
import requests from '../services/Request'
import { useDispatch, useSelector } from 'react-redux'
import { select } from '../features/tagsSlice'
import { input } from '../features/searchSlice'

/* Custom Fetch Tags Hook */

export default function useFetchTags() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [tags, setTags] = useState([])

    const inname = useSelector(input)

    const dispatch = useDispatch()

    /**
    * @inname 搜尋框輸入值
    */
    useEffect(() => {
        /* loading start */
        setLoading(true);
        /* clean error */
        setError(false);
        async function fetchData() {
            try {
                /* fetch Tags */
                const { data: { items } } = await axios.get(requests.fetchTags, {
                    params: {
                        sort: 'popular',
                        inname
                    }
                })
                /* set popular 10 tags */
                setTags(items.slice(0, 10))
                /* select first tag */
                dispatch(select(items[0].name))
            } catch (error) {
                /* set error */
                setError(true);
            }
        }

        /* fetch Data */
        fetchData()
        /* clean Loading */
        setLoading(false);
    }, [inname])

    return { loading, error, tags };
}
