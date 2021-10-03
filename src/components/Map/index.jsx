import { Container, Content } from './styles'
import { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useFavorite } from '../../Context/favorites'


export function Map({newAddress}) {
  const {favoritos, favorito} = useFavorite()
  return (
    <Container>
      <Content>
        {
          !!newAddress && (
         <>
          <table>
            <thead>
              <th>Logradouro</th>
              <th>Bairro</th>
              <th>Localidade/UF</th>
              <th>CEP</th>
            </thead>
            <tbody>
              <td>{newAddress.logradouro}</td>
              <td>{newAddress.bairro}</td>
              <td>{newAddress.localidade}/{newAddress.uf}</td>
              <td>{newAddress.cep}</td>
            </tbody>
          </table>

          {
            newAddress.isFavorite && (
              <div className="content-button favoritado">
                <button disabled>
                  <AiFillStar />
                  Favoritado!
                </button>
              </div>
            )
          }

        {
          !newAddress.isFavorite && (
            <div className="content-button">
              <button onClick={()=> favorito(newAddress)}>
                <AiFillStar />
                
                Add favoritos
              </button>
            </div>
          )
        }

          <div className="content-map">          
            <iframe
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              title={newAddress.cep}
              src={`https://www.google.com/maps/embed/v1/search?q=${newAddress.cep}&key=AIzaSyDB6Pu4YHZJ1NWbnYx-L8rmnQ6oovEC3Go`}
            ></iframe>
          </div>
        </>
          )
        }
        {
          !newAddress && (
            <div>
              <h5>Você ainda não fez nenhuma pesquisa...</h5>
            </div>
          )
        }
      </Content>
    </Container>
  )
}