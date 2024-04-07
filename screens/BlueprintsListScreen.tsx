import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SearchBar } from 'react-native-screens';
import { bluePrintsGroupedByCategories } from '../constants/bluePrints';
import { styles } from '../constants/styles';
import { InfinitePediaScreensType } from '../types/InfinitePediaScreensType';
import { Collapse, CollapseItem } from '../components/Collapse';

export function BlueprintsListScreen(props: BlueprintsListProps): ReactElement {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.header1}>Inifite</Text>
        <Text style={styles.header2}>Pedia</Text>
      </>
      <SearchBar placeholder="Blueprint search" />
      <Collapse items={getBlueprintCollapseItems()} />
    </View>
  );

  function getBlueprintCollapseItems(): CollapseItem[] {
    return bluePrintsGroupedByCategories.map((category) => ({
      key: category.name,
      title: category.label,
      children: (
        <FlatList
          data={category.bluePrints}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={() => navigation.navigate('Blueprint Details', { blueprint: item })}
            >
              {item.label}
            </Text>
          )}
        />
      ),
    }));
  }
}

type BlueprintsListProps = NativeStackScreenProps<InfinitePediaScreensType, 'Home'>;
