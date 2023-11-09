import { Data } from './data'

/**
 * 11.2.1 전역 변수
 */
declare const version: string

/**
 * 11.2.3 전역 확장
 */
declare global {
  const globallyDeclared: Data
}

declare const locallyDeclared: Data
declare interface IlocallyDeclared {}
