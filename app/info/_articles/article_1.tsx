import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, View, ScrollView } from "react-native";


export default function Article_1() {

    const link = 'https://www.b17.ru/article/trevozhnost_kogda_norma_stanovitsya_problemoy/'


    return (

        <SafeAreaView style={styles.container}>

            {/* Article Content */}
            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={4} style={styles.imageBackground}>

                {/* Title */}
                <View style={{ display: 'flex', flexDirection: 'row', gap: 25, justifyContent: 'center', alignItems: 'center', marginTop: 35, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#013B3C', textAlign: 'center' }}>Тревожность: когда норма становится проблемой</Text>
                </View>

                {/* Content */}
                <ScrollView style={styles.scrollContainer}>

                    {/* URL */}
                    <View style={{ marginBottom: 25 }}>
                        <Text style={{ fontSize: 18, color: '#013B3C', fontWeight: 'bold' }}>Оригинал:</Text>
                        <Text style={styles.textUrl}>{link}</Text>
                    </View>

                    {/* Text */}
                    <Text style={{ fontSize: 18 }}>

                        Тревожность – естественная реакция на стресс. Проблемой становится, когда она чрезмерна, постоянна и мешает жизни, указывая на тревожные расстройства (распространены, чаще у женщин).{'\n\n'}

                        Проявления тревожности: {'\n'}
                        •  Физические: сердцебиение, потливость, дрожь, головная боль, проблемы с ЖКТ, усталость. {'\n'}
                        •  Эмоциональные: страх, беспокойство, раздражительность, трудности с концентрацией, ощущение оторванности. {'\n'}
                        •  Поведенческие: избегание, навязчивые мысли/действия, суетливость, проблемы со сном.{'\n\n'}

                        Факторы риска: {'\n'}
                        •  Генетика {'\n'}
                        •  Травмы {'\n'}
                        •  Хронический стресс {'\n'}
                        •  Особенности личности (перфекционизм, низкая самооценка) {'\n'}
                        •  Медицинские условия (заболевания щитовидной железы) {'\n'}
                        •  Психоактивные вещества {'\n\n'}

                        Диагностика:{'\n'}
                        •  Сбор анамнеза (врач/психотерапевт). {'\n'}
                        •  Физический осмотр (исключить медицинские причины). {'\n'}
                        •  Патопсихологическое обследование (медицинский психолог) {'\n\n'}

                        Помощь: {'\n'}
                        •  Психотерапия (личность психолога важна). {'\n'}
                        •  Медикаментозное лечение (назначает врач). {'\n'}
                        •  Изменение образа жизни (физические упражнения, здоровое питание, сон, отказ от вредных привычек, релаксация). {'\n'}
                        •  Поддержка близких. {'\n\n'}

                        Своевременное обращение к специалисту и комплексный подход позволяют справиться с тревожными расстройствами. Не бойтесь обращаться за помощью!

                    </Text>

                </ScrollView>

            </ImageBackground>

        </SafeAreaView>

    );

}


// Styles
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageBackground: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    scrollContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingBottom: 120
    },

    textUrl: {
        fontSize: 18,
        color: 'blue',
        textDecorationLine: 'underline'
    }

});
