import React from 'react';
import { Text, Image, Pressable, StyleSheet, View, GestureResponderEvent } from 'react-native';
import { useRouter } from 'expo-router';
import { MdOutlineTimer } from "react-icons/md";


interface PracticeCardProps {
    title: string;
    description: string;
    image: any;
    time: string;
    navigateTo: string;
}


const PracticeCard: React.FC<PracticeCardProps> = ({ title, description, image, time, navigateTo }) => {

    const router = useRouter();

    // Переход на практику
    const handlePress = (e: GestureResponderEvent) => {
        router.push(navigateTo);
    };

    // Вычисление размера шрифта на основе длины текста
    const getFontSize = (text: string) => {
        const baseSize = 18;
        const maxLength = 10;

        if (text.length > maxLength) {
            return baseSize - Math.min(4, (text.length - maxLength) * 0.5);
        }
        return baseSize;
    };

    return (
        <Pressable onPress={handlePress} style={styles.card}>

            {/* Pic + Time */}
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image source={image} style={styles.cardPic} />
                <View style={styles.picTimeContainer}>
                    <Text style={styles.cardTimer}>{time}</Text>
                    <MdOutlineTimer style={{ height: 30, width: 30, color: '#013B3C' }} />
                </View>
            </View>

            {/* Text */}
            <View style={{ marginBottom: 12 }}>
                <Text style={[styles.cardTitle, { fontSize: getFontSize(title) }]} numberOfLines={1} >{title}</Text>
                <Text style={styles.cardDesc}>{description}</Text>
            </View>

        </Pressable >
    );

};


const styles = StyleSheet.create({

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 165,
        width: 165,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white'
    },

    picTimeContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 25,
        right: 5
    },

    cardTimer: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#013B3C'
    },

    cardPic: {
        height: 110,
        width: 110,
        scale: 0.9
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#013B3C',
        marginLeft: 8,
    },

    cardDesc: {
        fontSize: 14,
        color: '#013B3C',
        marginLeft: 8
    },

});


export default PracticeCard;
