import React from 'react';
import { connect } from 'react-redux'

class About extends React.Component{
    constructor(props){
        super(props);
    }

    onClick = () => {
        console.log("This is test", this.props)
        // this.props.dispatch(loginClick())
    }

    render(){
        return(
            <React.Fragment>
                    <h1 className="title">This is About Area</h1>
                    <a onClick={()=>this.onClick()}>Click Here to perfrom action</a>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
     main: state.main
    }
}
export default connect(mapStateToProps)(About)