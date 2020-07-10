import React,{useReducer} from "react";

type Action = { type : 'INCREASE'}|{type:'DECREASE'}//타입은 객체(JSON)으로 정의된다.
function reducer( state: number, action: Action){//() 안에 있는 건 순수함수이다. 고차함수일경우 property로 함수를 내보내야한다.
    switch (action.type) {
        case "INCREASE": return state + 1
        case "DECREASE": return state - 1
        default: throw new Error("unhanced action")
    }
}
const AdvancedCounter: React.FC = () =>{// ()는 property가들어온다, state가 없다.
    const  [ count, dispatch] = useReducer(reducer,0)
    const  onIncrease = () => dispatch({type: "INCREASE"})
    const  onDecrease = () => dispatch({type: "DECREASE"})
    return <div>
        <h1>{count}</h1>
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    </div>
}
export default AdvancedCounter








