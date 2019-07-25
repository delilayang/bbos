import { clear } from 'nuxt-storage/local-storage';
import { MessageBox } from 'element-ui'

const redirectby401 = () => {
  clear();
  window.location.assign("/");
}

export const handleStatus = (err) => {
  if (err.response.status === 401) {
    setTimeout(() => {
      redirectby401();
    }, 5000);
    MessageBox.alert("請重新登入", "連線逾時", {
      confirmButtonText: '確定',
      callback: action => {
        redirectby401();
      }
    });
    
  }
}