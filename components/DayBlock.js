import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './TaskRow';

const DayBlock = ({
  dayName,
  date,
  tasks,
  isExpanded,
  onToggleExpand,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  theme,
  styles,
}) => (
  <View
    style={[
      styles.dayBlock,
      { backgroundColor: 'transparent', borderColor: theme.dayBlock, borderBottomWidth: 1 },
    ]}
  >
    <TouchableOpacity onPress={onToggleExpand}>
      <Text style={[styles.dayHeader, { color: theme.dayHeader }]}>{dayName}</Text>
    </TouchableOpacity>
    {isExpanded && (
      <>
        {tasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            date={date}
            onToggleTask={() => onToggleTask(task.id)}
            onDeleteTask={() => onDeleteTask(task.id)}
            theme={theme}
            styles={styles}
          />
        ))}
        <TouchableOpacity onPress={onAddTask}>
          <Text style={[styles.addTask, { color: theme.addTask }]}>Add a task...</Text>
        </TouchableOpacity>
      </>
    )}
  </View>
);

DayBlock.propTypes = {
  dayName: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  tasks: PropTypes.array.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggleExpand: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
};

export default DayBlock; 