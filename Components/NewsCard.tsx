import React, {useState, FC} from 'react'
import {Dimensions, Share, StyleSheet, View, Text, Image} from "react-native";
import {User} from "../data";

const Item: FC<User> = (props) => {
    return (
        <View style={styles.item}>
            <Text>{props.articles?.source.name}</Text>
            <View>
                <Text>{props.author}</Text>
                <Text>{props.description}</Text>
            </View>
            <View>
                <Image source={{uri: props.urlToImage}}/>
            </View>
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#5e35b1'
    }
})