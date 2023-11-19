module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'path/to/your/tsconfig.json', // Caminho para o seu arquivo tsconfig.json
    },
  },
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/__mocks__/svgMock.js',
    '^@react-navigation/material-top-tabs$': '<rootDir>/__mocks__/@react-navigation/material-top-tabs.js',
  },
};
