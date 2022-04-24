import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import {User, Source} from "../Query/data";
import axios from "axios";
import Item from '../Components/NewsCard'

const baseURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=017733313db64302af29a128226c3ed2'

export default function NewsAPI(props: User) {
    const [news, setNews] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    const [searchquery, setSearchquery] = useState<string>('')
    console.clear()
    useEffect(() => {
        axios
            .get(baseURL)
            .then(function (response) {
                setNews(response.data.articles);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    if (!news) {
        return null;
    }


    return (
        <View style={styles.container}>
    <FlatList
    style={{marginVertical: 20}}
    data={news}
    renderItem={({item}) => (
        <Item author={item.author} title={item.title} description={item.description}
    urlToImage={item.urlToImage}
    articles={item.articles} content={item.content} url={item.url} source={item.source}/>
)}
    keyExtractor={(item, index) => index.toString()}
    />
    <StatusBar style="auto"/>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // marginTop: '15%',
        // padding:5

    },
    wrapper:{
        color:'#000'
    }
});
