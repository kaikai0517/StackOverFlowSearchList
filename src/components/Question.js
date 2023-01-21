import React from 'react'

function Question({ question }) {
    /* answer highlight 樣式 */
    const answerClass = (count, is_answered) => {
        if (count > 0 && is_answered) {
            return "bg-[#377D23] text-white"
        } else if (count > 0) {
            return 'border-[#377D23] border-[2px] text-[#377D23]'
        }
    }

    /* score highlight 樣式 */
    const scoreClass = (score) => {
        return score < 0 ? 'text-red-500' : ''
    }
    return (
        /* data-aos 動畫*/
        <button data-aos="fade-right" className='border-b-[2px] hover:bg-[#B8D6E3] hover:scale-105 w-full' onClick={() => { window.open(question.link) }}>
            <div className='text-left'>{question.title}</div>
            <div className='flex justify-between ml-10 mr-5'>
                <div>
                    <div className='text-red-700'>Score</div>
                    <div className={scoreClass(question.score)}>{question.score}</div>
                </div>
                <div>
                    <div className='text-red-700'>Answers</div>
                    <div className={answerClass(question.answer_count, question.is_answered)}>{question.answer_count}</div>
                </div>
                <div>
                    <div className='text-red-700'>Viewed</div>
                    <div>{question.view_count}</div>
                </div>
                <div className='flex flex-col items-center w-20'>
                    <div className='h-20 '>
                        <img className='rounded-full' src={question.owner.profile_image} alt='profile img' />
                    </div>
                    <div>{question.owner.display_name}</div>
                </div>
            </div>
        </button>
    )
}

export default Question