import { COLORCHANGED, STATUSCHANGED } from "./actionsType"

export const colorchanged=(color, changeType)=>{
    return{
        type: COLORCHANGED,
        payload: {
            color, 
            changeType
        }
    }
}

export const statusChanged=(status)=>{
    return{
        type: STATUSCHANGED,
        payload: status
    }
}