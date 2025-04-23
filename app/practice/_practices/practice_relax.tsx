import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import PracticePlayer from '@/components/practice_player';


{/* Relax */ }
export default function PlayerScreen_Forest() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PracticePlayer
                image={require('@/assets/images/practice_bg/relax.png')}
                time={1800}
                audioSource={require('@/assets/sounds/practice/relax.mp3')}
            />
        </SafeAreaView>
    );
}
