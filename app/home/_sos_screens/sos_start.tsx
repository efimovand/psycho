import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { IoClose } from "react-icons/io5";


export default function SOS_start() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} >

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    <View className='navigation' style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '15px' }}>
                        <IoClose style={{ height: '30px', width: '30px', color: 'rgb(255, 255, 255, 0.4)' }} onClick={() => router.push('/home')} />
                        <Text style={{ fontSize: '20px', fontWeight: 'bold', color: 'transparent' }}>0/5</Text>
                    </View>

                    <Text style={styles.text}>
                        Похоже, у тебя приступ паники...
                        {'\n'}
                        Ты не один, сейчас мы выполним несколько упражнений.
                    </Text>

                    <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/home/_sos_screens/sos_1')}>
                        <Text style={{ fontSize: '18px', color: 'white' }}>Старт</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </SafeAreaView>

    );

}


// Styles
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageBackground: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 385,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 22,
        zIndex: 1,
        textAlign: 'center'
    },

    nextBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: 'rgba(59, 60, 60, 0.6)',
        borderRadius: 25,
        boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.4)'
    }

});
