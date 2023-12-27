import { apiRepository } from "@/repositories/api.repository";
import { CoinType } from "@/types/coin.type";
import { CreateCoinType, UpdateCoinType } from "@/types/request.type";

export const coinService = {
    getAllCoins: async (): Promise<CoinType[]> => {
        return apiRepository<CoinType[]>('/coin', 'get');
    },
    getCoinById: async (id: string): Promise<CoinType> => {
        return apiRepository<CoinType>(`/coin/${id}`, 'get')
    },
    createCoin: async (coin: CreateCoinType): Promise<CoinType> => {
        return apiRepository<CoinType>('/coins', 'post', coin)
    },
    updateCoin: async (coin: UpdateCoinType): Promise<CoinType> => {
        return apiRepository<CoinType>('/coins', 'put', coin)
    },
    deleteCoin: async (id: number): Promise<CoinType> => {
        return apiRepository<CoinType>(`/coins/${id}`, 'delete')
    }
}