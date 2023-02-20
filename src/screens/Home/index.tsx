import { SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../../components/Title'

const Home = () => {
    const [title, setTitle] = useState('My first component');

  return (
    <SafeAreaView>
        <View>
            <Title text='Halo'/>
        </View>
    </SafeAreaView>
  )
}

export default React.memo(Home)