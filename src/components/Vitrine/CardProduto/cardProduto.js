import React from 'react';
import "./cardProduto.scss";

class CardProduto extends React.Component {
   state = {
      produtos: []
   };

   componentDidMount() {
      fetch('https://corebiz-test.herokuapp.com/api/v1/products')
         .then(res => res.json())
         .then(res => {
            this.setState({
               produtos: res,
            });
         });
   }


   //     productId
   //     productName
   //     imageUrl
   //     listPrice
   //     price
   //     installments": [
   //       {
   //         "quantity": 9,
   //         "value": 2887
   //       }


   render() {
      return (
         <div id="Produto" className="produto">
            {this.state.produtos.map(item => (
               <div key={item.productId} className="card">
                  <img className="imagem-produto" src={item.imageUrl} alt="" />
                  <h1 className="nome-produto">{item.productName}</h1>
                  <span className="estrelas">{item.stars}</span>
                  <p className="preco-antigo">de R${item.listPrice}</p>
                  <h2 className="preco-atual">por R$ {item.price}</h2>
                  <p>ou em 4x de R$ 14,99</p>
               </div>
            ))}
            {/* <ul>
                    {this.state.produtos.map(item => (
                        <li key={item.productId}>
                            <p><b>Nome:</b> {item.productName}</p>
                            <p><b>Criador:</b> {item.listPrice}</p>
                            <p><b>Ano de criação:</b> {item.price}</p>
                            <img src={item.imageUrl} alt=""/>
                        </li>
                    ))}
                </ul> */}
         </div>
      );
   }
}

export default CardProduto;