import React, { useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View, Pressable, Animated, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';
import BreathCircle from '@/components/breath_circle';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { TbPlayerTrackNext } from 'react-icons/tb';
import { TbPlayerTrackPrev } from 'react-icons/tb';


interface PlayerProps {
    image: string;
    title: string;
    audioSource: string;
}


const Player: React.FC<PlayerProps> = ({ image, title, audioSource }) => {

    const router = useRouter();

    const [sound, setSound] = useState<Audio.Sound | null>(null); // Для хранения объекта звука
    const [isPlaying, setIsPlaying] = useState<boolean>(false); // Состояние воспроизведения
    const [isLoading, setIsLoading] = useState<boolean>(true); // Состояние загрузки

    // Управление воспроизведением
    useFocusEffect(
        useCallback(() => {
            let soundInstance: Audio.Sound;

            const loadAudio = async () => {
                const { sound } = await Audio.Sound.createAsync(
                    { uri: audioSource },
                    { shouldPlay: false }
                );
                soundInstance = sound;
                setSound(sound);
                await sound.playAsync(); // Автоматический старт
                setIsPlaying(true); // Обновление состояния плеера
                setIsLoading(false); // Загрузка завершена
            };

            loadAudio();

            return () => {
                if (soundInstance) {
                    soundInstance.stopAsync();
                    soundInstance.unloadAsync();
                }
            };
        }, [audioSource])
    );

    // Кнопка Play/Pause
    const opacity = useRef<Animated.Value>(new Animated.Value(1)).current;

    const handlePlayPause = async () => {

        if (!sound) return;

        Animated.timing(opacity, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start(async () => {

            if (isPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }

            setIsPlaying(!isPlaying);

            Animated.timing(opacity, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start();

        });

    };

    // Navigation
    const handleNext = () => {
        setIsPlaying(false);
        router.push('/audio/audio_main');
    };
    const handlePrev = () => {
        setIsPlaying(false);
        router.push('/audio/audio_main');
    };


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" blurRadius={2} style={styles.imageBackground}>

                {/* Loader */}
                {isLoading && (
                    <View style={styles.loaderOverlay}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                )}

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    {/* Title */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1} >{title}</Text>
                    </View>

                    {/* Breath Circle */}
                    <BreathCircle />

                    {/* Controls */}
                    <View style={styles.controlContainer}>

                        {/* Prev Sound */}
                        <Pressable onPress={handlePrev}>
                            <TbPlayerTrackPrev style={styles.controlIcon} />
                        </Pressable>

                        {/* Play/Pause */}
                        <Pressable onPress={handlePlayPause} style={styles.playPauseBtn}>
                            <Animated.View style={{ opacity }}>
                                {isPlaying ? (
                                    <FaPause style={styles.icon} />
                                ) : (
                                    <FaPlay style={{ ...styles.icon, scale: '95%', marginLeft: 4 }} />
                                )}
                            </Animated.View>
                        </Pressable>

                        {/* Next Sound */}
                        <Pressable onPress={handleNext}>
                            <TbPlayerTrackNext style={styles.controlIcon} />
                        </Pressable>

                    </View>

                </View>
            </ImageBackground>

        </SafeAreaView>

    );
};


// Styles
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
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    loaderOverlay: {
        ...StyleSheet.absoluteFillObject,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: '#FBE383'
    },

    titleContainer: {
        position: 'absolute',
        top: 30,
        backgroundColor: 'rgba(59, 60, 60, 0.5)',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 30
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },

    image: {
        width: 350,
        height: 350,
    },

    controlContainer: {
        position: 'absolute',
        bottom: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        alignItems: 'center',
        height: 70,
        width: 330,
        borderRadius: 50,
        backgroundColor: 'rgba(59, 60, 60, 0.5)'
    },

    controlIcon: {
        height: 45,
        width: 45,
        color: 'rgba(59, 60, 60, 0.7)',
    },

    playPauseBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
        borderRadius: '50%',
        backgroundColor: 'rgba(59, 60, 60, 0.7)',
    },

    icon: {
        height: 35,
        width: 35,
        color: 'white',
    },

});


export default Player;
