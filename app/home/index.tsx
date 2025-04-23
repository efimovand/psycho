import React, { useRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, Pressable } from "react-native";
import { useRouter } from 'expo-router';
import { Svg, Defs, Filter, FeTurbulence, FeComposite, Rect } from 'react-native-svg';


const NoiseBackground = () => (
  <Svg height="100%" width="100%" style={{ position: 'absolute' }}>
    <Defs>
      <Filter id="noise">
        <FeTurbulence
          type="fractalNoise"
          baseFrequency="1.5"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <FeComposite in="SourceGraphic" operator="in" />
      </Filter>
    </Defs>
    <Rect
      width="100%"
      height="100%"
      filter="url(#noise)"
      opacity="0.3"
      fill="white"
    />
  </Svg>
);


export default function Home() {

  const router = useRouter();


  return (

    <SafeAreaView style={styles.container}>

      <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" style={styles.imageBackground}>

        {/* Home Content */}
        <View style={{ display: 'flex', gap: 85, justifyContent: 'center', alignItems: 'center' }}>

          {/* SOS Button */}
          <View style={styles.sosContainer}>

            {/* Title */}
            <Image source={require('@/assets/images/sos_title.png')} style={{ height: 60, width: 120 }} />

            {/* Button */}
            <Pressable onPress={() => router.push('/home/_sos_screens/sos_start')}>
              <Image source={require('@/assets/images/sos.png')} style={{ height: 230, width: 230 }} />
            </Pressable>

          </View>

          {/* Affirmation */}
          <View style={styles.affirmationContainer}>

            <NoiseBackground />

            {/* Exclamation */}
            <View style={{ width: 60, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ width: 8, height: 30, backgroundColor: 'white' }} />
              <View style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: 'white' }} />
            </View>

            {/* Line */}
            <View style={{ height: 55, width: 2, backgroundColor: 'white' }} />

            {/* Text */}
            <Text style={{ height: '100%', width: '100%', paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, color: '#465327' }}>Я сделаю сегодня что-то приятное для себя, потому что я ценю себя и заслуживаю радости.</Text>

          </View>

        </View>

      </ImageBackground>

    </SafeAreaView>

  );

}


{/* Styles */ }
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageBackground: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  sosContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50
  },

  affirmationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: 90,
    width: 315,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
  }

});
