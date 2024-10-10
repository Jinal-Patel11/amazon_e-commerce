export const myAction=(payload)=>{
    return{
        type:"ADD",
        payload
    }
}

 export const deleteAction=(payload)=>{
        return{
            type:"DELETE",
            payload
        }
    }

export const increase=(index)=>{
    return{
        type:"INC",
        index
    }
}

export const decrease=(index)=>{
    return{
        type:"DEC",
        index
    }
}