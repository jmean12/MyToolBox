const url = 'https://localhost/3000'

const instance : AxiosInstance = axios.create({
    baseURL: `${url}`,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    
})

// jwt토큰 인증시
instance.interceptors.request.use((config) => {
    const accessToken = cookies.get("accessToken");
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return config;
  });

//요청 타임 아웃 설정
instance.defaults.timeout = 2500;


export const userApi = {
    // ex module    
    get: () => instance.get('/'),
    post: (data) => instance.post('/', data),
    put: () => instance.put('/'),
    delete: () => instance.delete('/'),
}