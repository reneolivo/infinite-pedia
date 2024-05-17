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
  },
  noPadding: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  verticalSpace: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 20,
  },
  horizontalSpace: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export const modalStyles = StyleSheet.create({
  background: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  container: {
    margin: 20,
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    padding: 20,
  }
});
