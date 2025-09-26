import type { User } from "./apiTypes";

export interface RegisterRequestData {
    email: string;
    password: string;
    fullName: string;
    phoneNumber?: string;
    address?: string;
}

export interface RegisterResponse {
    user: User;
    refresh: string;
    access: string;
}

export interface UserUpdateData {
    name?: string;
    profile?: {
        phone_number?: string;
        address?: string;
        bio?: string;
    };
}