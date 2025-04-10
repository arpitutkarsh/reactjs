import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";  //this line is from Appwrite documentation

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        //it is possible that this signup process may fail so we use try catch block
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(useerAccount){
                return userAccount;
            }
            else{
                return userAccount;
            }
        } 
        catch (error) {
            console.log(`Error Creating new Account: ${error}`);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } 
        catch (error) {
           console.log(`Error Logging in: ${error}`);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } 
        catch (error) {
            console.log(`Unable to get current user! Error Info: ${error}`);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log(`Error Logging out: ${error}`);
        }
    }



}
const authService = new AuthService(); //as we have used new keyword it is obvious that authService is an object of AuthService class and we can now create constructor in AuthService class
export default authService;

