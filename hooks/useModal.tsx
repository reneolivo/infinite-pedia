import { ReactNode, useState } from 'react';
import { Button, Pressable, Text, View, useWindowDimensions } from 'react-native';
import { modalStyles, styles } from '../constants/styles';

/**
 * Allows opening a modal with a title and content.
 * The modal can be closed by the user or programmatically.
 *
 * Usage:
 *
 * ```tsx
 * const modal = useModal();
 *
 * return (
 *   <>
 *     <Button title="Open" onPress={() => modal.open({ title: 'Title', children: <Text>Content</Text> })} />
 *     {modal.view}
 *   </>
 * );
 */
export function useModal(): UseModalResult {
  const [view, setView] = useState<ReactNode>(null);

  return {
    view,
    open,
    close,
  };

  function open(props: OpenModalProps): void {
    const { title, children } = props;

    setView(
      <Pressable
        onTouchEnd={(event) => {
          event.stopPropagation();
          setTimeout(() => close(), 0);
        }}
        style={modalStyles.background}
      >
        <Pressable onTouchEnd={(event) => event.stopPropagation()}>
          <View style={modalStyles.container}>
            <View style={styles.verticalSpace}>
              <Text style={{ ...styles.header3, ...styles.noPadding, margin: 0 }}>
                {title}
              </Text>
              {children}
              <Button title="Close" onPress={close} />
            </View>
          </View>
        </Pressable>
      </Pressable>
    );
  }

  function close(): void {
    setView(null);
  }
}

type UseModalResult = {
  view: ReactNode,
  open: (props: OpenModalProps) => void,
  close: () => void,
};

type OpenModalProps = {
  title: string,
  children: ReactNode,
};