import { Accordion, SearchBar, Text, View } from '@ant-design/react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReactElement, useState } from 'react';
import { FlatList } from 'react-native';
import { bluePrintsGroupedByCategories } from '../constants/bluePrints';
import { styles } from '../constants/styles';
import { InfinitePediaScreensType } from '../types/InfinitePediaScreensType';

export function BlueprintsListScreen(props: BlueprintsListProps): ReactElement {
  const { navigation } = props;
  const [activeSections, setActiveSections] = useState([0]);

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.header1}>Inifite</Text>
        <Text style={styles.header2}>Pedia</Text>
      </>
      <SearchBar placeholder="Blueprint search" />
      <Accordion
        activeSections={activeSections}
        onChange={(sections) => setActiveSections(sections)}
      >
        {bluePrintsGroupedByCategories.map((category) => {
          return (
            <Accordion.Panel header={category.label} key={category.name}>
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
            </Accordion.Panel>
          );
        })}
      </Accordion>
    </View>
  );
}

type BlueprintsListProps = NativeStackScreenProps<InfinitePediaScreensType, 'Home'>;
