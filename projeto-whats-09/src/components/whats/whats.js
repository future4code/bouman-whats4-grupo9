import React from 'react';
import "./whats.css" ;



class Whats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            userMsg: ""

        }
    }
    

    aoEnviar = () => {
        this.setState({
            
        })
    }




    render(){
   
        return(
    
    <div>
        
    <input placeholder="User" />
    <input placeholder="MSG" />
    <button>Enviar</button>
    
    </div>

        );
}


}







export default Whats