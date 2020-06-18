import { PraseActionTypes } from './ActionType'
import { createAction } from 'typesafe-actions'
import { PraseData } from '../../state/PraseData'

export const sendPraseAction = createAction(
    PraseActionTypes.SEND_PRASE_MESSAGE,
    (praseData: PraseData) => praseData,
)();

export const clappUserAction = createAction(
    PraseActionTypes.CLAPP_USER,
    (praseData: PraseData) => praseData,
)();
