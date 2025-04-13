import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View } from "react-native";
import { useRouter, usePathname } from 'expo-router';

import { FaPause } from "react-icons/fa6";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";

import NavBar from '../nav_bar';


export default function Player() {

    const router = useRouter();
    const pathname = usePathname();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('../../assets/images/fireplace.png')} resizeMode="cover" blurRadius={4} style={styles.imageBackground}>

                {/* Player */}
                <View className='player_content' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    {/* Title */}
                    <Text style={{ position: 'absolute', top: '30px', fontSize: '28px', fontWeight: 'bold', color: 'white' }}>Уютный камин</Text>

                    {/* GIF */}
                    <Image source={require('../../assets/images/sound_circle.gif')} style={{ width: 350, height: 350 }} />

                    {/* Control */}
                    <View className='player_control' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px', alignItems: 'center', height: '70px', width: '330px', borderRadius: '50px', backgroundColor: 'rgba(59, 60, 60, 0.5)', marginTop: '100px' }}>

                        {/* Prev */}
                        <TbPlayerTrackPrev style={{ height: '45px', width: '45px', color: 'rgba(255, 255, 255, 0.4)' }} onClick={() => router.push('/audio/player_1')} />

                        {/* Pause */}
                        <View className='pause_btn' style={{ justifyContent: 'center', alignItems: 'center', height: '55px', width: '55px', borderRadius: '50%', backgroundColor: 'rgba(59, 60, 60, 0.7)' }}>
                            <FaPause style={{ height: '35px', width: '35px', color: 'white' }} />
                        </View>

                        {/* Next */}
                        <TbPlayerTrackNext style={{ height: '45px', width: '45px', color: 'rgba(255, 255, 255, 0.4)' }} />

                    </View>

                </View>

                {/* Nav Bar */}
                <NavBar />

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
        gap: 25,
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    group_title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#013B3C',
    },

    audio_group: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 165,
        width: 165,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
        border: '1px solid white'
    },

    card_title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#013B3C',
        marginLeft: 8
    },

    card_desc: {
        fontSize: 12,
        color: '#013B3C',
        marginLeft: 8
    },

    card_pic: {
        height: 110,
        width: 110,
    },

    navBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#114656',
        height: 70,
        width: '100%',
        borderTopWidth: 2,
        borderTopColor: 'rgba(255, 255, 255, 0.6)',
        position: 'absolute',
        bottom: 0,
    },

    navBarSeparator: {
        height: 40,
        width: 1,
        backgroundColor: '#FFFFFF',
        margin: 5,
    },

    tabIcon: {
        width: 52,
        height: 52,
        color: 'white',
    },

});
