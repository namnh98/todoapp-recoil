import { View, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import React, { Fragment, useId, useState } from 'react';
import { AppPickerProps, ItemOptionProps } from '@/types';
import AppText from '../appText';
import { ButtonText } from '../appButton';
import { moderateScale, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils';
import AppHeader from '../appHeader';
import { COLORS } from '@/constants';
import { IconFlag } from '@/assets';

const AppPicker = ({
  containerStyle,
  bodyContainerStyle,
  onChange,
  title,
  titleStyle,
  listOption,
  value,
}: AppPickerProps) => {
  const [optionSelect, setOptionSelect] = useState<ItemOptionProps>({ key: '', value: '' });
  const [open, setOpen] = useState(false);
  const id = useId();

  const onOpenClosePicker = () => {
    setOpen((pre) => !pre);
  };

  const onSelected = (item: ItemOptionProps) => {
    setOptionSelect(item);
    onOpenClosePicker();
    onChange?.(item);
  };

  const renderOptionItem = ({ item }: { item: ItemOptionProps }) => {
    return (
      <TouchableOpacity style={styles.itemProps} onPress={() => onSelected(item)}>
        <AppText fontSize={20}>{item?.value}</AppText>
        {(optionSelect?.value === item?.value ||
          listOption?.find((item: ItemOptionProps) => item.value === value)?.value ===
            item?.value) && <IconFlag />}
      </TouchableOpacity>
    );
  };

  return (
    <Fragment>
      <View style={containerStyle}>
        <AppText fontSize={13} style={titleStyle}>
          {title ?? '-'}
        </AppText>
        <ButtonText
          isPicker
          title={
            value
              ? String(listOption?.find((item: ItemOptionProps) => item.value === value)?.value)
              : optionSelect?.value ?? 'value select ...'
          }
          style={bodyContainerStyle}
          onPress={onOpenClosePicker}
        />
      </View>
      {Boolean(open) && (
        <Modal visible={open} transparent>
          <View style={styles.containerModal}>
            <View style={styles.bodyModal}>
              <AppHeader isCloseModal title={'Pick priority'} />
              <FlatList
                data={listOption}
                renderItem={renderOptionItem}
                keyExtractor={(items: ItemOptionProps) => items?.key + id}
                style={styles.list}
              />
            </View>
          </View>
        </Modal>
      )}
    </Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: COLORS.BACKGROUND_MODAL,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
  },
  bodyModal: {
    backgroundColor: COLORS.BLACK_BACKGROUND,
    height: SCREEN_HEIGHT * 0.45,
    width: SCREEN_WIDTH,
  },
  list: {
    marginTop: moderateScale(12),
  },
  itemProps: {
    marginHorizontal: moderateScale(16),
    marginBottom: moderateScale(8),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: COLORS.WHITE,
    paddingBottom: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
