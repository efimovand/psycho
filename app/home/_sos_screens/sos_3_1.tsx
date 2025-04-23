import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

import { IoClose } from "react-icons/io5";
import { FiWatch } from "react-icons/fi";
import { GiDiamondRing } from "react-icons/gi";
import { GiHouseKeys } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";


export default function SOS_3_1() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} >

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    {/* Close + № */}
                    <View className='navigation' style={{ position: 'absolute', top: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 15, alignItems: 'center' }}>
                        <IoClose style={{ height: 30, width: 30, color: 'rgb(255, 255, 255, 0.4)' }} onClick={() => router.push('/home')} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#BDBDB9' }}>3/5</Text>
                    </View>

                    {/* Text */}
                    <View className='content' style={{ width: 355 }}>

                        <Text style={styles.title}>
                            Твой якорь в настоящем моменте
                        </Text>

                        <Text style={styles.subtitle}>
                            Выбери один предмет, который находится рядом с тобой.
                        </Text>

                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 25, marginBottom: 25, gap: 20, alignItems: 'center' }}>
                            <Text style={styles.subtitle}> Например: </Text>
                            <FiWatch style={styles.itemsTemplate} />
                            <GiDiamondRing style={styles.itemsTemplate} />
                            <GiHouseKeys style={styles.itemsTemplate} />
                            <MdPhoneIphone style={styles.itemsTemplate} />
                        </View>

                        <Text style={styles.subtitle}>
                            Медленно и внимательно опиши этот предмет в своей голове:
                            {'\n\n'}
                            Опиши его
                            {'\n    '}
                            •  Цвет
                            {'\n    '}
                            •  Размер
                            {'\n    '}
                            •  Форму
                            {'\n    '}
                            •  Текстуру
                            {'\n    '}
                            •  Вес
                            {'\n    '}
                            •  Движение
                        </Text>

                    </View>

                    {/* Next Btn */}
                    <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/home/_sos_screens/sos_3_2')}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Далее</Text>
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
        height: 40,
        width: 40,
        color: 'white'
    },

});
