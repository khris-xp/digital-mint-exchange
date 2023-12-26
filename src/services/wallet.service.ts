import { apiRepository } from "@/repositories/api.repository";
import { CreateWalletType, SellWalletType, TransferWalletType, UpdateWalletType } from "@/types/request.type";
import { WalletType } from "@/types/wallet.type";

export const walletService = {
    getAllWallets: async (): Promise<WalletType[]> => {
        return apiRepository<WalletType[]>('/wallets', 'get')
    },
    getWalletById: async (id: number): Promise<WalletType> => {
        return apiRepository<WalletType>(`/wallets/${id}`, 'get');
    },
    getWalletByOwnerId: async (owner_id: number): Promise<WalletType[]> => {
        return apiRepository<WalletType[]>(`/wallet/owner/${owner_id}`, 'get')
    },
    createWallet: async (wallet: CreateWalletType): Promise<WalletType> => {
        return apiRepository<WalletType>('/wallet', 'post', wallet)
    },
    updateWallet: async (wallet: UpdateWalletType): Promise<WalletType> => {
        return apiRepository<WalletType>('/wallets', 'put', wallet)
    },
    deleteWallet: async (id: number): Promise<WalletType> => {
        return apiRepository<WalletType>(`/wallets/${id}`, 'delete')
    },
    sellWallet: async (wallet: SellWalletType): Promise<WalletType> => {
        return apiRepository<WalletType>('/wallet/sell', 'post', wallet)
    },
    tradeWallet: async (wallet: TransferWalletType): Promise<WalletType> => {
        return apiRepository<WalletType>('/wallet/transfer', 'post', wallet)
    }
};