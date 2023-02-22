import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'

const Categories = ({categories, selectedCategory, onCategoryPress} : any) => {
  return (
    <FlatList
        horizontal 
        data={categories}
        style={{marginRight: -32}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
            const selected = selectedCategory === item;

            return(
                <TouchableOpacity onPress={() => onCategoryPress(item)} style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}]}>
                    <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
                </TouchableOpacity>
            )
        }}/>
  );
};

export default React.memo(Categories)
