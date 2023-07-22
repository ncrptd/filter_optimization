// jest.config.js
module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest', // Add this line to support vite
    },
    transformIgnorePatterns: [
        '/node_modules/(?!@foo/bar)/' // Modify this pattern to include your necessary modules
    ],
};
