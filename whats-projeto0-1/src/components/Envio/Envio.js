import React from 'react';
import './Envio.css';




class Envio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userNameShow: props.user,
            mensagem: props.mensagem
        }
    }


    render () {
        return (
            <div>
    <p>{this.state.user}{this.state.mensagem}</p>

            </div>
        )
    }



}



export default Envio