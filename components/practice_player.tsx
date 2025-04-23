import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, SafeAreaView, StyleSheet, ImageBackground, View, Pressable, Animated, ActivityIndicator } from 'react-native';
import { IoClose } from "react-icons/io5";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { BiMobileVibration } from "react-icons/bi";
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';
import { FaPause, FaPlay } from 'react-icons/fa6';
import BreathCircle from '@/components/breath_circle';


interface PracticeProps {
    image: string; // Путь к изображению фона
    time: number; // Время
    audioSource: string; // Путь к звуковому файлу
}


const PracticePlayer: React.FC<PracticeProps> = ({ image, time, audioSource }) => {

    const router = useRouter();

    const [sound, setSound] = useState<Audio.Sound | null>(null); // Для хранения объекта звука
    const [isPlaying, setIsPlaying] = useState<boolean>(false); // Состояние воспроизведения
    const [remainingTime, setRemainingTime] = useState<number>(time); // Оставшееся время
    const [isLoading, setIsLoading] = useState<boolean>(true); // Состояние загрузки
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Для хранения интервала

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

    // Обновление времени
    useEffect(() => {
        if (isPlaying && remainingTime > 0) {
            intervalRef.current = setInterval(() => {
                setRemainingTime((prev) => Math.max(prev - 1, 0)); // Уменьшаем оставшееся время
            }, 1000);
        } else if (!isPlaying && intervalRef.current) {
            clearInterval(intervalRef.current); // Останавливаем интервал на паузе
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current); // Очищаем интервал при размонтировании
            }
        };
    }, [isPlaying, remainingTime]);

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

    // Форматирование времени в м:с
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" blurRadius={2} style={styles.imageBackground} >

                {/* Loader */}
                {isLoading && (
                    <View style={styles.loaderOverlay}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                )}

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    {/* Exit + Timeline + Timer */}
                    <View className='navigation' style={{ position: 'absolute', top: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 15, alignItems: 'center' }}>
                        <IoClose style={{ height: 40, width: 40, color: 'rgb(255, 255, 255, 0.4)' }} onClick={() => router.push('/practice/practice_main')} />
                        <Text style={{ fontSize: 24, color: '#BDBDB9' }}>{formatTime(remainingTime)}</Text>
                    </View>

                    {/* Breath Circle */}
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <BreathCircle />
                    </View>

                    {/* Buttons */}
                    <View style={{ position: 'absolute', bottom: 50, display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 20 }}>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>

                            {/* Sound */}
                            <View style={styles.control_btn}>
                                <HiMiniSpeakerWave style={{ height: 33, width: 33, color: 'white' }} />
                            </View>

                            {/* Vibration */}
                            <View style={styles.control_btn}>
                                <BiMobileVibration style={{ height: 33, width: 33, color: 'white' }} />
                            </View>

                        </View>

                        {/* Pause */}
                        <Pressable style={styles.control_btn} onPress={handlePlayPause}>
                            <Animated.View style={{ opacity }}>
                                {isPlaying ? (
                                    <FaPause style={{ height: 33, width: 33, color: 'white' }} />
                                ) : (
                                    <FaPlay style={{ height: 33, width: 33, color: 'white' }} />
                                )}
                            </Animated.View>
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

    loaderOverlay: {
        ...StyleSheet.absoluteFillObject,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: '#FBE383'
    },

    control_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        backgroundColor: '#486419'
    }

});


export default PracticePlayer;
