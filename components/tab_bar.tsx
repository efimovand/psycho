import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { usePathname } from 'expo-router';

import { BiWind } from 'react-icons/bi';
import { IoMusicalNotes } from 'react-icons/io5';
import { FaListUl } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';
import { IoMdHome } from 'react-icons/io';


export default function CustomTabBar({ state, navigation }) {

    const currentTab = state.index;
    const pathname = usePathname();

    {/* Экраны, где TabBar скрыт */ }
    if (
        pathname.includes('/_sos_screens') ||
        pathname.includes('/_players')
    ) return null

    return (

        <View style={styles.navBar}>

            {/* Wind */}
            <Pressable onPress={() => navigation.navigate('wind')}>
                <BiWind size={52} color={currentTab === 1 ? '#EEA3A1' : 'white'} />
            </Pressable>

            <View style={styles.navBarSeparator} />

            {/* Audio */}
            <Pressable onPress={() => navigation.navigate('audio')}>
                <IoMusicalNotes size={52} color={currentTab === 2 ? '#EEA3A1' : 'white'} style={{ scale: '98%' }} />
            </Pressable>

            {/* Home */}
            <Pressable style={styles.tabHomeBg} onPress={() => navigation.navigate('home')}>
                <IoMdHome size={62} color={currentTab === 0 ? '#EEA3A1' : 'white'} style={{ marginBottom: '6px', marginLeft: '1px' }} />
            </Pressable>

            {/* Info */}
            <Pressable onPress={() => navigation.navigate('info')}>
                <FaListUl size={52} color={currentTab === 3 ? '#EEA3A1' : 'white'} style={{ scale: '88%' }} />
            </Pressable>

            <View style={styles.navBarSeparator} />

            {/* Profile */}
            <Pressable onPress={() => navigation.navigate('profile')}>
                <FaUserLarge size={52} color={currentTab === 4 ? '#EEA3A1' : 'white'} style={{ scale: '85%' }} />
            </Pressable>

        </View>

    );
}


{/* Styles */ }
const styles = StyleSheet.create({

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

    tabHomeBg: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        backgroundColor: '#013B3C',
        borderRadius: '50%',
        marginBottom: 35,
        boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.4)'
    },

});
