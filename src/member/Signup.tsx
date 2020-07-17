import React, { useState} from 'react';
import {MDBBtn} from "mdbreact";
/*Commands*/ // login참고) 액션하고 리듀서를 연결하는 것을 말함.
const signupConstants = {
    SIGNUP_REQUEST: "USER_SIGNUP_REQUEST",
    SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
    SIGNUP_FAULURE: 'USER_SIGNUP_FAILURE'
                //**삼총사**
}
/*Reducers*/ //switch case가 있는 것이 특징. data state(외부에서 들어온 값)은 payload라 한다.
function signUpReducer(payload, userActions) {
    switch (userActions) {
        case signupConstants.SIGNUP_REQUEST:
            return{
                signUp:true,
                user: userActions.user
            }
        case signupConstants.SIGNUP_SUCCESS:
            return {
                signUp: true,
                user:userActions.user
            }
        case signupConstants.SIGNUP_FAULURE:
            return {
                signUp: true,
                user: userActions.user
            }
    }
}
/*Actions*/
const signupActions = {

}
function signUp(e) {
    return dispath =>{
        
    }
}

/*Thunk*/
function signUpService() {
    const userid = ''
    const password = ''
    const name = ''
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password,name})
    }
    return fetch(``)
        .then()
}

/*Component*/

const Signup = () => {
    const [userid, setUserid] = useState("")
    const [password, setpassword] = useState("")
    const [name, setName] = useState("")

    return (<div>
        <h1>Sign Up</h1>
        <form name="form">
            <div className="container">
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="userid" onChange={e=>setUserid(e.target.value)}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" onChange={e=>setpassword(e.target.value)} />

                <label htmlFor="psw-repeat"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" onChange={e=>setName(e.target.value)}/>

                <label>
                    <input type="checkbox" name="remember" />
                </label>

                <p>By creating an account you agree to our <a href="#">Terms
                    & Privacy</a>.</p>

                <div className="clearfix">
                    <MDBBtn onClick={signUp} className={"button3"}>Cancel</MDBBtn>
                    <MDBBtn onClick={signUp} className={"button3"}>Sign Up</MDBBtn>
                </div>
            </div>
        </form>
    </div>)
}

export default Signup;
