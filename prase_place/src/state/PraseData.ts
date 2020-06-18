import { UserData } from './UserData'

export type PraseState = PraseData[]

export type PraseData = {
    praseActionID: number
    praseUser: UserData
    prasedDoActionUser: UserData
    praseMessage: string
    clapData: ClapData
    dateData: string
    clapNumber: number
}

export type ClapData = ClapUser[]

export type ClapUser = {
    doClapUserID: number
    numberOfClap: number
}

