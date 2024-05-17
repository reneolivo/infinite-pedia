import { LegacyRef, MutableRefObject, ReactElement, RefObject } from 'react';
import { TextInput as NativeTextInput, TextInputProps as NativeTextInputProps } from 'react-native';

export function TextInput(props: TextInputProps): ReactElement {
  const { innerRef } = props;

  return (
    <NativeTextInput
      // The ref is expected to already contain an instantiated text input reference,
      // but we want the component itself to instantiate the reference.
      ref={innerRef as MutableRefObject<TextInputRefType>}
      style={{
        padding: 10,
        fontSize: 18,
        borderColor: '#AAA',
        borderWidth: 1,
      }}
      placeholderTextColor="#999"
      {...props}
    />
  );
}

export type TextInputProps = NativeTextInputProps & {
  innerRef?: MutableRefObject<TextInputRefType | undefined>,
};

export type TextInputRefType = NativeTextInput;