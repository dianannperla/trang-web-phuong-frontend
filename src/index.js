import { createApp } from 'trang-web-phuong';

const app = createApp({
  // Cấu hình ứng dụng
  data() {
    return {
      message: 'Chào mừng bạn đến với Trang Web Phương!'
    };
  }
});

app.mount('#app');