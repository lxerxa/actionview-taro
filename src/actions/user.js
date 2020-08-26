import { asyncFuncCreator } from '@/utils/redux';

export function login(values) {
  return asyncFuncCreator({
    constant: 'USER_LOGIN',
    promise: (client) => client.request({ url: '/user/login', method: 'post', data: values })
  });
}
