import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Player from '@/components/player'; // Импортируем компонент плеера


export default function PlayerScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Player
                image={require('@/assets/images/sea.png')} // Пример изображения
                title="Океанские пенисы" // Пример названия
                audioSource={require('@/assets/sounds/test_sound.mp3')} // Пример источника аудио
            />
        </SafeAreaView>
    );
}
