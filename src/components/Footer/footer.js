import React from 'react';
import "./footer.scss";


// Imagens
import logoBranco from './images/logo-corebiz-white.svg';
import logoVtex from './images/logo-vtex.svg'
import mail from './images/mail.svg'
import headphone from './images/headphone.svg'



class Footer extends React.Component {
   render() {
      return (
         <footer id="Footer">
            <div className="container footer">
               <div className="row">
                  <div className="localizacao col-md-4">
                     <h3>Localização</h3>
                     <div className="separador"></div>
                     <div className="texto">
                        <p>Rua Ifigênia Maria de Oliveira 3793</p>
                        <p>Jd. Piratininga - 14403-583</p>
                        <p>Franca SP, Brasil</p>
                        <p>contato@clickqi.com.br</p>
                        <p>+55 16 3713-6985</p>
                     </div>
                  </div>
                  <div className="buttons-contato col-md-4">
                     <button>
                        <img src={mail} alt="" />
                        <p>ENTRE EM CONTATO</p>
                     </button>
                     <button>
                        <img src={headphone} alt="" />
                        <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
                     </button>
                  </div>
                  <div className="atribuicao col-md-4">
                     <div className="created">
                        <p>Created by</p>
                        <img src={logoBranco} alt="Logo Corebiz" />
                     </div>
                     <div className="powered">
                        <p>Powered by</p>
                        <img src={logoVtex} alt="Logo Vtex" />
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      );
   }
}

export default Footer;
