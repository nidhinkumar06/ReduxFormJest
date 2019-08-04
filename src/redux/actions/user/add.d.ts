export interface UserData {
    userAddress: string;
    userAge: number;
    userBankName: string;
    userDOB: string;
    userGender: string;
    userMobileNumber: string;
    userName: string;
    useraccountNumber: string;
    userbankAddress: string;
}

export interface UserState {
    data: UserData[];
}

export interface UserAction {
    type: string;
    payload: any;
}

export type UserTypes = UserAction;