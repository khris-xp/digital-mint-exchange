import { apiRepository } from "@/repositories/api.repository";
import { WalletType } from "@/types/wallet.type";

export const walletService = {
    getAllWallets: async () =>
        apiRepository<WalletType[]>('/wallets', 'get'),
    getWalletById: async (id: number) =>
        apiRepository<WalletType>(`/wallets/${id}`, 'get'),
    getWalletByOwnerId: async (owner_id: number) =>
        apiRepository<WalletType[]>(`/wallet/owner/${owner_id}`, 'get'),
    createWallet: async (wallet: WalletType) =>
        apiRepository<WalletType>('/wallets', 'post', wallet),
    updateWallet: async (wallet: WalletType) =>
        apiRepository<WalletType>('/wallets', 'put', wallet),
    deleteWallet: async (id: number) =>
        apiRepository<WalletType>(`/wallets/${id}`, 'delete'),
};