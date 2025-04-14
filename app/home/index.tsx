import React, { useRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Animated, TouchableWithoutFeedback, Image } from "react-native";
import { useRouter } from 'expo-router';


export default function Home() {

  const router = useRouter();

  {/* Affiramtion Widget */ }
  const affirmation_text_up = 'тут текст аффирмации';
  const affirmation_text_down = 'тут еще текст аффирмации';

  {/* Affiramtion's' Animation */ }
  const translateY = useRef(new Animated.Value(0)).current;

  const moveAffirmationUp = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const moveAffirmationDown = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };


  return (

    <SafeAreaView style={styles.container}>

      {/* Home Content */}
      <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground} onClick={moveAffirmationDown}>

        {/* SOS Button */}
        <TouchableOpacity style={styles.sos_btn} onPress={() => router.push('/home/_sos_screens/sos_start')}>
          <View style={{ ...styles.sos_btn, width: 170, height: 170 }}>
            <Text style={styles.text_sos_btn}>SOS</Text>
          </View>
        </TouchableOpacity>

        {/* Affirmation Widget */}
        <TouchableWithoutFeedback onPress={moveAffirmationUp}>
          <Animated.View style={[styles.affirmationContainer, { transform: [{ translateY }] },]} >
            <View style={styles.affirmationPart}>
              <Text style={styles.affirmationText}>{affirmation_text_up}</Text>
            </View>
            <View style={styles.affirmationPart}>
              <Text style={styles.affirmationText}>{affirmation_text_down}</Text>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>

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

  sos_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#408F9E',
    boxShadow: 'inset 0 0 0 3px rgba(255, 255, 255, 0.4)',
  },

  text_sos_btn: {
    fontSize: 64,
    color: '#FFFFFF',
  },

  affirmationContainer: {
    position: 'absolute',
    bottom: -70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: 15,
    height: 315,
    backgroundColor: 'transparent',
  },

  affirmationPart: {
    height: 100,
    width: 315,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.8)',
  },

  affirmationText: {
    color: '#408F9E',
    fontSize: 20,
  },

});
