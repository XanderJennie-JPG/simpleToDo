import { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'WEEKSTACK_TASKS_V1';

export default function useTasks(weekDates, formatDate) {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(data => {
      if (data) setTasks(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const openAddTask = (dayIdx) => {
    setSelectedDay(dayIdx);
    setNewTaskText('');
    setNewTaskTime('');
    setModalVisible(true);
  };

  const addTask = () => {
    if (!newTaskText.trim()) return;
    const date = weekDates[selectedDay];
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        text: newTaskText,
        completed: false,
        date: formatDate(date),
        time: newTaskTime,
      },
    ]);
    setModalVisible(false);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const confirmDeleteTask = (id) => {
    if (Platform.OS === 'web') {
      if (window.confirm('Delete this task?')) deleteTask(id);
    } else {
      setDeleteId(id);
      Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
        { text: 'Cancel', onPress: () => setDeleteId(null), style: 'cancel' },
        { text: 'Delete', onPress: () => { deleteTask(id); setDeleteId(null); }, style: 'destructive' },
      ]);
    }
  };

  return {
    tasks,
    setTasks,
    modalVisible,
    setModalVisible,
    selectedDay,
    setSelectedDay,
    newTaskText,
    setNewTaskText,
    newTaskTime,
    setNewTaskTime,
    deleteId,
    setDeleteId,
    openAddTask,
    addTask,
    toggleTask,
    confirmDeleteTask,
    deleteTask,
  };
} 