import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import {User, Source} from "./data";
import axios, {AxiosResponse} from "axios";
import Item from './Components/NewsCard'
import Input from "./Components/Header";

export default function App(props: User) {
    const [news, setNews] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    const [searchquery, setSearchquery] = useState<string>('')
    console.clear()
    console.log('News Data:', news)
    useEffect(() => {
        axios
            .get<User []>('https://newsapi.org/v2/top-headlines?country=us&apiKey=017733313db64302af29a128226c3ed2')
            .then((response: AxiosResponse) => {
                setNews(response.data);
            })
    }, [])
    if (!news) {
        return null;
    }


    return (
        <View style={styles.container}>
            <Input icon='md-search' placeholder='Search' onChangeText={(text) => console.log(text)}/>
            {/*<FlatList*/}
            {/*    style={{marginVertical: 10}}*/}
            {/*    data={news}*/}
            {/*    renderItem={({item}) => (*/}
            {/*        <Item author={item.author} title={item.title} description={item.description}*/}
            {/*              urlToImage={item.urlToImage}*/}
            {/*              articles={item.articles} content={item.content} url={item.url}/>*/}
            {/*    )}*/}
            {/*/>*/}
            <View style={{marginVertical:30}}>
                <Text>Some News</Text>
                <Text style={{color: '#000'}}>{props.content}</Text>
                {console.log('articles',props.articles)}
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '15%'
    },
});
