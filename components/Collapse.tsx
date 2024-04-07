import { PropsWithChildren, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Text, View } from 'react-native';
import { styles } from '../constants/styles';

export function Collapse(props: CollapseProps): ReactElement {
  const { items } = props;
  const [activeItem, setActiveItem] = useState(items[0]?.key);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <>
          <Text style={styles.header4} onPress={() => handlePanelPress(item.key)}>{item.title}</Text>
          {activeItem === item.key && (<CollapsePanel>{item.children}</CollapsePanel>)}
        </>
      )}
    />
  );

  function handlePanelPress(panelKey: CollapseItem['key']): void {
    setActiveItem(panelKey === activeItem ? '' : panelKey);
  }
}

export type CollapseProps = {
  items: CollapseItem[],
};

export type CollapseItem = PropsWithChildren<{
  key: string,
  title: string,
}>;


function CollapsePanel(props: CollapsePanelProps): ReactElement {
  const { children } = props;
  const panelShowAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(panelShowAnimation, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [panelShowAnimation]);

  return (
    <Animated.View style={{ opacity: panelShowAnimation }}>
      {children}
    </Animated.View>
  )
}

type CollapsePanelProps = PropsWithChildren<{}>;