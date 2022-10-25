import { http } from '@/utils/http';

// 真实接口
function fetchDemo() {
  return http.httpGet('/api/room/room/getRoomList?pageNo=1&pageSize=3')
}

export {
    fetchDemo,
}