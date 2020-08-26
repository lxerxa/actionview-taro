import { asyncFuncCreator } from '@/utils/redux';

export const add = () => {
  return {
    type: 'ADD'
  }
}
export const minus = () => {
  return {
    type: 'MINUS'
  }
}

export function test() {
  return asyncFuncCreator({
    constant: 'TEST',
    promise: (client) => client.request({ url: '/session', method: 'get' })
  });
}
