import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AppText from '../appText';
import { AppInputProps } from '@/types';
import { moderateScale, SCREEN_WIDTH, verticalScale } from '@/utils';
import { COLORS } from '@/constants';
import { ButtonIcon } from '../appButton';
import { IconClose } from '@/assets';

const AppInput = ({
  title,
  titleStyle,
  containerStyle,
  containerInputStyle,
  inputStyle,
  value,
  onChange,
  ...rest
}: AppInputProps) => {
  const [currentValue, setCurrentValue] = useState(value ?? '-');

  const _onChange = (value: string) => {
    setCurrentValue(value);
    onChange?.(value);
  };

  const onClear = () => {
    setCurrentValue('');
  };

  return (
    <View style={[containerStyle]}>
      <AppText fontSize={12} style={titleStyle}>
        {title}
      </AppText>
      <View style={[styles.containerInputDefault, containerInputStyle]}>
        <TextInput
          defaultValue={value}
          allowFontScaling={false}
          style={[styles.inputDefault, inputStyle]}
          cursorColor={COLORS.PURPLE}
          value={currentValue}
          onChangeText={_onChange}
          {...rest}
        />
        {(!!currentValue || value) && (
          <ButtonIcon onPress={onClear}>
            <IconClose />
          </ButtonIcon>
        )}
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  containerInputDefault: {
    height: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputDefault: {
    color: COLORS.WHITE,
    fontSize: moderateScale(13, 0.3),
    paddingHorizontal: moderateScale(8),
    width: SCREEN_WIDTH * 0.85,
  },
});
