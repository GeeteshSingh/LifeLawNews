import NewsAPI from '../Components/News'
import {User} from './data'
import {useQuery} from "react-query";

const baseURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=017733313db64302af29a128226c3ed2'


interface INews {
    data?: User,
    isError?: boolean,
    isFetching?: boolean,
    isLoading?: boolean,
    error?: string
}

export function useNews(
    collectionId:string,

)