import React from 'react';
import { Text, Image, Pressable, StyleSheet, View, GestureResponderEvent } from 'react-native';
import { useRouter } from 'expo-router';
import { IoClose } from "react-icons/io5";


const UpperSOSNavigation: React.FC<{ number: string }> = ({ number }) => {

    const router = useRouter();

    return (
        <View className='navigation' style={styles.navigationContainer}>
            <IoClose style={styles.crossIcon} onClick={() => router.push('/home')} />
            <Text style={styles.numText}>{number}/5</Text>
        </View>
    );

};


const styles = StyleSheet.create({

    navigationContainer: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        alignItems: 'center'
    },

    crossIcon: {
        height: 30,
        width: 30,
        color: 'rgb(255, 255, 255, 0.4)'
    },

    numText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#BDBDB9'
    }

});


export default UpperSOSNavigation;
