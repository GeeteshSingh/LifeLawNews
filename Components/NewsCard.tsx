import React, {useState, FC} from 'react'
import {Dimensions, Share, StyleSheet, View, Text, Image} from "react-native";
import {User} from "../data";

const Item: FC<User> = (props: any) => {
    return(
        <View>
            <Text>{props.articles.source.name}</Text>
            <View>
                <Text>{props.author}</Text>
                <Text>{props.description}</Text>
            </View>
            <View>
                <Image source={{uri: props.URLtoImage}} />
            </View>
        </View>
    )
}

export default Item;