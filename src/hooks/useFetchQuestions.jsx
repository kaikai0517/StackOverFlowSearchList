import { useEffect, useState } from 'react';
import axios from '../services/axios'
import requests from '../services/Request'
import { QUESTION_POST_LIMIT } from '../constant/api';
import { useSelector } from 'react-redux'
import { selectTag } from '../features/tagsSlice'

export default function useFetchQuestions(lastId, page) {
	const [firstFetchLoading, setFirstFetchLoading] = useState(false);
	const [moreFetchloading, setMoreFetchLoading] = useState(false);
	const [error, setError] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [currentTag, setCurrentTag] = useState('');

	const tag = useSelector(selectTag)


	/**
	*  @lastId 最後一個question id
	*  @page   請求當前頁數
	*  @QUESTION_POST_LIMIT  請求question數量
	*/
	useEffect(() => {
		/* clean error */
		setError(false);

		async function fetchData() {
			if (!tag) {
				setFirstFetchLoading(false);
				setMoreFetchLoading(false);
				return
			}
			/* 若切換tag,清除所有question和設定當前tag */
			if (currentTag !== tag) {
				setQuestions([])
				setCurrentTag(tag)
			}

			const { data: { items, has_more } } = await axios.get(requests.fetchQuestions, {
				params: {
					tagged: tag,
					pagesize: QUESTION_POST_LIMIT,
					page
				}
			})
			/* handle無限滾動資料遞增 */
			setQuestions(prevPosts => {
				return prevPosts ? [...prevPosts, ...items] : items
			});
			/* set hasMore */
			setHasMore(has_more);
			/* clean FirstFetchLoading */
			setFirstFetchLoading(false);
			/* clean MoreFetchLoading */
			setMoreFetchLoading(false)
		}

		/* 不是頁面第一筆資料 (handle無限滾動) */
		if (lastId && currentTag === tag) {
			try {
				/* start MoreFetchLoading */
				setMoreFetchLoading(true)
				/* setTimeout主要是讓lazy loading體驗好一點 */
				setTimeout(() => {
					fetchData()
				}, 700)
			} catch (error) {
				/*clean error */
				setError(true);
			}
		} else {
			// 第一筆資料
			try {
				/* start FirstFetchLoading */
				setFirstFetchLoading(true);
				fetchData();
			} catch (error) {
				setError(true);
			}
		}
	}, [lastId, page, tag])

	return { firstFetchLoading, moreFetchloading, error, questions, hasMore };
}
