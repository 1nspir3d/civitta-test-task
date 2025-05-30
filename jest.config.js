module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
};
