import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <Text>Home</Text>
            <Link href='tabs/'>
                <Text>go to tabs</Text>
            </Link>
        </View>
    )
}

export default Home