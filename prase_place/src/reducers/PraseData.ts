import { PraseState, PraseData } from '../state/PraseData'
import { PraseAction } from '../actions/Prase/Action'
import { PraseActionTypes } from '../actions/Prase/ActionType'

const initialState: PraseState = []

export default (state = initialState, action: PraseAction): PraseState => {
    var result: PraseState = []
    switch (action.type) {
        case PraseActionTypes.SEND_PRASE_MESSAGE:

            result = [...state]

            result.push(action.payload)
            result.sort((a, b) => {
                return a.praseActionID - b.praseActionID
            })

            return result
        case PraseActionTypes.CLAPP_USER:
            result = [...state]
            const clappedIndex: number = result.findIndex((praseData: PraseData) => {
                const exist: boolean = (praseData.praseActionID === action.payload.praseActionID)
                return exist
            })
            result[clappedIndex] = action.payload
            result.sort((a, b) => {
                return a.praseActionID - b.praseActionID
            })

            return result
        default:
            return state
    }
}