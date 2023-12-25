import { apiRepository } from "@/repositories/api.repository";
import { CoinType } from "@/types/coin.type";

export const coinService = {
    getAllCoins: async () => apiRepository<CoinType[]>('/coins', 'get'),
    getCoinById: async (id: string) => apiRepository<CoinType>(`/coin/${id}`, 'get'),
    createCoin: async (coin: CoinType) => apiRepository<CoinType>('/coins', 'post', coin),
    updateCoin: async (coin: CoinType) => apiRepository<CoinType>('/coins', 'put', coin),
    deleteCoin: async (id: number) => apiRepository<CoinType>(`/coins/${id}`, 'delete'),
}