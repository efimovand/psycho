import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Player from '@/components/player';


{/* Thunderstorm */ }
export default function PlayerScreen_Thunderstorm() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Player
                image={require('@/assets/images/sounds_bg/thunderstorm.png')}
                title="Гроза"
                audioSource={require('@/assets/sounds/thunderstorm.mp3')}
            />
        </SafeAreaView>
    );
}
