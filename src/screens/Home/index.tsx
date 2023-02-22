import { SafeAreaView, ScrollView, View } from 'react-native'
import Title from '../../components/Title'
import styles from './style';
import Categories from '../../components/Categories';
import React, { useEffect, useState } from 'react';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('json data >>', jsonData)
  }, []);

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Title text="Where do" style={{ fontWeight: 'normal'}}/>
            <Title text="you want to go"/>
            <Title text="Explore Attractions" style={styles.subtitle}/>

            <Categories 
              selectedCategory= {selectedCategory}
              onCategoryPress = {setSelectedCategory} 
              categories={['All', 'Popular', 'Historical', 'Random', 'Trending', 'Exclusive', 'Random2', 'Random3']}
            />
            <ScrollView style={styles.row}>
                <AttractionCard 
                  title='Entertainment Park'
                  imageSrc='https://www.moon-event.fr/wp-content/uploads/2016/06/amusement-park.jpg'
                />
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default React.memo(Home)