import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AppText from '../appText';
import { ButtonTextProps } from '@/types';
import { IconArrowDown } from '@/assets';
import { moderateScale } from '@/utils';

const ButtonText = ({ title, titleStyle, isPicker, style, ...rest }: ButtonTextProps) => {
  return (
    <TouchableOpacity style={[isPicker && styles.containerDefault, style]} {...rest}>
      <AppText fontSize={12} style={titleStyle}>
        {title}
      </AppText>
      {Boolean(isPicker) && (
        <View>
          <IconArrowDown />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  containerDefault: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
  },
});
