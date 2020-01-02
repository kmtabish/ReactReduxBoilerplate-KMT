import React from 'react';
import { connect } from 'react-redux'
import { mainClick } from './action'

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    onClick = () => {
        console.log("This is test")
        this.props.dispatch(mainClick())
    }

    render(){
        console.log("This is test", this.props)
        return(
            <React.Fragment>
                    <h1 className="title">This is test Area</h1>
                    <a onClick={()=>this.onClick()}>Click Here to perfrom action</a>
                    {this.props.test  && <span>{this.props.test}</span>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
     main: state.main
    }
}
export default connect(mapStateToProps)(Main)