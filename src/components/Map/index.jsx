import { Container, Content } from './styles'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'

export function Map({newAddress}) {
//  console.log(newAddress)
const [loading, setLoading] = useState(false)


  return (
    
    <Container>
      <Content>
        <>
          <table>
            <thead>
              <th>CEP</th>
              <th>Logradouro</th>
              <th>Bairro</th>
              <th>Cidade/UF</th>
            </thead>
            <tbody>
              <td>{newAddress.cep}</td>
              <td>{newAddress.logradouro}</td>
              <td>{newAddress.bairro}</td>
              <td>{newAddress.localidade}/{newAddress.uf}</td>
            </tbody>
          </table>

          <div className="content-button">
            <button>
              <FaSearch />
              Nova Busca
              </button>
            <button>
              <AiFillStar />
              Favoritar
            </button>
          </div>

          <div>
          <h3>Location</h3>
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            title={newAddress.cep}
            src={`https://www.google.com/maps/embed/v1/search?q=${newAddress.cep}&key=AIzaSyCsBSH6PpjWGJC5B4SCVvgnBmFC6lkC7Bo`}
          ></iframe>
        </div>
        </>
      </Content>
    </Container>
  )
}