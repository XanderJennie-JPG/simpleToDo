import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const TaskRow = ({ task, date, onToggleTask, onDeleteTask, theme, styles }) => (
  <View style={styles.taskRow}>
    <TouchableOpacity
      style={[
        styles.checkbox,
        task.completed && { backgroundColor: theme.checkboxChecked, borderColor: theme.checkboxChecked },
      ]}
      onPress={onToggleTask}
    >
      {task.completed ? <Text style={{ color: '#fff', fontWeight: 'bold' }}>✓</Text> : null}
    </TouchableOpacity>
    <View style={styles.taskTextWrap}>
      <Text style={[styles.taskTime, { color: theme.taskTime }]}> 
        {date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
        {task.time ? ` - ${task.time}` : ''}
      </Text>
      <Text
        style={[styles.taskText, task.completed && styles.completed, { color: theme.taskText }]}
      >
        {task.text}
      </Text>
    </View>
    <TouchableOpacity
      style={styles.deleteBtn}
      onPress={onDeleteTask}
    >
      <Text style={{ color: theme.delete }}>×</Text>
    </TouchableOpacity>
  </View>
);

TaskRow.propTypes = {
  task: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
};

export default TaskRow; 