import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Player from '@/components/player';


{/* Rain */ }
export default function PlayerScreen_Rain() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Player
                image={require('@/assets/images/sounds_bg/rain.png')}
                title="Дождь"
                audioSource={require('@/assets/sounds/rain.mp3')}
            />
        </SafeAreaView>
    );
}
