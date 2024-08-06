import { TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonIconProps } from '@/types';

const ButtonIcon = ({ children, ...rest }: ButtonIconProps) => {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};

export default ButtonIcon;
