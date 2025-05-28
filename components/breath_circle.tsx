import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';


const BreathCircle: React.FC = () => {

    // Внешний и внутренний круги
    const outerCircleScale = useRef(new Animated.Value(1)).current;
    const innerCircleScale = useRef(new Animated.Value(1)).current;

    // Функция для анимации дыхания
    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(outerCircleScale, {
                        toValue: 1.2,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(outerCircleScale, {
                        toValue: 1,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(innerCircleScale, {
                        toValue: 1.5,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(innerCircleScale, {
                        toValue: 1,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                ]),
            ]),
            { iterations: -1 }
        ).start();
    }, []);


    return (
        <View style={styles.container}>
            {/* Внешний круг */}
            <Animated.View
                style={[
                    styles.circle,
                    {
                        transform: [{ scale: outerCircleScale }],
                    },
                ]}
            />
            {/* Внутренний круг */}
            <Animated.View
                style={[
                    styles.circle,
                    {
                        width: 200,
                        height: 200,
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        borderWidth: 8,
                        borderColor: 'white',
                        transform: [{ scale: innerCircleScale }],
                    },
                ]}
            />
        </View>
    );

};


// Styles
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    circle: {
        position: 'absolute',
        width: 300,
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 150,
        borderWidth: 8,
        borderColor: 'rgba(255, 255, 255, 0.4)',
    },

});


export default BreathCircle;
