import React , {Components} from 'react';

class ErrorBoundary extends Components{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    ComponentDidCatch(error,info){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <h1>Ooooops! This is not good!!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;