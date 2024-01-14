import { COLORCHANGED, STATUSCHANGED } from "./actionsType"

export const colorchanged=(color, changeType)=>{
    return{
        typre: COLORCHANGED,
        payload: {
            color, 
            changeType
        }
    }
}

export const statusChanged=(status)=>{
    return{
        typre: STATUSCHANGED,
        payload: status
    }
}