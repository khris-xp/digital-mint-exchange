import axiosInstance from '@/services/api.service';
import { LoginType, RegisterType } from '@/types/request.type';
import Cookies from 'js-cookie';

export async function authRepository<T>(
    url: string,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    data?: LoginType | RegisterType
): Promise<T> {
    try {
        const response = await axiosInstance.request({ url, method, data });
        const token = response.data.access_token;
        Cookies.set('token', token);
        return response.data;
    } catch (error) {
        const message = (error as Error).message;
        throw new Error(message);
    }
}