import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Animated, TouchableWithoutFeedback, Image } from "react-native";
import { useRouter } from 'expo-router';
import { IoClose } from "react-icons/io5";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { BiMobileVibration } from "react-icons/bi";
import { FaPause } from "react-icons/fa6";


export default function WindProcess() {

    const router = useRouter();


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} >

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    {/* Exit + Timeline + Timer */}
                    <View className='navigation' style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: '15px', alignItems: 'center' }}>
                        <IoClose style={{ height: '40px', width: '40px', color: 'rgb(255, 255, 255, 0.4)' }} onClick={() => router.push('/wind/wind_main')} />
                        <Text style={{ fontSize: '24px', color: '#BDBDB9' }}>0:30</Text>
                    </View>

                    <View style={{ display: 'flex', alignItems: 'center' }}>

                        {/* Process Animation */}
                        <Image source={require('@/assets/images/wind_circle.gif')} style={{ width: 350, height: 350, scale: '180%' }} />

                        {/* Action */}
                        <Text style={{ fontSize: '26px', color: 'white' }}>Вдох (носом)</Text>

                    </View>

                    {/* Buttons */}
                    <View style={{ position: 'absolute', bottom: '50px', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: '20px' }}>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>

                            {/* Sound */}
                            <View style={styles.control_btn}>
                                <HiMiniSpeakerWave style={{ height: '33px', width: '33px', color: 'white' }} />
                            </View>

                            {/* Vibration */}
                            <View style={styles.control_btn}>
                                <BiMobileVibration style={{ height: '33px', width: '33px', color: 'white' }} />
                            </View>

                        </View>

                        {/* Pause */}
                        <View style={styles.control_btn}>
                            <FaPause style={{ height: '33px', width: '33px', color: 'white' }} />
                        </View>

                    </View>


                </View>

            </ImageBackground>

        </SafeAreaView>

    );

}


{/* Styles */ }
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageBackground: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    control_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        backgroundColor: '#114656'
    }

});
