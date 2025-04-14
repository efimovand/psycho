import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

import { IoClose } from "react-icons/io5";
import { GiNoseFront } from "react-icons/gi";
import { GiTongue } from "react-icons/gi";


export default function SOS_4_2() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} >

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    <View className='navigation' style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '15px', alignItems: 'center' }}>
                        <IoClose style={{ height: '30px', width: '30px', color: 'rgb(255, 255, 255, 0.4)' }} onClick={() => router.push('/home')} />
                        <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#BDBDB9' }}>4/5</Text>
                    </View>

                    {/* Text */}
                    <View className='content' style={{ width: '345px' }}>

                        <Text style={styles.title}>
                            5 органов чувств
                        </Text>

                        <View className='nose' style={{ marginBottom: '70px' }}>

                            <View style={{ display: 'flex', flexDirection: 'row', gap: '18px', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                <GiNoseFront style={styles.itemsTemplate} />
                                <Text style={{ color: '#fff', fontSize: 24, zIndex: 1, fontWeight: 'bold' }}>Обоняние</Text>
                            </View>

                            <Text style={styles.subtitle}>
                                Отметьте 2 запаха, которые вы можете почувствовать прямо сейчас.
                            </Text>

                        </View>

                        <View className='tongue' >

                            <View style={{ display: 'flex', flexDirection: 'row', gap: '18px', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                <GiTongue style={{ ...styles.itemsTemplate, marginTop: '6px' }} />
                                <Text style={{ color: '#fff', fontSize: 24, zIndex: 1, fontWeight: 'bold' }}>Вкус</Text>
                            </View>

                            <Text style={styles.subtitle}>
                                Сосредоточьтесь на ощущениях у вас на языке.
                                {'\n'}
                                Какой вкус вы ощущаете сейчас?
                            </Text>

                        </View>

                    </View>

                    {/* Next Btn */}
                    <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/home/_sos_screens/sos_final')}>
                        <Text style={{ fontSize: '18px', color: 'white' }}>Продолжить</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </SafeAreaView >

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
        gap: 140,
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
        fontSize: 20,
        zIndex: 1,
    },

    title: {
        color: '#fff',
        fontSize: 24,
        zIndex: 1,
        marginBottom: 100,
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
        height: 35,
        width: 35,
        color: 'white'
    },

});
