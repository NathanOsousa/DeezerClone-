import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 12,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    maxWidth: 200,
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  imageRectangular: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  text: {
    color: '#3D3D4D',
  },
});
export default styles;
