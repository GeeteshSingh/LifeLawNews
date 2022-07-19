import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from "react-native";
import {Ionicons} from "@expo/vector-icons"

const {width} = Dimensions.get('screen')

interface Props {
    icon: string,
    placeholder: string,
    onChangeText: (text: string) => void
}

const Input: FC<Props> = (props: Props) => {

    return (
        <View style={styles.container}>
            <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Ionicons style={{padding: 5}}
                          name={props.icon}
                          size={22}
                          color='#555'/>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <TextInput style={styles.input} placeholderTextColor='#555' placeholder={props.placeholder}
                           onChangeText={props.onChangeText}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        flexDirection: 'row',
        borderColor: '#000',
        backgroundColor: '#C0C0C0',
        borderRadius: 20,
        borderWidth: 2
    },
    input: {
        padding: 5,

    }
})

export default Input