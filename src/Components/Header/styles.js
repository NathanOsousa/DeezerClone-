import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#191932',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F5F4F8',
  },
});
export default styles;
