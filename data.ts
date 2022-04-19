export interface User {
    articles: Articles,
    author: string,
    title: string,
    description: string,
    url?: string,
    urlToImage?: string,
    content: string
}

export interface Articles {
    source: Source,
}

export interface Source {
    id?: any,
    name: string
}

