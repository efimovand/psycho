import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Player from '@/components/player'; // Импортируем компонент плеера


{/* Stream */ }
export default function PlayerScreen_Stream() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Player
                image={require('@/assets/images/sounds_bg/stream.png')}
                title="Ручей"
                audioSource={require('@/assets/sounds/stream.mp3')} // Пример источника аудио
            />
        </SafeAreaView>
    );
}
