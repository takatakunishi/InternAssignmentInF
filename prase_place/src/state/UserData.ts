export type UserData = {
    userid: number,
    name: string,
    clapped: number,
    enableClap: number,
    imageurl: string
}

export type Users = UserData[]

export type UserState = {
    users: Users,
    mainUser: UserData,
    prasedUser: UserData
}

export type AboutClapActionUser = {
    clappUserID: number
    prasedUserID: number
    doPraseActionUserID: number
}