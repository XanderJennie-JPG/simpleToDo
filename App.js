import React, { useRef } from 'react';
import {
  View,
  ScrollView,
  useColorScheme,
  SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DayBlock from './components/DayBlock';
import AddTaskModal from './components/AddTaskModal';
import ThemeToggle from './components/ThemeToggle';
import { getWeekDates, formatDate } from './utils';
import { baseTheme, darkTheme, lightTheme } from './theme';
import styles from './styles';
import useTasks from './hooks/useTasks';
import useCurrentTime from './hooks/useCurrentTime';

const WEEK_DAYS = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

export default function App() {
  const systemColorScheme = useColorScheme();
  const [themeOverride, setThemeOverride] = React.useState(null); // 'dark' | 'light' | null
  const colorScheme = themeOverride || systemColorScheme;
  const weekDates = getWeekDates();
  const todayIdx = (() => {
    const today = new Date();
    const currentDay = today.getDay();
    return currentDay === 0 ? 6 : currentDay - 1;
  })();
  const [expandedDay, setExpandedDay] = React.useState(todayIdx);
  const inputRef = useRef();
  const currentTime = useCurrentTime();
  const {
    tasks,
    modalVisible,
    selectedDay,
    newTaskText,
    setNewTaskText,
    newTaskTime,
    setNewTaskTime,
    openAddTask,
    addTask,
    toggleTask,
    confirmDeleteTask,
    setModalVisible,
  } = useTasks(weekDates, formatDate);

  // Gradient colors for the whole list area
  const listGradientColors = colorScheme === 'dark'
    ? ['#888', '#444', '#222']
    : ['#f5f5f5', '#cccccc', '#888888'];

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <SafeAreaView style={[styles.gradient, { backgroundColor: colorScheme === 'dark' ? '#222' : '#eee' }]}> 
      <View style={[styles.container, { backgroundColor: 'transparent' }]}> 
        <LinearGradient colors={listGradientColors} style={styles.listGradient} start={{x:0.5, y:0}} end={{x:0.5, y:1}}>
          <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            {weekDates.map((date, idx) => {
              const dayTasks = tasks.filter(t => t.date === formatDate(date));
              const isExpanded = expandedDay === idx;
              return (
                <DayBlock
                  key={idx}
                  dayName={WEEK_DAYS[idx]}
                  date={date}
                  tasks={dayTasks}
                  isExpanded={isExpanded}
                  onToggleExpand={() => setExpandedDay(isExpanded ? null : idx)}
                  onAddTask={() => openAddTask(idx)}
                  onToggleTask={toggleTask}
                  onDeleteTask={confirmDeleteTask}
                  theme={theme}
                  styles={styles}
                />
              );
            })}
          </ScrollView>
        </LinearGradient>
        <ThemeToggle
          colorScheme={colorScheme}
          onToggle={() => setThemeOverride(colorScheme === 'dark' ? 'light' : 'dark')}
          styles={styles}
        />
        <AddTaskModal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          onAddTask={addTask}
          onCancel={() => setModalVisible(false)}
          inputRef={inputRef}
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
          newTaskTime={newTaskTime}
          setNewTaskTime={setNewTaskTime}
          theme={theme}
          styles={styles}
        />
      </View>
    </SafeAreaView>
  );
}