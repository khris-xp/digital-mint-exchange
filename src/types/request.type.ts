export type LoginType = {
    email: string;
    password: string;
};

export type RegisterType = {
    username: string;
    email: string;
    password: string;
};

export type CreateWalletType = {
    coin_id: string;
    amount: number;
}

export type UpdateWalletType = {
    coin_id: string;
    amount: number;
}

export type SellWalletType = {
    coin_id: string;
    amount: number;
}

export type TransferWalletType = {
    coin_id: string;
    amount: number;
    transfer_id: string;
}

export type CreateCoinType = {
    name: string;
    image: string;
    max_supply: number;
    rate: number;
}

export type UpdateCoinType = {
    name: string;
    image: string;
    max_supply: number;
    rate: number;
}

export type AddTokenType = {
    token: number;
}