import process from 'node:process';

export const PORT = process.env.PORT || 3000;
export const URL =
  process.env.NODE_ENV === 'DEV'
    ? 'http://localhost:3000'
    : 'https://leap-year.ultirequiem.repl.co';
