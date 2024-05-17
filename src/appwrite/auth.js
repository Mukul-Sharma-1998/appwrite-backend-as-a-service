import config from "../config/config";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    acconunt;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        
        this.acconunt = new Account(this.client);
    }

    async createAccount({email, password, username}){
        try {
            const userAccount = await this.acconunt.create(ID.unique(), email, password, username);
            if (userAccount) {
                // if account is successfully created and login the user. So call login
                return this.login({email, password})

            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.acconunt.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {

        try {
            return await this.acconunt.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.acconunt.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}


const authService = new AuthService(); 

export default authService