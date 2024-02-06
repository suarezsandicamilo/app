//

import { Appearance } from 'react-native';

const data = {
  light: {
    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',
    black: '#000000',
    white: '#ffffff',
    gray: '#6c757d',
    gray_dark: '#343a40',
    gray_100: '#f8f9fa',
    gray_200: '#e9ecef',
    gray_300: '#dee2e6',
    gray_400: '#ced4da',
    gray_500: '#adb5bd',
    gray_600: '#6c757d',
    gray_700: '#495057',
    gray_800: '#343a40',
    gray_900: '#212529',
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#212529',
    body_color: '#212529',
    body_bg: '#ffffff',
    emphasis_color: '#000000',
    secondary_color: 'rgba(33, 37, 41, 0.75)',
    secondary_bg: '#e9ecef',
    tertiary_color: 'rgba(33, 37, 41, 0.5)',
    tertiary_bg: '#f8f9fa',
    primary_text_emphasis: '#052c65',
    secondary_text_emphasis: '#2b2f32',
    success_text_emphasis: '#0a3622',
    info_text_emphasis: '#055160',
    warning_text_emphasis: '#664d03',
    danger_text_emphasis: '#58151c',
    light_text_emphasis: '#495057',
    dark_text_emphasis: '#495057',
    primary_bg_subtle: '#cfe2ff',
    secondary_bg_subtle: '#e2e3e5',
    success_bg_subtle: '#d1e7dd',
    info_bg_subtle: '#cff4fc',
    warning_bg_subtle: '#fff3cd',
    danger_bg_subtle: '#f8d7da',
    light_bg_subtle: '#fcfcfd',
    dark_bg_subtle: '#ced4da',
    primary_border_subtle: '#9ec5fe',
    secondary_border_subtle: '#c4c8cb',
    success_border_subtle: '#a3cfbb',
    info_border_subtle: '#9eeaf9',
    warning_border_subtle: '#ffe69c',
    danger_border_subtle: '#f1aeb5',
    light_border_subtle: '#e9ecef',
    dark_border_subtle: '#adb5bd',
    link_color: '#0d6efd',
    link_hover_color: '#0a58ca',
    code_color: '#d63384',
    highlight_color: '#212529',
    highlight_bg: '#fff3cd',
    border_color: '#dee2e6',
    border_color_translucent: 'rgba(0, 0, 0, 0.175)',
    form_valid_color: '#198754',
    form_valid_border_color: '#198754',
    form_invalid_color: '#dc3545',
    form_invalid_border_color: '#dc3545',
  },
  dark: {
    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',
    black: '#000000',
    white: '#ffffff',
    gray: '#6c757d',
    gray_dark: '#343a40',
    gray_100: '#f8f9fa',
    gray_200: '#e9ecef',
    gray_300: '#dee2e6',
    gray_400: '#ced4da',
    gray_500: '#adb5bd',
    gray_600: '#6c757d',
    gray_700: '#495057',
    gray_800: '#343a40',
    gray_900: '#212529',
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#212529',
    body_color: '#dee2e6',
    body_bg: '#212529',
    emphasis_color: '#ffffff',
    secondary_color: 'rgba(222, 226, 230, 0.75)',
    secondary_bg: '#343a40',
    tertiary_color: 'rgba(222, 226, 230, 0.5)',
    tertiary_bg: '#2b3035',
    primary_text_emphasis: '#6ea8fe',
    secondary_text_emphasis: '#a7acb1',
    success_text_emphasis: '#75b798',
    info_text_emphasis: '#6edff6',
    warning_text_emphasis: '#ffda6a',
    danger_text_emphasis: '#ea868f',
    light_text_emphasis: '#f8f9fa',
    dark_text_emphasis: '#dee2e6',
    primary_bg_subtle: '#031633',
    secondary_bg_subtle: '#161719',
    success_bg_subtle: '#051b11',
    info_bg_subtle: '#032830',
    warning_bg_subtle: '#332701',
    danger_bg_subtle: '#2c0b0e',
    light_bg_subtle: '#343a40',
    dark_bg_subtle: '#1a1d20',
    primary_border_subtle: '#084298',
    secondary_border_subtle: '#41464b',
    success_border_subtle: '#0f5132',
    info_border_subtle: '#087990',
    warning_border_subtle: '#997404',
    danger_border_subtle: '#842029',
    light_border_subtle: '#495057',
    dark_border_subtle: '#343a40',
    link_color: '#6ea8fe',
    link_hover_color: '#8bb9fe',
    code_color: '#e685b5',
    highlight_color: '#dee2e6',
    highlight_bg: '#664d03',
    border_color: '#495057',
    border_color_translucent: 'rgba(255, 255, 255, 0.15)',
    form_valid_color: '#75b798',
    form_valid_border_color: '#75b798',
    form_invalid_color: '#ea868f',
    form_invalid_border_color: '#ea868f',
  },
};

type key = keyof (typeof data)[keyof typeof data];

/**
 * Returns a color according to the key and the current scheme.
 *
 * @param key The color key.
 * @returns A color.
 */
const getColor = (key: key) => {
  return data[Appearance.getColorScheme()][key];
};

/**
 * Returns the light color or the dark color according to the respective key and the current scheme.
 *
 * @param lightKey The light color key.
 * @param darkKey The dark color key.
 * @returns A color.
 */
const getEitherColor = (lightKey: key, darkKey: key) => {
  const scheme = Appearance.getColorScheme();

  if (scheme === 'light') {
    return data[scheme][lightKey];
  }

  if (scheme === 'dark') {
    return data[scheme][darkKey];
  }
};

export { getColor, getEitherColor };
