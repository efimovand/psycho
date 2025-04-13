import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import { BiWind } from "react-icons/bi";
import { IoMusicalNotes } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";


{/* Nav Bar */ }
export default function NavBar() {

    const router = useRouter();
    const pathname = usePathname();


    return (

        <View style={styles.navBar}>

            {/* Wind */}
            <BiWind style={{ ...styles.tabIcon, color: pathname.includes('/wind') ? '#EEA3A1' : 'white' }} onClick={() => router.push('/wind/wind_main')} />

            {/* Line */}
            <View style={styles.navBarSeparator} />

            {/* Audio */}
            <IoMusicalNotes className='tab-2' style={{ ...styles.tabIcon, scale: '98%', color: pathname.includes('/audio') ? '#EEA3A1' : 'white' }} onClick={() => router.push('/audio/audio_main')} />

            {/* Home */}
            <div className="tab-home-bg" style={styles.tabHomeBg} onClick={() => router.push('/')}>
                <IoMdHome className='tab-home' style={{ ...styles.tabIcon, height: '62px', width: '62px', marginBottom: '6px', marginLeft: '1px', color: pathname === '/' ? '#EEA3A1' : 'white', }} />
            </div>

            {/* Info */}
            <FaListUl className='tab-3' style={{ ...styles.tabIcon, scale: '88%', color: pathname.includes('/info') ? '#EEA3A1' : 'white' }} onClick={() => router.push('/info/info_main')} />

            {/* Line */}
            <View style={styles.navBarSeparator} />

            {/* Profile */}
            <FaUserLarge className='tab-4' style={{ ...styles.tabIcon, scale: '88%', color: pathname.includes('/profile') ? '#EEA3A1' : 'white' }} onClick={() => router.push('/profile/profile_main')} />

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

    tabHomeBg: {
        display: 'flex',
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
