import React, {useState, FC} from 'react'
import {Dimensions, Share, StyleSheet, View, Text, Image, Alert, Linking} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {User} from "../Query/data";
import {Icon} from 'react-native-elements'

const {width, height} = Dimensions.get('window')

const Item: FC<User> = (props) => {
    const [bookmark, setBookmark] = useState(false)
    return (
        <View style={styles.cardView}>
            <Card style={styles.container}>
                <Card.Content>
                    <Paragraph style={styles.titleStyle}>{props.title}</Paragraph>
                    <Paragraph style={styles.author}>{props.author}</Paragraph>
                    <Paragraph onPress={() => Linking.openURL(`{props.url}`)}>{props.description}</Paragraph>
                    <Card.Cover style={styles.img} source={{uri: props.urlToImage}}
                    />
                </Card.Content>
                <View style={styles.btn}>
                    <Icon
                        name='bookmark-o'
                        type='font-awesome'
                        onPress={() => console.log('Bookmarked')}/>
                    <Icon
                        name='share'
                        type='ionicon'
                        onPress={() => Alert.alert('share')}
                    />
                    <View style={{alignItems:'flex-end'}}>
                        <Icon
                            raised
                            name='external-link'
                            type='font-awesome'
                            onPress={() => Linking.openURL(`${props.url}`)}/>
                    </View>


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
        marginVertical: width * 0.001,
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold'
    },
    container: {
        height: 520
    },
    img: {
        padding: 0,
        width: '100%',
        marginTop: 13
    },
    author: {
        marginTop: 0.01,
        marginBottom: 0.01,
        bottom: 5,
        top: 2,
        marginHorizontal: width * 0.02,
        fontSize: 11,
        color: 'gray'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end'
        // right: 30

    }
})