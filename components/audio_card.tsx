import React from 'react';
import { Text, Image, Pressable, StyleSheet, View, GestureResponderEvent } from 'react-native';
import { useRouter } from 'expo-router';


interface AudioCardProps {
    title: string;
    description: string;
    image: any;
    navigateTo: string;
}


const AudioCard: React.FC<AudioCardProps> = ({ title, description, image, navigateTo }) => {

    const router = useRouter();

    return (
        <Pressable onPress={() => router.push(navigateTo)} style={styles.card}>
            <Image source={image} style={styles.cardPic} />
            <Text style={styles.cardTitle} numberOfLines={1} >{title}</Text>
            <Text style={styles.cardDesc} numberOfLines={1} >{description}</Text>
        </Pressable>
    );

};


const styles = StyleSheet.create({

    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 165,
        width: 165,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white'
    },

    cardPic: {
        height: 110,
        width: 110,
        scale: '97%'
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#013B3C',
        marginLeft: 8
    },

    cardDesc: {
        fontSize: 12,
        color: '#013B3C',
        marginLeft: 8
    },

});


export default AudioCard;
