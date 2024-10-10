const arr = []

export  const myReducer = (state=arr,action)=>{
    if (action.type==="ADD") {
        return state=[
            ...state,
            {...action.payload,quantity:1}
        ]
    }

    if (action.type==="INC") {
        return state.map((item,index)=>
        index === action.index ? {...item,quantity:item.quantity+1} : item
        )
    }

    if (action.type==="DEC") {
        return state.map((item,index)=>
            index === action.index && item.quantity > 1 ? {...item,quantity:item.quantity - 1} : item    
        )
    }

    if (action.type==="DELETE") {
        const newData = [...state]
        newData.splice(action.payload,1)
        state=newData
    }
    return state
}
