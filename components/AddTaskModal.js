import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const AddTaskModal = ({
  visible,
  onRequestClose,
  onAddTask,
  onCancel,
  inputRef,
  newTaskText,
  setNewTaskText,
  newTaskTime,
  setNewTaskTime,
  theme,
  styles,
}) => (
  <Modal
    visible={visible}
    animationType="slide"
    transparent
    onRequestClose={onRequestClose}
  >
    <View style={styles.modalOverlay}>
      <View style={[styles.modalContent, { backgroundColor: theme.modalBg }]}>            
        <Text style={[styles.modalTitle, { color: theme.dayHeader }]}>Add Task</Text>
        <TextInput
          ref={inputRef}
          style={[styles.input, { color: theme.input, borderColor: theme.inputBorder }]}
          placeholder="Task description"
          placeholderTextColor={theme.inputPlaceholder}
          value={newTaskText}
          onChangeText={setNewTaskText}
          onSubmitEditing={onAddTask}
          returnKeyType="done"
        />
        <TextInput
          style={[styles.input, { color: theme.input, borderColor: theme.inputBorder }]}
          placeholder="Time (e.g. 10:30AM)"
          placeholderTextColor={theme.inputPlaceholder}
          value={newTaskTime}
          onChangeText={setNewTaskTime}
          returnKeyType="done"
        />
        <View style={styles.modalBtns}>
          <TouchableOpacity style={styles.modalBtn} onPress={onAddTask}>
            <Text style={{ color: theme.modalBtn }}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalBtn} onPress={onCancel}>
            <Text style={{ color: theme.modalBtn }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

AddTaskModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  inputRef: PropTypes.any,
  newTaskText: PropTypes.string.isRequired,
  setNewTaskText: PropTypes.func.isRequired,
  newTaskTime: PropTypes.string.isRequired,
  setNewTaskTime: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
};

export default AddTaskModal; 