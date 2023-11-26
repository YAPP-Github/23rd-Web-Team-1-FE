module.exports = {
  '*.{ts,tsx,js,jsx}': () => 'yarn eslint --fix',
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit -p tsconfig.json',
};
