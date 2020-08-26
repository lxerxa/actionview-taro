import { asyncFuncCreator } from '@/utils/redux';

export function index(key, qs) {
  return asyncFuncCreator({
    constant: 'ISSUE_INDEX',
    promise: (client) => client.request({ url: '/project/' + key + '/issue' + (qs ? '?' + qs : '') })
  });
}

export function create(key, values) {
  return asyncFuncCreator({
    constant: 'ISSUE_CREATE',
    promise: (client) => client.request({ url: '/project/' + key + '/issue', method: 'post', data: values })
  });
}

export function edit(key, id, values) {
  return asyncFuncCreator({
    constant: 'ISSUE_EDIT',
    promise: (client) => client.request({ url: '/project/' + key + '/issue/' + id, method: 'put', data: values })
  });
}

export function getOptions(key) {
  return asyncFuncCreator({
    constant: 'ISSUE_OPTIONS',
    promise: (client) => client.request({ url: '/project/' + key + '/issue/options' })
  });
}

export function show(key, id, floatStyle) {
  return asyncFuncCreator({
    constant: 'ISSUE_SHOW',
    id,
    floatStyle,
    promise: (client) => client.request({ url: '/project/' + key + '/issue/' + id })
  });
}

export function del(key, id) {
  return asyncFuncCreator({
    constant: 'ISSUE_DELETE',
    id,
    promise: (client) => client.request({ url: '/project/' + key + '/issue/' + id, method: 'delete' })
  });
}
