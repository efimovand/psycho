import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View } from "react-native";
import { IoFilter } from "react-icons/io5";
import PracticeCard from '@/components/practice_card';


export default function Practice() {


    return (

        <SafeAreaView style={styles.container}>

            {/* Content */}
            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={3} style={styles.imageBackground}>

                {/* Title + Sort */}
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, alignItems: 'center', marginTop: 35 }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#013B3C' }}>Практики</Text>
                    <IoFilter style={{ color: '#013B3C', height: 40, width: 40 }} />
                </View>

                {/* Group 1 */}
                <div className='audio-group' style={styles.audio_group}>

                    {/* Title */}
                    <Text style={styles.group_title}>Легкие</Text>

                    {/* Cards List */}
                    <div className='cards-list' style={{ display: 'flex', gap: 20 }}>

                        {/* Card 1 */}

                        <PracticeCard
                            title="Река мыслей"
                            description="помогает собраться"
                            image={require('@/assets/images/practice_icons/river.png')}
                            time='5'
                            navigateTo="/practice/_practices/practice_river"
                        />

                        {/* Card 2 */}
                        <PracticeCard
                            title="Внутренний ребенок"
                            description="забота о себе"
                            image={require('@/assets/images/practice_icons/baby.png')}
                            time='25'
                            navigateTo="/practice/_practices/practice_baby"
                        />


                    </div>

                </div>

                {/* Group 2 */}
                <div className='audio-group' style={styles.audio_group}>

                    {/* Title */}
                    <Text style={styles.group_title}>Средние</Text>

                    {/* Cards List */}
                    <div className='cards-list' style={{ display: 'flex', gap: 20 }}>

                        {/* Card 1 */}
                        <PracticeCard
                            title="Любовь к себе"
                            description="баланс и гармония"
                            image={require('@/assets/images/practice_icons/heart.png')}
                            time='20'
                            navigateTo="/practice/_practices/practice_love"
                        />

                        {/* Card 2 */}
                        <PracticeCard
                            title="Полное расслабление"
                            description="остановка в моменте"
                            image={require('@/assets/images/practice_icons/relax.png')}
                            time='30'
                            navigateTo="/practice/_practices/practice_relax"
                        />

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
        borderWidth: 1,
        borderColor: 'white'
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
