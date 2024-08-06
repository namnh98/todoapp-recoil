import { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { ItemOptionProps } from './common';

type ChildrenProps = {
  children: React.ReactNode;
};

export type AppTextProps = ChildrenProps & {
  style?: TextStyle;
  fontSize: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  color?: string;
};

export type ButtonIconProps = ChildrenProps & TouchableOpacityProps;

export type AppHeaderProps = {
  title?: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  onBackAction?: () => void;
  isCloseModal?: boolean;
  onCloseModal?: () => void;
  isBack?: boolean;
};

export type AppInputProps = {
  title?: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  containerInputStyle?: ViewStyle;
  inputStyle?: TextStyle;
  value?: string;
  onChange?: (value: string) => void;
};

export type ButtonTextProps = TouchableOpacityProps & {
  title?: string;
  titleStyle?: TextStyle;
  isPicker?: boolean;
  style?: ViewStyle;
};

export type AppDateTimePickerProps = {
  containerStyle?: ViewStyle;
  bodyContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  title?: string;
  value?: Date | string;
  onChange?: (date: Date) => void;
};

export type AppPickerProps = {
  containerStyle?: ViewStyle;
  bodyContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  title?: string;
  onChange?: (pickerOption: { key: string; value: string }) => void;
  listOption: ItemOptionProps[];
  value?: string;
};
