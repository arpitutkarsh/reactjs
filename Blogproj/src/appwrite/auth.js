import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";  //this line is from Appwrite documentation
import { nanoid } from "@reduxjs/toolkit";
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
            if(userAccount){
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        } 
        catch (error) {
            console.log(`Error Creating new Account, Wait for Sometime while we resolve this errr: ${error}`);
            alert('We are experiencing some issues, please try again later');
        }
    }

    async phone({email, phone}){
        try{
            return await this.account.createPhoneToken(email, phone);
        }
        catch(error){
            console.log(`Error creating phone token: ${error}`);
            alert('We are experiencing some issues, please try again later');
        }
        return this.loginusingPhone
    }
    
    async loginusingPhone({email, SECRET}){
        try{
            return await this.account.createSession((createPhoneToken(email,password)), SECRET);
            
        }
        catch(error){
            console.log(`Error Logging in using phone: ${error}`);
            alert('We are experiencing some issues, please try again later');
        }
        
    }

    

    

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } 
        catch (error) {
           console.log(`Error Logging in try again: ${error}`);
           alert("Unable to login, please try again later");
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } 
        catch (error) {
            console.log(`Unable to get current user! Resolve Error Info: ${error}`);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
            alert("Logged out successfully")
        } catch (error) {
            console.log(`Error Logging out: ${error}`);
            alert("Unable to logout, please try again later");
        }
    }
}
const authService = new AuthService(); //as we have used new keyword it is obvious that authService is an object of AuthService class and we can now create constructor in AuthService class
export default authService;

