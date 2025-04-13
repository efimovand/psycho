import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View } from "react-native";
import { useRouter } from 'expo-router';
import NavBar from '../nav_bar';


export default function Audio() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            {/* Audio Content */}
            <ImageBackground source={require('../../assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground}>

                {/* ОТДЕЛЬНЫЕ КОМПОНЕНТЫ! С параметрами title и список cards */}

                {/* Audio Group 1 */}
                <div className='audio-group' style={{ ...styles.audio_group, marginTop: '30px' }}>

                    {/* Title */}
                    <Text style={styles.group_title}>Звуки</Text>

                    {/* Cards List */}
                    <div className='cards-list' style={{ display: 'flex', gap: '20px' }}>

                        {/* Card ОТДЕЛЬНЫЙ КОМПОНЕНТ */}
                        <div className='audio-card' style={styles.card}>

                            {/* Card Pic */}
                            <Image className='audio-card-pic' alt='Audio Card' source={require('../../assets/images/wave.png')} style={styles.card_pic} onClick={() => router.push('/audio/player_1')} />

                            {/* Card Title */}
                            <Text style={styles.card_title}>Океанские волны</Text>

                            {/* Card Description */}
                            <Text style={styles.card_desc}>здесь описание/инфа</Text>

                        </div>

                        {/* Card 2 */}
                        <div className='audio-card' style={styles.card}>

                            {/* Card Pic */}
                            <Image className='audio-card-pic' alt='Audio Card' source={require('../../assets/images/fireplace_3d.png')} style={{ ...styles.card_pic, scale: '90%', marginLeft: '3px' }} onClick={() => router.push('/audio/player_2')} />

                            {/* Card Title */}
                            <Text style={styles.card_title}>Уютный камин</Text>

                            {/* Card Description */}
                            <Text style={styles.card_desc}>здесь описание/инфа</Text>

                        </div>

                    </div>

                </div>

                {/* Audio Group 2 */}
                <div className='audio-group' style={styles.audio_group}>

                    {/* Title */}
                    <Text style={styles.group_title}>Музыка</Text>

                    {/* Cards List 1 */}
                    <div className='cards-list' style={{ display: 'flex', gap: '20px' }}>

                        {/* Card ОТДЕЛЬНЫЙ КОМПОНЕНТ */}
                        <div className='audio-card' style={styles.card} >

                            {/* Card Pic */}
                            <Image className='audio-card-pic' alt='Audio Card' source={require('../../assets/images/tree_3d.png')} style={styles.card_pic} />

                            {/* Card Title */}
                            <Text style={styles.card_title}>Лесные деревья</Text>

                            {/* Card Description */}
                            <Text style={styles.card_desc}>здесь описание/инфа</Text>

                        </div>

                        {/* Card 2 */}
                        <div className='audio-card' style={styles.card}>

                            {/* Card Pic */}
                            <Image className='audio-card-pic' alt='Audio Card' source={require('../../assets/images/window_3d.png')} style={{ ...styles.card_pic, scale: '90%' }} />

                            {/* Card Title */}
                            <Text style={styles.card_title}>Дождь</Text>

                            {/* Card Description */}
                            <Text style={styles.card_desc}>здесь описание/инфа</Text>

                        </div>

                    </div>

                </div>

            </ImageBackground>

            {/* Nav Bar */}
            <NavBar />

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

});
