import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

import { IoClose } from "react-icons/io5";


export default function SOS_3_2() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} >

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    <View className='navigation' style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '15px', alignItems: 'center' }}>
                        <IoClose style={{ height: '30px', width: '30px', color: 'rgb(255, 255, 255, 0.4)' }} onClick={() => router.push('/home')} />
                        <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#BDBDB9' }}>3/5</Text>
                    </View>

                    {/* Text */}
                    <View className='content' style={{ width: '355px' }}>

                        <Text style={styles.title}>
                            Твой якорь в настоящем моменте
                        </Text>

                        <Text style={styles.subtitle}>
                            Теперь, когда ты внимательно изучил этот предмет, отвлекись от него на секунду.
                            {'\n\n'}
                            Оглянись вокруг:
                            {'\n    '}
                            •  Где ты находишься прямо сейчас?
                            {'\n    '}
                            •  Что ты видишь вокруг себя?
                            {'\n\n'}
                            Почувствуй свои ноги на полу или свое тело на стуле.
                            {'\n'}
                            Ты здесь. Ты в безопасности.
                        </Text>

                    </View>

                    {/* Next Btn */}
                    <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/home/_sos_screens/sos_4_1')}>
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
        gap: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    subtitle: {
        color: '#fff',
        fontSize: 20,
        zIndex: 1,
        height: 406
    },

    title: {
        color: '#fff',
        fontSize: 24,
        zIndex: 1,
        marginBottom: 40,
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

    itemsTemplate: {
        height: 40,
        width: 40,
        color: 'white'
    },

});
