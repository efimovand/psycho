import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View } from "react-native";
import { GrFormNext } from "react-icons/gr";


export default function Profile() {


    return (

        <SafeAreaView style={styles.container}>

            {/* Info Content */}
            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground}>

                {/* Title + Sort */}
                <View style={{ display: 'flex', flexDirection: 'row', gap: '25px', justifyContent: 'center', alignItems: 'center', marginTop: '35px' }}>
                    <Text style={{ fontSize: '26px', fontWeight: 'bold', color: '#013B3C' }}>Профиль</Text>
                </View>

                {/* Tabs */}
                <View style={{ display: 'flex', gap: '2px', width: '100%' }}>

                    {/* Tab 1 (ОТДЕЛЬНЫЙ КОМПОНЕНТ) */}
                    <View style={styles.tab_bg}>
                        <Text style={styles.tab_title}>Раздел</Text>
                        <GrFormNext style={{ height: '50px', width: '50px', color: '#013B3C' }} />
                    </View>

                    {/* Tab 2 (ОТДЕЛЬНЫЙ КОМПОНЕНТ) */}
                    <View style={styles.tab_bg}>
                        <Text style={styles.tab_title}>Еще раздел</Text>
                        <GrFormNext style={{ height: '50px', width: '50px', color: '#013B3C' }} />
                    </View>

                    {/* Tab 3 (ОТДЕЛЬНЫЙ КОМПОНЕНТ) */}
                    <View style={styles.tab_bg}>
                        <Text style={styles.tab_title}>Третий раздел</Text>
                        <GrFormNext style={{ height: '50px', width: '50px', color: '#013B3C' }} />
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
        gap: 25,
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    tab_bg: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: 20,
        borderTopWidth: 3,
        borderTopColor: 'white'
    },

    tab_title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#013B3C'
    }

});
