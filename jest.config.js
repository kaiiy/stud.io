/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: "node",
  verbose: true,
  testMatch: ["**/*.test.ts"],
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "@swc/jest",
  },
  roots: ["<rootDir>/tests", "<rootDir>/assets/ts"],
};
