//Libraries and dependencies
import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import {QueryClient,QueryClientProvider} from "react-query";
//components import
import {User, Source} from "./Query/data";
import Input from "./Components/Header";
import NewsAPI from "./Components/News";

const baseURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=017733313db64302af29a128226c3ed2'
const queryClient = new QueryClient();


export default function App(props: User) {

    return (
        <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
            <Input icon='md-search' placeholder='Search' onChangeText={(text) => console.log(text)}/>
            <NewsAPI articles={props.articles} author={props.author} title={props.title} description={props.description}
                     content={props.content} source={props.source} urlToImage={props.urlToImage} url={props.url}/>

            <StatusBar style="auto"/>
        </View>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '15%',
        padding: 5
    },
    wrapper: {
        color: '#000'
    }
});
