import React, {Component} from "react";
export default class HomePage extends Component<any, any>{
    // public state
    public render() {
        return <div>
            <div id ="Layout">
            <div id ="Sidebar">
                <div id ="SidebarTitle">폴더</div>
                <div id ="List">
                    <div id ="ListItem">
                        {/*<Link to="/memo">메모</Link>*/}
                    </div>
                    <div>
                        {/*<Link to="/trash">휴지통</Link>*/}
                    </div>
                </div>
            </div>
            <div id ="Main">
                <div style={{
                    margin: '10px'
                }}><div id="AddMemoBtn" /></div>
            </div>
        </div>
        </div>
    }
}



