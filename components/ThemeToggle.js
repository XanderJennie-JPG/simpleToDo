import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const ThemeToggle = ({ colorScheme, onToggle, styles }) => (
  <View style={styles.themeToggleContainer} pointerEvents="box-none">
    <TouchableOpacity
      style={styles.themeToggleBtn}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <Ionicons
        name={colorScheme === 'dark' ? 'sunny' : 'moon'}
        size={32}
        color={colorScheme === 'dark' ? '#fff' : '#222'}
      />
    </TouchableOpacity>
  </View>
);

ThemeToggle.propTypes = {
  colorScheme: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};

export default ThemeToggle; 