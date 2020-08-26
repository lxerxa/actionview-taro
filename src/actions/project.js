import { asyncFuncCreator } from '@/utils/redux';

export function myIndex(qs) {
  return asyncFuncCreator({
    constant: 'PROJECT_INDEX',
    promise: (client) => client.request({ url: '/myproject' + (qs ? '?' + qs : '') })
  });
}

export function more(qs) {
  return asyncFuncCreator({
    constant: 'PROJECT_MORE',
    promise: (client) => client.request({ url: '/myproject' + (qs ? '?' + qs : '') })
  });
}

export function recents() {
  return asyncFuncCreator({
    constant: 'PROJECT_RECENTS',
    promise: (client) => client.request({ url: '/project/recent' })
  });
}

export function show(key) {
  return asyncFuncCreator({
    constant: 'PROJECT_SHOW',
    promise: (client) => client.request({ url: '/project/' + key, method: 'get' })
  });
}
