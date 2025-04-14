import React, { useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av'; // Импортируем библиотеку для работы с аудио

import { FaPause, FaPlay } from 'react-icons/fa6';
import { TbPlayerTrackNext } from 'react-icons/tb';
import { TbPlayerTrackPrev } from 'react-icons/tb';


interface PlayerProps {
    image: string; // Путь к изображению фона
    title: string; // Название звукового трека
    audioSource: string; // Путь к звуковому файлу
}


const Player: React.FC<PlayerProps> = ({ image, title, audioSource }) => {

    const router = useRouter();

    const [sound, setSound] = useState<Audio.Sound | null>(null); // Для хранения объекта звука
    const [isPlaying, setIsPlaying] = useState<boolean>(false); // Состояние воспроизведения
    const [isLoading, setIsLoading] = useState<boolean>(false); // Состояние загрузки

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

    // Навигация
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

            <ImageBackground source={image} resizeMode="cover" blurRadius={4} style={styles.imageBackground}>

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    {/* GIF или картинка, которая иллюстрирует воспроизведение */}
                    <Image source={require('@/assets/images/sound_circle.gif')} style={styles.image} />

                    {/* Контролы плеера */}
                    <View style={styles.controlContainer}>

                        <TouchableOpacity onPress={handlePrev}>
                            <TbPlayerTrackPrev style={styles.controlIcon} />
                        </TouchableOpacity>

                        {/* Кнопка Play/Pause */}
                        <TouchableOpacity onPress={handlePlayPause} style={styles.playPauseBtn}>
                            <Animated.View style={{ opacity }}>
                                {isPlaying ? (
                                    <FaPause style={styles.icon} />
                                ) : (
                                    <FaPlay style={styles.icon} />
                                )}
                            </Animated.View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={handleNext}>
                            <TbPlayerTrackNext style={styles.controlIcon} />
                        </TouchableOpacity>

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
