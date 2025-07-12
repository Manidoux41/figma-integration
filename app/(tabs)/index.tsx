import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IntroduceMan from '@/components/svg/IntruduceMan'
import LogoCloud from '@/components/LogoCloud'
import ButtonComponent from '@/components/ButtonComponent'
import { scale, verticalScale } from 'react-native-size-matters'
import { useRouter } from 'expo-router'
import Header from '@/components/layouts/Header'

const HomeSreen = () => {

    const router = useRouter()

  return (
    <React.Fragment>
        <Header />
        <View style={{width: 280, height: 270, backgroundColor: 'white', position:'absolute', top: 56, left:14}}>
            <IntroduceMan style={{position: 'absolute', bottom: 0, right: 70}} />
            <LogoCloud source={require(`../../assets/images/aws.png`)} hposition={0} vposition={85}/>
            <LogoCloud source={require(`../../assets/images/azure.png`)} hposition={40} vposition={188}/>
            <LogoCloud source={require(`../../assets/images/googlecloud.png`)} hposition={195} vposition={188}/>
        </View>
        <View style={{backgroundColor:"#3F3D56", width:'33%',height: 1, position: 'absolute', top:'45%', left:'30%'}}></View>
        <View style={styles.welcomeContainer}>
            <Text style={styles.title}>Cloud in your hands</Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad rem voluptatibus error dolor temporibus animi dicta ullam, officiis quas autem aperiam recusandae, itaque incidunt quae
            </Text>
            <ButtonComponent
                text="Get Started"
                onPress={() => {
                    router.push('/(auth)/register')
                }}
            />
        </View>
    </React.Fragment>
  )
}

export default HomeSreen

const styles = StyleSheet.create({
    welcomeContainer: {
        position: 'absolute',
        top:'50%',
        width: '100%',
        marginVertical:-20,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize:24,
        fontWeight: 'semibold',
        color:'#7218B9',
        marginHorizontal:scale(40),
        marginVertical:verticalScale(20),
    },
    text: {
        marginHorizontal:scale(40),
        marginVertical:verticalScale(0),
        fontSize:20,
        textAlign:'justify'
    }
})