import React, {useState, FC} from 'react'
import {Dimensions, Share, StyleSheet, View, Text, Image, Alert} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {User} from "../Query/data";
import { Icon } from 'react-native-elements'

const {width, height} = Dimensions.get('window')

const Item: FC<User> = (props) => {
    return (
        <View style={styles.cardView}>
            <Card style={styles.container}>
                <Card.Content>
                    <Paragraph style={styles.titleStyle}>{props.title}</Paragraph>
                    <Paragraph style={styles.author}>{props.author}</Paragraph>
                    <Paragraph>{props.description}</Paragraph>
                    <Card.Cover style={styles.img} source={{uri: props.urlToImage}}/>
                </Card.Content>
                <View style={styles.btn}>
                    <Button  onPress={()=> Alert.alert('okay')}>Ok</Button>
                    <Button  onPress={()=> Alert.alert('okay')}>

                    </Button>
                </View>

            </Card>

        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: '#fff',
        margin: width * 0.03,
        borderRadius: width * 0.01,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3

    },

    titleStyle: {
        marginHorizontal: width * 0.01,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold'
    },
    container: {
        height: 480
    },
    img: {
        padding: 0,
        width: '100%',
        marginTop: 15
    },
    author: {
        marginTop: 0.01,
        marginBottom: 0.01,
        bottom: 5,
        marginHorizontal: width * 0.02,
        fontSize: 11,
        color: 'gray'
    },
    btn:{
        flexDirection:'row-reverse'
    }
})