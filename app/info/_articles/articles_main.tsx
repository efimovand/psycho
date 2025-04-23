import React from 'react';
import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, ImageBackground, View, ScrollView } from "react-native";
import { GrFormNext } from "react-icons/gr";


interface ArticleLinkProps {
    title: string;
    navigateTo: string;
}


const ArticleLink: React.FC<ArticleLinkProps> = ({ title, navigateTo }) => {

    const router = useRouter();

    return (
        <View style={styles.article_bg} onClick={() => router.push(navigateTo)}>
            <Text style={styles.article_title}>{title}</Text>
            <GrFormNext style={{ height: 35, width: 35, color: '#013B3C' }} />
        </View>
    );
}


export default function ArticlesMain() {


    return (

        <SafeAreaView style={styles.container}>

            {/* Articles Main */}
            <ImageBackground source={require('@/assets/images/bg.jpg')} resizeMode="cover" blurRadius={3} style={styles.imageBackground}>

                {/* Title */}
                <View style={{ display: 'flex', flexDirection: 'row', gap: 25, justifyContent: 'center', alignItems: 'center', marginTop: 35 }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#013B3C' }}>Статьи</Text>
                </View>

                {/* Links */}
                <ScrollView contentContainerStyle={styles.scrollContainer}>

                    <ArticleLink title='Тревожность: когда норма становится проблемой' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='Что тревога делает с телом?' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='"Тревога имеет смысл": как его найти?' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='Как формируется тревожность и влияние СМИ' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='О чем может сказать тревога?' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='Социальная тревога: что это и как с ней справляться' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='5 шагов управления тревогой' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='Паническая атака: 7 фактов, которые нужно знать' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='Когнитивно-поведенческая психотерапия тревожного расстройства' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='Почему вам выгодно тревожиться: 5 мифов о тревоге' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='Социофобия: стили мышления при тревоге' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='В чем разница между тревогой и беспокойством' navigateTo='/info/_articles/article_1' />
                    <ArticleLink title='Тревога как часть нашей жизни: почему нам не нужно с ней бороться' navigateTo='/info/_articles/article_1' />

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
        display: 'flex',
        gap: 2,
        width: '100%',
        paddingBottom: 120,
    },

    article_bg: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: 20,
        borderTopWidth: 3,
        borderTopColor: 'white'
    },

    article_title: {
        width: '90%',
        fontSize: 17,
        color: '#013B3C'
    },

});
