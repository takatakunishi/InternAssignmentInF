import { ActionType } from 'typesafe-actions'
import * as ActionCreater from './ActionCreater'

export type PraseAction = ActionType<typeof ActionCreater>
