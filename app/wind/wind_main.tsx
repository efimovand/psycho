import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View } from "react-native";
import { useRouter } from 'expo-router';
import { IoFilter } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";


export default function Wind() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            {/* Wind Content */}
            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground}>

                {/* Title + Sort */}
                <View style={{ display: 'flex', flexDirection: 'row', gap: '25px', justifyContent: 'center', alignItems: 'center', marginTop: '35px' }}>
                    <Text style={{ fontSize: '26px', fontWeight: 'bold', color: '#013B3C' }}>Дыхательные практики</Text>
                    <IoFilter style={{ color: '#013B3C', height: '40px', width: '40px' }} />
                </View>

                {/* Group 1 */}
                <div className='audio-group' style={styles.audio_group}>

                    {/* Title */}
                    <Text style={styles.group_title}>Легкие</Text>

                    {/* Cards List */}
                    <div className='cards-list' style={{ display: 'flex', gap: '20px' }}>

                        {/* Card ОТДЕЛЬНЫЙ КОМПОНЕНТ */}
                        <div className='audio-card' style={styles.card} onClick={() => router.push('/wind/wind_process')}>

                            {/* Card Pic + Time */}
                            <View style={{ display: 'flex', flexDirection: 'row' }}>

                                <Image className='audio-card-pic' alt='Audio Card' source={require('@/assets/images/lion.png')} style={styles.card_pic} />

                                <View style={{ display: 'flex', flexDirection: 'row', gap: '2px', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: '25px', right: '5px' }}>
                                    <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#013B3C' }}>30</Text>
                                    <MdOutlineTimer style={{ height: '30px', width: '30px', color: '#013B3C' }} />
                                </View>

                            </View>

                            {/* Card Title */}
                            <Text style={styles.card_title}>Дыхание льва</Text>

                            {/* Card Description */}
                            <Text style={styles.card_desc}>здесь описание/инфа</Text>

                        </div>

                        {/* Card 2 */}
                        <div className='audio-card' style={styles.card}>

                            {/* Card Pic + Time */}
                            <View style={{ display: 'flex', flexDirection: 'row' }}>

                                <Image className='audio-card-pic' alt='Audio Card' source={require('@/assets/images/wave.png')} style={styles.card_pic} />

                                <View style={{ display: 'flex', flexDirection: 'row', gap: '2px', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: '25px', right: '5px' }}>
                                    <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#013B3C' }}>45</Text>
                                    <MdOutlineTimer style={{ height: '30px', width: '30px', color: '#013B3C' }} />
                                </View>

                            </View>

                            {/* Card Title */}
                            <Text style={styles.card_title}>Волны</Text>

                            {/* Card Description */}
                            <Text style={styles.card_desc}>здесь описание/инфа</Text>

                        </div>

                    </div>

                </div>

                {/* Group 2 */}
                <div className='audio-group' style={styles.audio_group}>

                    {/* Title */}
                    <Text style={styles.group_title}>Средние</Text>

                    {/* Cards List */}
                    <div className='cards-list' style={{ display: 'flex', gap: '20px' }}>

                        {/* Card 1 */}
                        <div className='audio-card' style={styles.card}></div>

                        {/* Card 2 */}
                        <div className='audio-card' style={styles.card}></div>

                    </div>

                </div>

                {/* Group 3 */}
                <div className='audio-group' style={styles.audio_group}>

                    {/* Title */}
                    <Text style={styles.group_title}>Сложные</Text>

                    {/* Cards List */}
                    <div className='cards-list' style={{ display: 'flex', gap: '20px' }}>

                        {/* Card 1 */}
                        <div className='audio-card' style={styles.card}></div>

                        {/* Card 2 */}
                        <div className='audio-card' style={styles.card}></div>

                    </div>

                </div>

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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#013B3C',
        marginLeft: 8
    },

    card_desc: {
        fontSize: 14,
        color: '#013B3C',
        marginLeft: 8
    },

    card_pic: {
        height: 110,
        width: 110,
    },

});
