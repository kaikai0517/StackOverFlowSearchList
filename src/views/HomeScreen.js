import React from 'react'
import Search from '../components/Search'
import Tags from '../components/Tags'
import QuestionList from '../components/QuestionList'

function HomeScreen() {
  return (
    <div>
      <div className='z-10 sticky top-0 backdrop-blur-xl md:px-5 pb-5'>
        {/* 搜尋input */}
        <Search></Search>
        {/* 標籤 */}
        <Tags></Tags>
      </div>
      {/* 問題列表 */}
      <QuestionList></QuestionList>
    </div>
  )
}

export default HomeScreen