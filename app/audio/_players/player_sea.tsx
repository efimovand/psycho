import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Player from '@/components/player';


{/* Sea */ }
export default function PlayerScreen_Sea() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Player
                image={require('@/assets/images/sounds_bg/sea.png')}
                title="Океанские волны"
                audioSource={require('@/assets/sounds/sea_waves.mp3')}
            />
        </SafeAreaView>
    );
}
