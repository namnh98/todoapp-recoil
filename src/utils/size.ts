import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export { moderateScale, scale, verticalScale, SCREEN_HEIGHT, SCREEN_WIDTH };
