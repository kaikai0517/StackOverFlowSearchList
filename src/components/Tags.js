import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { select, selectTag } from '../features/tagsSlice'
import useFetchTags from '../hooks/useFetchTags'
import Loading from './Loading'

function Tags() {

    const { loading, error, tags } = useFetchTags();

    const dispatch = useDispatch()

    /* 選擇的tag */
    const tag = useSelector(selectTag)

    /* 選擇tag的樣式 */
    const tagClass = (name) => {
        const defaultClass = 'py-2 px-1 rounded-[7px] hover:bg-[#B8D6E3]'
        return `${defaultClass} ${tag === name ? "bg-[#B8D6E3]" : 'border-[#B8D6E3] border-[2px]'}`
    }

    return (
        <div>
            <div className='text-3xl'>Trending</div>
            {loading ?
                /* loading spinner */
                <Loading size={'scale-50'}></Loading>
                :
                /* Tags */
                <div className='flex gap-2 mt-2'>
                    {tags.map(tag => (
                        <button key={tag.name} className={tagClass(tag.name)} onClick={() => { dispatch(select(tag.name)) }}>{tag.name}</button>
                    ))}
                    {/* error handle */}
                    {error ? <div>Fetching Tags failed...</div> : null}
                </div>}
        </div>
    )
}

export default Tags