import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import PracticePlayer from '@/components/practice_player';


{/* River */ }
export default function PlayerScreen_Forest() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PracticePlayer
                image={require('@/assets/images/practice_bg/river.png')}
                time={300}
                audioSource={require('@/assets/sounds/practice/river.mp3')}
            />
        </SafeAreaView>
    );
}
