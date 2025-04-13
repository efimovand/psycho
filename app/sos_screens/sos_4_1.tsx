import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

import { IoClose } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { MdHearing } from "react-icons/md";
import { FaHand } from "react-icons/fa6";


export default function SOS_start() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('../../assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} >

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    <View className='navigation' style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '15px', alignItems: 'center' }}>
                        <IoClose style={{ height: '30px', width: '30px', color: 'rgb(255, 255, 255, 0.4)' }} onClick={() => router.push('/')} />
                        <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#BDBDB9' }}>4/5</Text>
                    </View>

                    {/* Text */}
                    <View className='content' style={{ width: '355px' }}>

                        <Text style={styles.title}>
                            5 органов чувств
                        </Text>

                        <View className='eye' style={{ marginBottom: '40px' }}>

                            <View style={{ display: 'flex', flexDirection: 'row', gap: '18px', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                <FaRegEye style={styles.itemsTemplate} />
                                <Text style={{ color: '#fff', fontSize: 24, zIndex: 1, fontWeight: 'bold' }}>Зрение</Text>
                            </View>

                            <Text style={styles.subtitle}>
                                Найдите взглядом 5 вещей, которые вы видите прямо сейчас.
                                {'\n'}
                                Просто отметьте их мысленно.
                            </Text>

                        </View>

                        <View className='ear' style={{ marginBottom: '40px' }}>

                            <View style={{ display: 'flex', flexDirection: 'row', gap: '18px', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                <MdHearing style={styles.itemsTemplate} />
                                <Text style={{ color: '#fff', fontSize: 24, zIndex: 1, fontWeight: 'bold' }}>Слух</Text>
                            </View>

                            <Text style={styles.subtitle}>
                                Закройте глаза (если удобно).
                                {'\n'}
                                Отметьте 4 звука, которые вы слышите сейчас.
                            </Text>

                        </View>

                        <View className='touch'>

                            <View style={{ display: 'flex', flexDirection: 'row', gap: '18px', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                <FaHand style={{ ...styles.itemsTemplate, scale: '80%' }} />
                                <Text style={{ color: '#fff', fontSize: 24, zIndex: 1, fontWeight: 'bold' }}>Осязание</Text>
                            </View>

                            <Text style={styles.subtitle}>
                                Перечислите 3 вещи, к которым вы можете прикоснуться, и сделайте это.
                                {'\n'}
                                Сосредоточьтесь на ощущениях.
                                {'\n'}
                                Примеры: дерево, металл, что-то тяжелое и т.п.
                            </Text>

                        </View>

                    </View>

                    {/* Next Btn */}
                    <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/sos_screens/sos_4_2')}>
                        <Text style={{ fontSize: '18px', color: 'white' }}>Далее</Text>
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
        gap: 60,
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
        height: 35,
        width: 35,
        color: 'white'
    },

});
