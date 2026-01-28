import axiosApi from "./axiosApi";

export const getPosts : () => Promise<any> = () => {
    return axiosApi.get('/posts');
}

export const addPost : (postData: any) => Promise<any> = (postData) => {
    return axiosApi.post('/posts', postData);
}
