import { Data } from './types/data'
import { version } from './types/globals'
import { Character } from './types/types'

/**
 * 11.1 선언파일
 */
export const character: Character = {
  catchphrase: 'Yee',
  name: 'Sandy',
}

/**
 * 11.2 런타임 값 선언
 */
declare const myGlobalValue: string
console.log(myGlobalValue)

/**
 * 11.2.1 전역변수
 */
export function logVersion() {
  console.log(`Version: ${version}`)
}

/**
 * 11.2.2 전역 인터페이스 병합
 */
export function logWindowVersion() {
  console.log(`myVersion: ${window.myVersion}`)
  window.alert('hi')
}

/**
 * 11.2.3 전역 확장
 */
const gd: typeof globallyDeclared = {
  version: 'global-1',
}

const ld: typeof locallyDeclared = {
  version: 'local-1',
}

function logData(data: Data) {
  console.log(`Data version is: ${data.version}`)
}

logData(gd)
logData(ld)

console.log()
Storage
