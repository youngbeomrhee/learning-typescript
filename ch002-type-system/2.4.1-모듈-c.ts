import { shared } from './2.4.1-모듈-a'
// alias를 지정해서 충돌을 피할 수 있다
import { shared as aShared } from './2.4.1-모듈-a'
console.log(aShared)
export const shared = 'Cher'
