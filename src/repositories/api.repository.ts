import axiosInstance from "@/services/api.service";

export async function apiRepository<T>(
    url: string,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    data?: null): Promise<T> {
    try {
        const response = await axiosInstance.request({ url, method, data });
        return response.data;
    } catch (error) {
        const message = (error as Error).message;
        throw new Error(message);
    }
}