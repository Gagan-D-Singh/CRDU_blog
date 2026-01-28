import axiosApi from "./axiosApi";

export const getPosts : () => Promise<any> = () => {
    return axiosApi.get('/posts');
}
