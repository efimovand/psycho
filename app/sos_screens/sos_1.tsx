import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

import { IoClose } from "react-icons/io5";


export default function SOS_start() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('../../assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} >

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    <View className='navigation' style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '15px', alignItems: 'center' }}>
                        <IoClose style={{ height: '30px', width: '30px', color: 'rgb(255, 255, 255, 0.4)' }} onClick={() => router.push('/')} />
                        <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#BDBDB9' }}>1/5</Text>
                    </View>

                    <View className='text' style={{ width: '355px' }}>

                        <Text style={styles.title}>
                            Проговаривание
                        </Text>

                        <Text style={styles.subtitle}>
                            Скажи это вслух или про себя:
                        </Text>

                        <Text style={styles.text}>
                            •  То, что сейчас происходит со мной, это приступ паники.
                            {'\n\n'}
                            •  Я не умру от этого, не попаду в больницу.Я знаю, что это может ощущаться как катастрофа, но на самом деле это просто сильная тревога.
                            {'\n\n'}
                            •  Я в безопасности, и это пройдет, это временно.
                        </Text>

                    </View>

                    <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/sos_screens/sos_2')}>
                        <Text style={{ fontSize: '18px', color: 'white' }}>Продолжить</Text>
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
        gap: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 18,
        zIndex: 1,
    },

    subtitle: {
        color: '#fff',
        fontSize: 22,
        zIndex: 1,
        marginBottom: 30
    },

    title: {
        color: '#fff',
        fontSize: 24,
        zIndex: 1,
        marginBottom: 70,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    nextBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: 'rgba(59, 60, 60, 0.6)',
        borderRadius: 25,
        boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.4)'
    },

});
