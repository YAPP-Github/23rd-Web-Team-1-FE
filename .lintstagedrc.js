module.exports = {
  '*.{ts,tsx,js,jsx}': () => 'yarn eslint --fix',
  'services/src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit -p tsconfig.json',
};
