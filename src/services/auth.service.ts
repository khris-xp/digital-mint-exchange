import { apiRepository } from "@/repositories/api.repository";
import { authRepository } from "@/repositories/auth.repository";
import { AuthResponseType } from "@/types/auth.type";
import { AddTokenType, LoginType, RegisterType } from "@/types/request.type";
import { UserType } from "@/types/user.type";

export const authService = {
    login: async (loginRequest: LoginType): Promise<AuthResponseType> => {
        return authRepository<AuthResponseType>('/auth/sign-in', 'post', loginRequest);
    },
    register: async (registerRequest: RegisterType): Promise<AuthResponseType> => {
        return authRepository<AuthResponseType>('/auth/sign-up', 'post', registerRequest);
    },
    getUserProfile: async (): Promise<UserType> => {
        return apiRepository<UserType>('/auth/profile', 'get');
    },
    getAllUsers: async (): Promise<UserType[]> => {
        return apiRepository<UserType[]>('/auth/users', 'get');
    },
    addToken: async (token: AddTokenType): Promise<UserType> => {
        return apiRepository<UserType>('/auth/add-token', 'put', token);
    }
};