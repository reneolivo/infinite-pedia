import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement, useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { SearchBar } from 'react-native-screens';
import { bluePrintsGroupedByCategories } from '../constants/bluePrints';
import { styles } from '../constants/styles';
import { InfinitePediaScreensType } from '../types/InfinitePediaScreensType';
import { Collapse, CollapseItem } from '../components/Collapse';
import { OpenModalProps, useModal } from '../hooks/useModal';
import { getLists } from '../services/bluePrintsStorage';
import { ListType } from '../types/ListType';
import { ListForm } from '../components/ListForm';

export function BlueprintsListScreen(props: BlueprintsListProps): ReactElement {
  const { navigation } = props;
  const modal = useModal();
  const [lists, setLists] = useState<ListType[]>([]);
  const [editedList, setEditedList] = useState<ListType>({ name: '', isPrimary: false });

  useEffect(() => {
    getLists().then(setLists);
  }, []);

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.header1}>Inifite</Text>
        <Text style={styles.header2}>Pedia</Text>
      </>
      <SearchBar placeholder="Blueprint search" />
      <Collapse items={getBlueprintCollapseItems()} />
      {modal.view}
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
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text
                style={{...styles.item, flexGrow: 1}}
                onPress={() => navigation.navigate('Blueprint Details', { blueprint: item })}
              >
                {item.label}
              </Text>
              <Button color="none" title={'➕'} onPress={() => addBlueprintToList()} />
            </View>
          )}
        />
      ),
    }));
  }

  function addBlueprintToList(): void {
    if (lists.length === 0) {
      openListCreationModal(
        (
          <>
            No lists found.<br />
            Create a new one.
          </>
        ),
        { isPrimary: true },
      );
    }
  }

  function openListCreationModal(
    title: OpenModalProps['title'] = 'Create a new list',
    defaultValues: Partial<ListType> = {},
  ): void {
    modal.open(
      {
        title,
        children: (
          <ListForm onChange={setEditedList} />
        ),
        actions: [
          <Button key="save" onPress={saveList} title="💾 Save" />,
        ],
      },
    );
  }

  function saveList(): void {
    setLists([...lists, editedList]);
    modal.close();
  }
}

type BlueprintsListProps = NativeStackScreenProps<InfinitePediaScreensType, 'Home'>;
