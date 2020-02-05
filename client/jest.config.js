module.exports = {
  //preset: '@vue/cli-plugin-unit-jest'
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: ['**/tests/**/*.spec.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
