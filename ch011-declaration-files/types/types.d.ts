export interface Character {
  catchphrase?: string
  name: string
}

/**
 * 11.2 런타임 값 선언
 */
declare let declared: string // OK
declare let initializer: string = 'Wanda' // Initializers are not allowed in ambient contexts.ts(1039)

declare function declaredF(a: string): boolean // ok
declare function declaredE(a: string) {
  return true
} // An implementation cannot be declared in ambient contexts.ts(1183)

declare class DeclaredC {
  f(a: string): boolean // ok
  e(a: string) {
    // An implementation cannot be declared in ambient contexts.ts(1183)
    return true
  }
}

/**
 * 11.2 런타임 값 선언
 */
interface Writer {}
declare interface Writer2 {}

declare const fullName: string
declare const firstName: 'Liz'

const lastName = 'Lemon'
