import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import ArticleService from '../services/article'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleForm from './article-form'

const EditArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetail(slug)
                setTitle(response.article.title)
                setBody(response.article.body)
                setDescription(response.article.description)
                dispatch(getArticleDetailSuccess(response.article))
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        }

        getArticleDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const formSubmit = async (e) => {
        e.preventDefault()
        const article = { title, description, body }
        dispatch(postArticleStart())
        try {
            await ArticleService.editArticle(slug, article)
            dispatch(postArticleSuccess())
            navigate('/')
        }
        catch (error) {
            dispatch(postArticleFailure())
        }
    }

    const formPorps = { title, setTitle, description, setDescription, body, setBody, formSubmit }


    return (
        <div className='text-center'>
            <h1 className="fs-2">
                Edit Article
            </h1>
            <div className="w-75 mx-auto">
                <ArticleForm {...formPorps} />
            </div>
        </div>
    )
}

export default EditArticle