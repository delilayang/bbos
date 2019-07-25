import handler from "./restful-service";
import { getData } from 'nuxt-storage/local-storage';
import { handleStatus } from './httpStatus400';

export default {

    /* login
     * @param account 帳號 (String)
     * @param password 密碼 (String)
     * @param device_info 裝置資訊 (Object) { "os": "mac", "os_version": "10", "device_token": "test_device", ...}
     * @param login_detail 登入資訊 (Object) { "city": "taipei", ...}
     */
    login: (data) => handler.post({
        url: '/v1/member/login',
        headers: {},
        data,
    }),

    logout: () => handler.post({
        url: '/v1/member/logout',
        headers: {
            'Authorization': getData("token"),
        },
    }).catch(err => {
        handleStatus(err);
        throw err;
    }),

    autoLogin: () => handler.get({
        url: '/v1/member/autoLogin',
        headers: {
            'Authorization': getData("token"),
        },
    }),

    /* register
     * @param account 帳號 (String)
     */
    register: (data) => handler.post({
        url: '/v1/member',
        headers: {},
        data,
    }),

    /* update password
     * @param old_password 舊密碼 (String)
     * @param new_password 新密碼 (String)
     */
    updatePassword: (data) => handler.post({
        url: '/v1/member/update_password',
        headers: {
            'Authorization': getData("token"),
        },
        data,
    }),

    /* reset password
     * @param account 信箱 (String)
     */
    resetPassword: (data) => handler.post({
        url: '/v1/member/reset_password',
        headers: {},
        data,
    }),

}
