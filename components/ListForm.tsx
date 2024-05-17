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
  const { value = defaultList, onChange = () => {} } = props;
  const [listName, setListName] = useState(value.name);
  const [listIsPrimary, setListIsPrimary] = useState(value.isPrimary);
  const ref = useRef<TextInputRefType>();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <>
      <TextInput
        innerRef={ref}
        placeholder="List name"
        value={listName}
        onChangeText={(name) => {
          setListName(name);
          onChange({ name, isPrimary: listIsPrimary });
        }}
      />
      <View style={styles.horizontalSpace}>
        <Switch
          value={listIsPrimary}
          onValueChange={(isPrimary) => {
            setListIsPrimary(isPrimary);
            onChange({ name: listName, isPrimary: listIsPrimary });
          }}
        />
        <Text
          onPress={() => setListIsPrimary(!listIsPrimary)}
        >Is Primary?</Text>
      </View>
    </>
  );
}

export type ListFormProps = {
  value?: ListType,
  onChange?: (list: ListType) => void,
};
