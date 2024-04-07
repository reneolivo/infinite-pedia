import { StyleProp, StyleSheet } from 'react-native';

const baseSpacing: StyleProp<{}> = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 5,
  paddingTop: 5,
};
const baseHeader: StyleProp<{}> = {
  ...baseSpacing,
  color: '#333',
  fontWeight: 'bold',
};

export const styles = StyleSheet.create({
  header1: {
    ...baseHeader,
    color: '#8A959B',
    fontSize: 36,
    lineHeight: 36,
    marginBottom: 0,
    marginTop: 10,
  },
  header2: {
    ...baseHeader,
    color: '#333',
    fontSize: 62,
    lineHeight: 62,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header3: {
    ...baseHeader,
    color: '#333',
    fontSize: 32,
    lineHeight: 32,
    marginBottom: 10,
  },
  header4: {
    ...baseHeader,
    color: '#333',
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#FEFEFE',
    color: '#333',
    minHeight: '100%',
    paddingTop: 50,
  },
  item: {
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    color: '#333',
    padding: 10,
  }
});
