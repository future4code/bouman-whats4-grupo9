import React from 'react';
import './App.css';
import Envio from'./components/Envio/Envio';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userMsg: "",
      userAndMsg: [],
    }
  }

  inputUser = e => {
    this.setState({
      userName: e.target.value,
    })
  }

  inputMsg = e => {
    this.setState({
      userMsg: e.target.value,
    })
  }

 aoClicar = () => {
   const userMensagem = {
     user: this.state.userName,
     mensagem: this.state.userMsg
    }

    const copiaUserMensagem = [...this.state.userAndMsg, userMensagem]
    this.setState ({userAndMsg: copiaUserMensagem})

 }




  render() {
    
    return (
      
      <div className="container-pai">
        <div className="container-msg">
         {this.state.userAndMsg.map(userMensagem => {
           return <Envio nome={userMensagem.user} mensagem={userMensagem.mensagem}/>
         })}
    

        </div>
        <div className="msg-usuario">
          <input placeholder="Usuário" onChange={this.inputUser} value={this.state.userName} />
          <input placeholder="Mensagem" onChange={this.inputMsg} value={this.state.userMsg}/>
          <button onClick={this.aoClicar} > Enviar </button>
        </div>
      </div>
    )
  }
}
export default App;
