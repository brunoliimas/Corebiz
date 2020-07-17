import React from 'react';
import axios from 'axios';


import "./newsletter.scss";

// Imagens


class Newsletter extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         name: '',
         email: '',
      }
   }

handleChange = (e) => {
   this.setState({[e.target.name]: e.target.value})
}

handleSubmit = e => {
   e.preventDefault()
   console.log(this.state)
   axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', this.state)
   .then(response => {
      console.log("Feito")
   })
   .catch(error => {
      console.log(error)
   })
}

   render() {
      const { name, email } = this.state

      return (
         <div id="Newsletter">
            <div className="container newsletter">
               <h2>
                  Participe de nossas news com promoções e novidades!
            </h2>
               <form onSubmit={this.handleSubmit} className="cadastro" action="">
                  <input
                     placeholder="Digite seu nome"
                     type="text"
                     name="name"
                     value={name}
                     onChange={this.handleChange}
                  />
                  <input
                     placeholder="Digite seu email"
                     type="email"
                     name="email"
                     value={email}
                     onChange={this.handleChange}
                  />
                  <button
                     type="submit">
                     Eu quero!
                     </button>
               </form>
            </div>
         </div>
      );
   }
}




export default Newsletter;
