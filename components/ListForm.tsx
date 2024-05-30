import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Button, Switch, Text, View } from 'react-native';
import { TextInput, TextInputRefType } from '../components/TextInput';
import { ListType } from '../types/ListType';
import { styles } from '../constants/styles';

const defaultList: ListType = {
  name: '',
  isPrimary: false,
};

export function ListForm(props: ListFormProps): ReactElement {
  const { value: initialValue, onFinish = () => {} } = props;
  const value = {
    ...defaultList,
    ...initialValue,
  };
  const [listName, setListName] = useState(value.name);
  const [listIsPrimary, setListIsPrimary] = useState(value.isPrimary);
  const ref = useRef<TextInputRefType>();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <View style={styles.verticalSpace}>
      <TextInput
        innerRef={ref}
        placeholder="List name"
        value={listName}
        onChangeText={(name) => {
          setListName(name);
        }}
      />
      <View style={styles.horizontalSpace}>
        <Switch
          value={listIsPrimary}
          onValueChange={(isPrimary) => {
            setListIsPrimary(isPrimary);
          }}
        />
        <Text
          onPress={() => setListIsPrimary(!listIsPrimary)}
        >Is Primary?</Text>
      </View>
      <Button
        title="💾 Save"
        onPress={() => onFinish({
          name: listName,
          isPrimary: listIsPrimary,
        })}
      />
    </View>
  );
}

export type ListFormProps = {
  value?: Partial<ListType>,
  onFinish?: (list: ListType) => void,
};
