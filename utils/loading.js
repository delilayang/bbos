import { Loading } from 'element-ui';

let loadingCount = 0;
let loading;

const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    pinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
};

const endLoading = () => {
  loading.close();
};

const showLoading = () => {
  if (loadingCount === 0) {
    startLoading();
  }
  loadingCount += 1;
};

const hideLoading = () => {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    endLoading();
  }
};

export default {
  show: () => showLoading(),
  hide: () => hideLoading()
}