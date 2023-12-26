import { apiRepository } from "@/repositories/api.repository";
import { CreateWalletType, SellWalletType, TransferWalletType, UpdateWalletType } from "@/types/request.type";
import { WalletType } from "@/types/wallet.type";

export const walletService = {
    getAllWallets: async () =>
        apiRepository<WalletType[]>('/wallets', 'get'),
    getWalletById: async (id: number) =>
        apiRepository<WalletType>(`/wallets/${id}`, 'get'),
    getWalletByOwnerId: async (owner_id: number) =>
        apiRepository<WalletType[]>(`/wallet/owner/${owner_id}`, 'get'),
    createWallet: async (wallet: CreateWalletType) =>
        apiRepository<WalletType>('/wallet', 'post', wallet),
    updateWallet: async (wallet: UpdateWalletType) =>
        apiRepository<WalletType>('/wallets', 'put', wallet),
    deleteWallet: async (id: number) =>
        apiRepository<WalletType>(`/wallets/${id}`, 'delete'),
    sellWallet: async (wallet: SellWalletType) => 
        apiRepository<WalletType>('/wallet/sell', 'post', wallet),
    tradeWallet: async (wallet: TransferWalletType) => 
        apiRepository<WalletType>('/wallet/transfer', 'post', wallet),
};