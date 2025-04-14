import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View } from "react-native";
import { useRouter, usePathname } from 'expo-router';

import { FaPause } from "react-icons/fa6";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";


export default function Player() {

    const router = useRouter();
    const pathname = usePathname();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('@/assets/images/sea.png')} resizeMode="cover" blurRadius={4} style={styles.imageBackground}>

                {/* Player */}
                <View className='player_content' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    {/* Title */}
                    <Text style={{ position: 'absolute', top: '30px', fontSize: '28px', fontWeight: 'bold', color: 'white' }}>Океанские волны</Text>

                    {/* GIF */}
                    <Image source={require('@/assets/images/sound_circle.gif')} style={{ width: 350, height: 350 }} />

                    {/* Control */}
                    <View className='player_control' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px', alignItems: 'center', height: '70px', width: '330px', borderRadius: '50px', backgroundColor: 'rgba(59, 60, 60, 0.5)', marginTop: '100px' }}>

                        {/* Prev */}
                        <TbPlayerTrackPrev style={{ height: '45px', width: '45px', color: 'rgba(59, 60, 60, 0.7)' }} />

                        {/* Pause */}
                        <View className='pause_btn' style={{ justifyContent: 'center', alignItems: 'center', height: '55px', width: '55px', borderRadius: '50%', backgroundColor: 'rgba(59, 60, 60, 0.7)' }}>
                            <FaPause style={{ height: '35px', width: '35px', color: 'white' }} />
                        </View>

                        {/* Next */}
                        <TbPlayerTrackNext style={{ height: '45px', width: '45px', color: 'rgba(59, 60, 60, 0.7)' }} onClick={() => router.push('/audio/player_2')} />

                    </View>

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
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

});
