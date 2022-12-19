import request from '@/utils/request';

/**
 * 添加用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/sysUser/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/sysUser/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/sysUser/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/sysUser/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/sysUser/find_id',
        method: 'get',
        params: data,
    });
}
/**
 * 获取当前用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function getUserInfo() {
    return request({
        url: '/sysUser/getUserInfo',
        method: 'get',
    });
}

/**
 * 获取用户信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/sysUser/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取用户信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/sysUser/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/sysUser/disable',
        method: 'get',
        params: data
    });
}
