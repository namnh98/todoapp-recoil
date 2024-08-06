import { FlatList, TouchableOpacity, View } from 'react-native';
import React, { Fragment } from 'react';
import styles from './styles';
import EmptyView from './components/EmptyView';
import { IconDelete, IconEdit, IconFlag, IconPlus } from '@/assets';
import { useNavigation } from '@react-navigation/native';
import type { MainRouteProps, TaskProps } from '@/types';
import { EMainRoute } from '@/enums';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppHeader, AppText, ButtonIcon } from '@/components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { initStateListTask } from '@/recoiljs';
import { COLORS } from '@/constants';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainRouteProps>>();
  const listTask = useRecoilValue(initStateListTask);
  const setListTask = useSetRecoilState(initStateListTask);

  const onPressCreateTask = () => {
    navigation.navigate(EMainRoute.CreateScreen);
  };

  const onEditTask = (item: TaskProps) => {
    navigation.navigate(EMainRoute.CreateScreen, { task: item });
  };

  const onDeleteTask = (item: TaskProps) => {
    if (listTask.indexOf(item) > -1) {
      setListTask(listTask.splice(listTask.indexOf(item), 1));
    }
  };

  const onCheckedTask = (item: TaskProps) => {
    setListTask(
      listTask?.map((items: TaskProps) =>
        items?.taskId === item?.taskId ? { ...items, isDone: !items?.isDone } : items
      )
    );
  };

  const renderItemTask = ({ item }: { item: TaskProps }) => {
    return (
      <TouchableOpacity style={styles.itemTask} onPress={() => onCheckedTask(item)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.dotContainer}>
            <View style={item?.isDone ? styles.dot : styles.dotUnselect} />
          </View>
          <View style={{ marginLeft: 8 }}>
            <AppText
              fontSize={18}
              style={
                item?.isDone && {
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }
              }
            >
              {item?.description}
            </AppText>
            <AppText
              fontSize={13}
              marginTop={8}
              color={COLORS.GRAY}
              style={
                item?.isDone && {
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }
              }
            >
              {item?.dates}
            </AppText>
            <View style={styles.containerPriority}>
              <IconFlag />
              <AppText fontSize={12} marginLeft={2}>
                {item?.priority}
              </AppText>
            </View>
          </View>
        </View>
        <View style={styles.rightSideTask}>
          <ButtonIcon style={styles.buttonEdit} onPress={() => onEditTask(item)}>
            <IconEdit />
          </ButtonIcon>
          <ButtonIcon style={styles.buttonDelete} onPress={() => onDeleteTask(item)}>
            <IconDelete />
          </ButtonIcon>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, styles.containerDefault]}>
      {listTask?.length ? (
        <Fragment>
          <AppHeader isBack={false} title="List Task" containerStyle={styles.header} />
          <FlatList
            data={listTask}
            renderItem={renderItemTask}
            keyExtractor={(item: TaskProps) => String(item?.taskId)}
          />
        </Fragment>
      ) : (
        <Fragment>
          <EmptyView />
        </Fragment>
      )}
      <ButtonIcon style={styles.buttonAdd} onPress={onPressCreateTask}>
        <IconPlus />
      </ButtonIcon>
    </View>
  );
};

export default HomeScreen;
