import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import PracticePlayer from '@/components/practice_player';


{/* Love */ }
export default function PlayerScreen_Forest() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PracticePlayer
                image={require('@/assets/images/practice_bg/love.png')}
                time={1200}
                audioSource={require('@/assets/sounds/practice/love.mp3')}
            />
        </SafeAreaView>
    );
}
