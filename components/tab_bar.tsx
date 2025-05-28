import React from 'react';
import { View, Pressable, StyleSheet, Image } from 'react-native';
import { usePathname } from 'expo-router';


export default function CustomTabBar({ state, navigation }) {
    const currentTab = state.index;
    const pathname = usePathname();

    if (
        pathname.includes('/_sos_screens') ||
        pathname.includes('/_players') ||
        pathname.includes('/_practices')
    ) return null;

    const buttons = [
        { icon: require('../assets/images/tabs/info.png'), route: 'info' },
        { icon: require('../assets/images/tabs/practice.png'), route: 'practice' },
        { icon: require('../assets/images/tabs/home.png'), route: 'home' },
        { icon: require('../assets/images/tabs/audio.png'), route: 'audio' },
        { icon: require('../assets/images/tabs/profile.png'), route: 'profile' },
    ];

    return (

        <View style={styles.navBar}>

            {buttons.map((btn, index) => (
                <Pressable key={btn.route} onPress={() => navigation.navigate(btn.route)} style={[styles.circleButton, currentTab === index && styles.activeButton]}>
                    <Image
                        source={btn.icon}
                        tintColor={currentTab === index ? '#EEA3A1' : 'white'}
                        style={styles.tabPic}
                    />
                </Pressable>
            ))}

        </View>

    );
}

const styles = StyleSheet.create({

    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        paddingHorizontal: 25,
        height: 50,
        zIndex: 10,
    },

    circleButton: {
        backgroundColor: '#486419',
        width: 52,
        height: 52,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    activeButton: {
        backgroundColor: '#5A825D',
    },

    tabPic: {
        height: 30,
        width: 30,
    }

});
