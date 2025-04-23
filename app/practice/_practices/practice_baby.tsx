import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import PracticePlayer from '@/components/practice_player';


{/* Baby */ }
export default function PlayerScreen_Forest() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PracticePlayer
                image={require('@/assets/images/practice_bg/baby.png')}
                time={1500}
                audioSource={require('@/assets/sounds/practice/baby.mp3')}
            />
        </SafeAreaView>
    );
}
