import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'

const Fallback = () => {
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Image source={require('../../assets/To-do-list-icon.jpg')}
                style={{ height: 200, width: 300 }} />
                <Text style={{fontSize: 22}}>Aloita tehtävien lisääminen</Text>
        </View>
    )
}

export default Fallback

const styles = StyleSheet.create({})