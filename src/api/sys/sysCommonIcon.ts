import request from '@/utils/request';

/**
 * 添加图标信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/sysCommonIcon/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑图标信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/sysCommonIcon/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除图标信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/sysCommonIcon/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除图标信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/sysCommonIcon/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询图标信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/sysCommonIcon/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取图标信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/sysCommonIcon/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取图标信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/sysCommonIcon/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用图标信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/sysCommonIcon/disable',
        method: 'get',
        params: data
    });
}
