import React, { useCallback, useState } from 'react'
import { search } from '../features/searchSlice'
import { useDispatch } from 'react-redux'

function Search() {
  const [inputDebounce, setInputDebounce] = useState('');

  const dispatch = useDispatch()

  /* 更新search input 值 */
  const fetchData = (value) => {
    dispatch(search(value))
  }

  /* debounce函式 */
  const debounce = (fn, delay = 300) => {
    let timer
    return (...args) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
        fn(...args)
      }, delay)
    }
  }

  /* 設定debounce優化請求流程 */
  const debounceHandler = useCallback(debounce(fetchData, 3000), [])

  const onInputDebounceChange = (e) => {
    setInputDebounce(e.target.value)
    debounceHandler(e.target.value)
  }

  return (
    <div className='flex my-5'>
      <input value={inputDebounce} placeholder='Tag' className='py-2 border-[2px] border-[#B8D6E3] rounded-l-[5px] w-full' onChange={onInputDebounceChange}></input>
      <button className='px-4 bg-[#B8D6E3] rounded-r-[5px]'>search</button>
    </div>
  )
}

export default Search