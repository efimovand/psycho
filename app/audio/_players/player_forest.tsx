import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Player from '@/components/player'; // Импортируем компонент плеера


{/* Forest */ }
export default function PlayerScreen_Forest() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Player
                image={require('@/assets/images/sounds_bg/forest.png')}
                title="Весенний лес"
                audioSource={require('@/assets/sounds/forest.mp3')} // Пример источника аудио
            />
        </SafeAreaView>
    );
}
