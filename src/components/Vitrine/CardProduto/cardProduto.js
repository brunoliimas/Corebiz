import React from 'react';
import "./cardProduto.scss";
import Axios from 'axios';

class CardProduto extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         products: []
      }
   }



   componentDidMount() {
      Axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
         .then(response => {
            // console.log(response)
            this.setState({ products: response.data })
         })
         .catch(error => {
            console.log(error)
         })
   }


   render() {

      const { products } = this.state
      return (
         <div id="Produto" className="produto">
            {
               products.length ?
                  products.map(product =>
                     <div key={product.productId} className="card">
                        <img className="imagem-produto" src={product.imageUrl} alt="" />

                        <h1 className="nome-produto">{product.productName}</h1>

                        <span className="estrelas">{product.stars}</span>

                        <p className="preco-antigo">de R${product.listPrice}</p>

                        <h2 className="preco-atual">por R$ {product.price}</h2>

                        <p>ou em 4x de R$ 14,99</p>

                     </div>
                  ) :
                  null
            }
         </div>
      );
   }
}

export default CardProduto;

