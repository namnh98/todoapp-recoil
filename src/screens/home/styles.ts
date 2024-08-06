import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';
import { moderateScale, scale, SCREEN_WIDTH, verticalScale } from '@/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_BACKGROUND,
  },
  containerDefault: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdd: {
    backgroundColor: COLORS.PURPLE,
    width: scale(64),
    height: scale(64),
    borderRadius: moderateScale(64),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  header: {
    flexDirection: 'row',
    marginVertical: verticalScale(12),
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
  },
  itemTask: {
    width: SCREEN_WIDTH - scale(32),
    backgroundColor: COLORS.BACKGROUND_BLACK_ICON,
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
    justifyContent: 'space-between',
  },
  dotContainer: {
    borderColor: COLORS.WHITE,
    borderWidth: moderateScale(1),
    width: scale(16),
    height: scale(16),
    borderRadius: scale(16),
    marginRight: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(16),
    backgroundColor: COLORS.WHITE,
  },
  dotUnselect: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(16),
    backgroundColor: COLORS.TRANSPARENT,
  },
  containerPriority: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(8),
    backgroundColor: COLORS.BACKGROUND_MODAL,
    padding: moderateScale(4),
    borderWidth: scale(1),
    borderColor: COLORS.GRAY,
    borderRadius: moderateScale(8),
  },
  buttonEdit: {
    padding: moderateScale(8),
    backgroundColor: COLORS.BACKGROUND_MODAL,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: moderateScale(1),
    borderColor: COLORS.WHITE,
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(8),
  },
  buttonDelete: {
    padding: moderateScale(8),
    backgroundColor: COLORS.BACKGROUND_MODAL,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: moderateScale(1),
    borderColor: COLORS.WHITE,
    borderRadius: moderateScale(8),
  },
  rightSideTask: {
    borderLeftColor: COLORS.GRAY,
    borderLeftWidth: moderateScale(1),
    paddingHorizontal: moderateScale(8),
  },
});

export default styles;
