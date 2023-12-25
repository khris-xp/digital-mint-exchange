import axiosInstance from "@/services/api.service";
import { AddTokenType, CreateCoinType, CreateWalletType, SellWalletType, TransferWalletType, UpdateCoinType, UpdateWalletType } from "@/types/request.type";

export async function apiRepository<T>(
    url: string,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    data?: CreateWalletType | SellWalletType | TransferWalletType | UpdateWalletType | CreateCoinType | UpdateCoinType | AddTokenType): Promise<T> {
    try {
        const response = await axiosInstance.request({ url, method, data });
        return response.data;
    } catch (error) {
        const message = (error as Error).message;
        throw new Error(message);
    }
}