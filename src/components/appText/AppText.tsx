import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLORS } from '@/constants';
import { AppTextProps } from '@/types';
import { moderateScale } from '@/utils';

const AppText = ({
  children,
  style,
  fontSize = 13,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  color = COLORS.WHITE,
  ...rest
}: AppTextProps) => {
  return (
    <Text
      style={[
        styles.default,
        {
          fontSize: moderateScale(Number(fontSize!), 0.3),
          marginTop: moderateScale(Number(marginTop!)),
          marginBottom: moderateScale(Number(marginBottom!)),
          marginLeft: moderateScale(Number(marginLeft!)),
          marginRight: moderateScale(Number(marginRight!)),
          color,
        },
        style,
      ]}
      {...rest}
      allowFontScaling={false}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  default: {
    fontSize: 13,
    color: COLORS.WHITE,
  },
});
