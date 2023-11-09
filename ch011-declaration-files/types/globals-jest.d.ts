import jest from './jest-mocking'

declare global {
  const describe: typeof jest.describe
  const it: typeof jest.it
}
