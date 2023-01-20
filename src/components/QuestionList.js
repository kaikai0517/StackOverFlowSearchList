import React, { useState, useRef, useCallback } from 'react'
import useFetchQuestions from '../hooks/useFetchQuestions'
import './style/Loading.css'
import Loading from './Loading'
import Question from './Question'
import LazyLoading from './LazyLoading'

function QuestionList() {
    const [lastId, setLastId] = useState(null);
    const [page, setPage] = useState(1);
    const { firstFetchLoading, moreFetchloading, error, questions, hasMore } = useFetchQuestions(lastId, page);

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

    const observer = useRef();

    /* 無限滾動流程 */
    const lastPostRef = useCallback(node => {

        if (firstFetchLoading || moreFetchloading) {
            return;
        }
        /* 關閉監聽 */
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                /* lastId hydrate */
                setLastId(node.dataset.id);
                /* page hydrate */
                setPage(page => page + 1)
            }
        })

        /* 監聽 */
        if (node) observer.current.observe(node)
    }, [firstFetchLoading, moreFetchloading, hasMore])

    return (
        <div className='my-5 md:px-5'>
            {firstFetchLoading ?
                /* loading spinner */
                <div className='flex justify-center items-center'>
                    <Loading></Loading>
                </div>
                : questions.map((question, index) => (
                    /* 判斷是否為最後一個question */
                    index + 1 === questions.length ?
                        <div ref={lastPostRef} key={question.question_id} data-id={question.question_id}>
                            <Question question={question}></Question>
                            {/* lazing loading */}
                            {moreFetchloading ? <LazyLoading></LazyLoading> : null}
                        </div>
                        :
                        /* 不是最後的question */
                        <div key={question.question_id}>
                            <Question question={question}></Question>
                        </div>
                ))}
            {/* error handle */}
            {error ? <div>Fetching posts failed...</div> : null}
        </div>
    )
}

export default QuestionList