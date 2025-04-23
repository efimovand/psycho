import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Player from '@/components/player';


{/* Night Forest */ }
export default function PlayerScreen_NightForest() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Player
                image={require('@/assets/images/sounds_bg/night_forest.png')}
                title="Ночной лес"
                audioSource={require('@/assets/sounds/night_forest.mp3')}
            />
        </SafeAreaView>
    );
}
