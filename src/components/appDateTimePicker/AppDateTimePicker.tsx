import { View } from 'react-native';
import React, { useState } from 'react';
import { AppDateTimePickerProps } from '@/types';
import AppText from '../appText';
import { ButtonText } from '../appButton';
import dayjs from 'dayjs';
import DatePicker from 'react-native-date-picker';

const AppDateTimePicker = ({
  containerStyle,
  titleStyle,
  bodyContainerStyle,
  title = '',
  onChange,
  value,
}: AppDateTimePickerProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onOpenClosePicker = () => {
    setOpen((prev) => !prev);
  };

  const _onPickDay = (date: Date) => {
    setOpen(false);
    setDate(date);
    onChange?.(date);
  };

  return (
    <View style={containerStyle}>
      <AppText fontSize={13} style={titleStyle}>
        {title ?? '-'}
      </AppText>
      <ButtonText
        isPicker
        title={value ? String(value) : dayjs(date).format('DD/MM/YYYY') ?? '-'}
        style={bodyContainerStyle}
        onPress={onOpenClosePicker}
      />
      {open && (
        <DatePicker
          modal
          locale="vi"
          theme="dark"
          mode="date"
          maximumDate={dayjs().add(3, 'M') as never}
          open={open}
          date={date}
          onConfirm={_onPickDay}
          onCancel={onOpenClosePicker}
          title={title}
        />
      )}
    </View>
  );
};

export default AppDateTimePicker;
