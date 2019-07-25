import axios from 'axios';
import Loading from '~/utils/loading';
// import qs from 'qs';
// import swal from "sweetalert2";

let apiPath = process.env.apiHost;
// let gameApiPath = '';

axios.defaults.baseURL = apiPath;
// axios.defaults.url = '/';
//application/json
//application/x-www-form-urlencoded
//multipart/form-data
//application/json;charset=utf-8
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.timeout = 30000; // 30*1000
// axios.defaults.transformRequest = [function (data, headers) {
//     for (const key in data) {
//         if (Array.isArray(data[key])) {
//             data[key] = JSON.stringify(data[key]);
//             console.log(data[key])
//         }
//     }
//     //
//     data = qs.stringify(data);
    // return data;
// }]

// axios.interceptors.response.use(res => {
    // let maintainHint = store.state.ajax.maintainHint;
    // switch (res.data.maintain) {
    //     case GameMaintain.Nothing:
    //         break;
    //     case GameMaintain.Hint:
    //         if(maintainHint !== true) {
    //             store.commit("ajax/setMaintainHint", true, { root: true });
    //             store.dispatch("game/showTip", { message: "伺服器將進入維護", safe: true, duration: 5000 }, { root: true });
    //         }
    //         break;
    //     case GameMaintain.Kick:
    //     case GameMaintain.Close:
    //         store.dispatch("ajax/maintainKick", {}, { root: true });
    //         break;
    // }
//     return res;
// },
//     err => {
//           if(err.response.data.data === "token is not found" || err.response.data.data === "token is not avalible") {
//             swal({
//                 title: err.response.data.data,
//                 buttonsStyling: false,
//                 type: "warning",
//                 confirmButtonClass: "md-button md-success",
//                 timer: 2000
//               }).then(function() {
//                 window.location.replace("/");
//               });
//           }
//           else {
//             swal({
//                 title: err.response.data.data,
//                 buttonsStyling: false,
//                 type: "warning",
//                 confirmButtonClass: "md-button md-success",
//                 timer: 2000
//               });
//           }
        // return err;
//     }
// );
const getJSON = (args) => {
    args.headers['Content-Type'] = 'application/json';
    args.method = 'GET';
    return args;
}

const putJSON = (args) => {
    args.headers['Content-Type'] = 'application/json';
    args.method = 'PUT';
    return args;
}

const postJSON = (args) => {
    args.headers['Content-Type'] = 'application/json';
    args.method = 'POST';
    return args;
}

const build = (args) => {
    if (args.loading === undefined || args.loading) {
        Loading.show();
    }
    let promise = new Promise((resolve, reject) => {
        axios(args).then(res => {
            resolve(res.data);
            Loading.hide();
        }).catch(err => {
            reject(err);
            Loading.hide();
        });
    });
    promise.ajaxArgs = args;
    return promise;
}

export default {
    get: (url, args) => build(getJSON(url, args)),
    put: (url, args) => build(putJSON(url, args)),
    post: (url, args) => build(postJSON(url, args))
}