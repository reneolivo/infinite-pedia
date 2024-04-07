import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReactElement } from 'react';
import { styles } from '../constants/styles';
import { InfinitePediaScreensType } from '../types/InfinitePediaScreensType';
import { Button, Text, View } from 'react-native';

export function BlueprintDetailsScreen(props: BlueprintDetailsProps): ReactElement {
  const { navigation, route: { params: { blueprint } } } = props;

  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text style={styles.header1}>{blueprint.category}</Text>
      <Text style={styles.header2}>{blueprint.label}</Text>
    </View>
  );
}

type BlueprintDetailsProps = NativeStackScreenProps<InfinitePediaScreensType, 'Blueprint Details'>;
