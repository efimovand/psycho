import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View } from "react-native";
import { useRouter } from 'expo-router';
import AudioCard from '@/components/audio_card';


export default function Audio() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            {/* Audio Content */}
            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={3} style={styles.imageBackground}>

                {/* Audio Group */}
                <View className='audio-group' style={{ ...styles.audio_group, marginTop: 30 }}>

                    {/* Title */}
                    <Text style={styles.group_title}>Звуки</Text>

                    {/* Cards List Upper */}
                    <View className='cards-list' style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>

                        {/* Card 1 */}
                        <AudioCard
                            title="Океанские волны"
                            description="величественное море"
                            image={require('@/assets/images/sounds_icons/wave_3d.png')}
                            navigateTo="/audio/_players/player_sea"
                        />

                        {/* Card 2 */}
                        <AudioCard
                            title="Весенний лес"
                            description="щебет птиц, движение"
                            image={require('@/assets/images/sounds_icons/tree_3d.png')}
                            navigateTo="/audio/_players/player_forest"
                        />

                    </View>

                    {/* Cards List Middle */}
                    <View className='cards-list' style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>

                        {/* Card 3 */}
                        <AudioCard
                            title="Гроза"
                            description="весенняя гроза"
                            image={require('@/assets/images/sounds_icons/thunderstorm_3d.png')}
                            navigateTo="/audio/_players/player_thunderstorm"
                        />

                        {/* Card 4 */}
                        <AudioCard
                            title="Дождь"
                            description="капли дождя за окном"
                            image={require('@/assets/images/sounds_icons/window_3d.png')}
                            navigateTo="/audio/_players/player_rain"
                        />

                    </View>

                    {/* Cards List Lower */}
                    <View className='cards-list' style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>

                        {/* Card 5 */}
                        <AudioCard
                            title="Ночной лес"
                            description="сверчки и спокойствие"
                            image={require('@/assets/images/sounds_icons/night_3d.png')}
                            navigateTo="/audio/_players/player_nightForest"
                        />

                        {/* Card 6 */}
                        <AudioCard
                            title="Ручей"
                            description="журчание быстрого ручья"
                            image={require('@/assets/images/sounds_icons/stream_3d.png')}
                            navigateTo="/audio/_players/player_stream"
                        />

                    </View>

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
        borderWidth: 1,
        borderColor: 'white'
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

});
