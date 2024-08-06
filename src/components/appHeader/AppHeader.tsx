import { View, StyleSheet } from 'react-native';
import React from 'react';
import AppText from '../appText';
import { AppHeaderProps } from '@/types';
import { moderateScale, scale, verticalScale } from '@/utils';
import { IconBack, IconClose } from '@/assets';
import { ButtonIcon } from '../appButton';
import { COLORS } from '@/constants';

const AppHeader = ({
  title,
  containerStyle,
  titleStyle,
  onBackAction,
  isCloseModal,
  onCloseModal,
  isBack = true,
}: AppHeaderProps) => {
  const _onBack = () => {
    onBackAction?.();
  };

  const _onClose = () => {
    onCloseModal?.();
  };

  if (isCloseModal) {
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={styles.viewEmpty} />
        <AppText fontSize={20} style={titleStyle!}>
          {title ?? '-'}
        </AppText>
        <ButtonIcon onPress={_onClose} style={styles.buttonBackDefault}>
          <IconClose />
        </ButtonIcon>
      </View>
    );
  }

  return (
    <View style={[containerStyle]}>
      {isBack ? (
        <ButtonIcon onPress={_onBack} style={styles.buttonBackDefault}>
          <IconBack />
        </ButtonIcon>
      ) : (
        <View style={styles.viewEmpty} />
      )}
      <AppText fontSize={20} style={titleStyle!}>
        {title ?? '-'}
      </AppText>
      <View style={styles.viewEmpty} />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    flexDirection: 'row',
  },
  buttonBackDefault: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_BLACK_ICON,
    width: scale(32),
    height: verticalScale(32),
    borderRadius: moderateScale(4),
  },
  viewEmpty: {
    width: scale(32),
  },
});
