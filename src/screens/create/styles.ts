import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';
import { moderateScale, scale, SCREEN_WIDTH } from '@/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_BACKGROUND,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(12),
  },
  bodyContainer: {
    marginTop: moderateScale(8),
    marginHorizontal: moderateScale(16),
  },
  titleDefault: {
    fontSize: moderateScale(18, 0.3),
  },
  containerInput: {
    marginTop: moderateScale(4),
    marginBottom: moderateScale(8),
    borderWidth: moderateScale(1),
    borderColor: COLORS.WHITE,
    borderRadius: moderateScale(8),
  },
  containerPicker: {
    marginBottom: moderateScale(8),
  },
  bodyPicker: {
    borderWidth: moderateScale(1),
    borderColor: COLORS.WHITE,
    borderRadius: moderateScale(8),
    marginTop: moderateScale(4),
    paddingVertical: moderateScale(8),
  },
  topContainer: {
    width: SCREEN_WIDTH,
  },
  buttonCreate: {
    backgroundColor: COLORS.PURPLE,
    marginBottom: moderateScale(12),
    width: SCREEN_WIDTH - scale(32),
    paddingVertical: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
  titleButtonCreate: {
    fontSize: moderateScale(18),
  },
});

export default styles;
