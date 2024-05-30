import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { SearchBar } from 'react-native-screens';
import { SandwichMenuSVG } from '../assets/SandwichMenuSVG';
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
  const primaryList = useMemo(() => lists.find((list) => list.isPrimary), [lists]);

  useEffect(() => {
    getLists().then(setLists);
  }, []);

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.header1}>Infinite</Text>
        <Text style={styles.header2}>Pedia</Text>
      </>
      <pre>
      </pre>
      <SearchBar placeholder="Blueprint search" />
      <Collapse items={getBlueprintCollapseItems()} />
      {primaryList && (renderListFooter())}
      {modal.view}
    </View>
  );

  function renderListFooter(): ReactElement {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerHeader}>
          {primaryList?.name}
        </Text>
        <SandwichMenuSVG style={{ padding: 10 }} />
      </View>
    );
  }

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
          <ListForm value={defaultValues} onFinish={saveList} />
        ),
      },
    );
  }

  function saveList(newListValue: ListType): void {
    setLists([...lists, newListValue]);
    modal.close();
  }
}

type BlueprintsListProps = NativeStackScreenProps<InfinitePediaScreensType, 'Home'>;
