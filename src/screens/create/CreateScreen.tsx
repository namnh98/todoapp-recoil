import { TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useId } from 'react';
import styles from './styles';
import { AppDateTimePicker, AppHeader, AppInput, AppPicker, ButtonText } from '@/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ItemOptionProps, MainRouteProps } from '@/types';
import { LIST_PRIORITY } from '@/constants';
import dayjs from 'dayjs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { initStateListTask, initStateTaskCreate } from '@/recoiljs';
import { useKeyboard } from '@/hooks';

const CreateScreen = () => {
  const { goBack } = useNavigation<NativeStackNavigationProp<MainRouteProps>>();
  const { dismiss } = useKeyboard();
  const [taskInfor, setTaskInfor] = useRecoilState(initStateTaskCreate);
  const setListTask = useSetRecoilState(initStateListTask);
  const id = useId();
  const { params } = useRoute();
  const { task } = params ?? {};

  console.log(task);

  useEffect(() => {
    if (task) {
      setTaskInfor({
        title: task?.title,
        description: task?.description,
        dates: task?.dates,
        priority: task?.priority,
      });
    }
  }, []);

  const onBack = () => {
    goBack();
  };

  const onChangeValuePicker = (picker: ItemOptionProps) => {
    setTaskInfor((prev) => ({ ...prev, priority: picker?.value }));
  };

  const onChangeValueDate = (date: Date) => {
    setTaskInfor((prev) => ({ ...prev, dates: String(dayjs(date).format('DD/MM/YYYY')) }));
  };

  const onChangeValue = (key: string, value: string) => {
    setTaskInfor((prev) => ({ ...prev, [key]: value }));
  };

  const onCreateTask = () => {
    setListTask((prev) => [...prev, { taskId: id, isDone: false, ...taskInfor }]);
    onBack();
    setTaskInfor({
      title: '',
      description: '',
      dates: '',
      priority: '',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.topContainer}>
          <AppHeader
            title={`${task ? `Edit Task` : 'Add Task'}`}
            onBackAction={onBack}
            containerStyle={styles.header}
          />
          <View style={styles.bodyContainer}>
            <AppInput
              title={'Title'}
              titleStyle={styles.titleDefault}
              containerInputStyle={styles.containerInput}
              value={taskInfor?.title}
              onChange={(value) => onChangeValue('title', value)}
            />
            <AppInput
              title={'Description'}
              titleStyle={styles.titleDefault}
              containerInputStyle={styles.containerInput}
              value={taskInfor?.description}
              onChange={(value) => onChangeValue('description', value)}
            />
            <AppDateTimePicker
              title="Date"
              titleStyle={styles.titleDefault}
              containerStyle={styles.containerPicker}
              bodyContainerStyle={styles.bodyPicker}
              onChange={(date) => onChangeValueDate(date)}
              value={taskInfor?.dates}
            />
            <AppPicker
              title={'Priority'}
              titleStyle={styles.titleDefault}
              containerStyle={styles.containerPicker}
              bodyContainerStyle={styles.bodyPicker}
              listOption={LIST_PRIORITY}
              onChange={(pickerOption: ItemOptionProps) => onChangeValuePicker(pickerOption)}
              value={taskInfor?.priority}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <ButtonText
        title={`${task ? 'Edit Task' : ' Create New Task'}`}
        titleStyle={styles.titleButtonCreate}
        style={styles.buttonCreate}
        onPress={onCreateTask}
      />
    </View>
  );
};

export default CreateScreen;
