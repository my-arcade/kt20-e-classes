module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  roots: ["<rootDir>/src"],
  globals: {
    "ts-jest": { UseBabelrc: true },
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(roots/.*|(\\.|/)(test))\\.(ts|tsx)?$",
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageReporters: ["html", "json", "lcov", "text", "clover"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*interfaces.d.ts",
    "!src/**/theme/*",
    "!src/**/*stories.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 65,
    },
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
