import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, View, TouchableOpacity, Animated } from "react-native";
import { useRouter } from 'expo-router';
import UpperSOSNavigation from './upper_navigation';


// Дыхание по квадрату
export default function SOS_2() {

    const router = useRouter();

    const position = useRef(new Animated.ValueXY({ x: 122, y: 167 })).current;  // Начальная позиция точки
    const [breathPhase, setBreathPhase] = useState("Приготовься...");  // Состояние для фазы дыхания

    // Функция для движения точки по квадрату
    const moveDot = () => {

        const phaseSequence = [
            { x: -122, y: 167, phase: 'Вдох' }, // Вдох
            { x: -122, y: -80, phase: 'Задержи дыхание' },   // Задержка (вправо)
            { x: 122, y: -80, phase: 'Выдох' },   // Выдох
            { x: 122, y: 167, phase: 'Задержи дыхание' },   // Задержка (влево)
        ];

        const animateStep = (index) => {
            const { x, y, phase } = phaseSequence[index];

            Animated.timing(position, {
                toValue: { x, y },
                duration: 4000,
                useNativeDriver: true,
            }).start(() => {
                setBreathPhase(phase); // Меняем фазу дыхания
                if (index < phaseSequence.length - 1) {
                    animateStep(index + 1); // Переходим к следующей фазе
                } else {
                    animateStep(0); // Если завершена последовательность, начинаем заново
                }
            });
        };

        animateStep(0); // Начинаем с первой фазы
    };

    useEffect(() => {
        moveDot();
    }, []);


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} >

                {/* Overlay Color Layer */}
                <View style={styles.overlay}>

                    {/* Close + № */}
                    <UpperSOSNavigation number='2' />

                    {/* Text */}
                    <View className='content' style={{ width: 355 }}>

                        <Text style={styles.title}>
                            Дыхание по квадрату
                        </Text>

                        <Text style={styles.subtitle}>
                            Упражнение поможет тебе восстановить нормальный ритм дыхания и почувствовать себя более устойчиво
                        </Text>

                    </View>

                    {/* Квадрат (не двигается) */}
                    <View style={styles.square}>
                        <Text style={styles.squareText} numberOfLines={2} >{breathPhase}</Text>
                    </View>

                    {/* Анимированная точка, которая будет двигаться по квадрату */}
                    <Animated.View
                        style={[
                            styles.dot,
                            {
                                transform: [
                                    { translateX: position.x },  // Анимация по оси X
                                    { translateY: position.y },  // Анимация по оси Y
                                ]
                            }
                        ]}
                    />

                    {/* Next Btn */}
                    <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/home/_sos_screens/sos_3_1')}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Продолжить</Text>
                    </TouchableOpacity>

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
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

    subtitle: {
        color: '#fff',
        fontSize: 20,
        zIndex: 1,
    },

    title: {
        color: '#fff',
        fontSize: 24,
        zIndex: 1,
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    square: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 250,
        height: 250,
        borderRadius: 5,
        borderColor: '#EEA3A0',  // Цвет границ
        borderWidth: 5,
        marginBottom: 50,
    },

    squareText: {
        fontSize: 24,
        color: 'white',
    },

    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        // backgroundColor: '#EEA3A0',  // Цвет точки
        backgroundColor: '#FFFFFF',
        position: 'absolute',
    },

    nextBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: 'rgba(59, 60, 60, 0.6)',
        borderRadius: 25,
        boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.4)'
    },

});
