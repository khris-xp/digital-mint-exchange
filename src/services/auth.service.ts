import { apiRepository } from "@/repositories/api.repository";
import { authRepository } from "@/repositories/auth.repository";
import { AuthResponseType } from "@/types/auth.type";
import { LoginType, RegisterType } from "@/types/request.type";
import { UserType } from "@/types/user.type";

export const authService = {
    login: async (loginRequest: LoginType) =>
        authRepository<AuthResponseType>('/auth/sign-in', 'post', loginRequest),
    register: async (registerRequest: RegisterType) =>
        authRepository<AuthResponseType>('/auth/sign-up', 'post', registerRequest),
    getUserProfile: async () =>
        apiRepository<UserType>('/auth/profile', 'get'),
};