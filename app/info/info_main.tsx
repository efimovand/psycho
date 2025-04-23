import React from 'react';
import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, ImageBackground, View } from "react-native";
import { GrFormNext } from "react-icons/gr";


export default function Info() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            {/* Info Content */}
            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={3} style={styles.imageBackground}>

                {/* Title */}
                <View style={{ display: 'flex', flexDirection: 'row', gap: 25, justifyContent: 'center', alignItems: 'center', marginTop: 35 }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#013B3C' }}>Информационный раздел</Text>
                </View>

                {/* Tabs */}
                <View style={{ display: 'flex', gap: 2, width: '100%' }}>

                    {/* Tab 1 (ОТДЕЛЬНЫЙ КОМПОНЕНТ) */}
                    <View style={styles.tab_bg} onClick={() => router.push('/info/_articles/articles_main')} >
                        <Text style={styles.tab_title}>Статьи</Text>
                        <GrFormNext style={{ height: 50, width: 50, color: '#013B3C' }} />
                    </View>

                    {/* Tab 2 (ОТДЕЛЬНЫЙ КОМПОНЕНТ) */}
                    <View style={styles.tab_bg}>
                        <Text style={styles.tab_title}>Книги</Text>
                        <GrFormNext style={{ height: 50, width: 50, color: '#013B3C' }} />
                    </View>

                    {/* Tab 3 (ОТДЕЛЬНЫЙ КОМПОНЕНТ) */}
                    <View style={styles.tab_bg}>
                        <Text style={styles.tab_title}>Методики</Text>
                        <GrFormNext style={{ height: 50, width: 50, color: '#013B3C' }} />
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
