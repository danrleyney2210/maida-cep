import { Container, Content } from './styles'
import { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'

export function Map({newAddress}) {

  const [ favoritos, setFavoritos ] = useState([]) 
  const[ monitora, setMonitora ] = useState(false)

  function favorito(e) {
    if(favoritos.length === 0){
      setFavoritos([...favoritos, newAddress.cep])
      localStorage.setItem(0, JSON.stringify(newAddress))
    }
    else{
      if(!favoritos.some( cep => {
        return cep == newAddress.cep 
      }) ){
        setFavoritos([...favoritos, newAddress.cep])
        localStorage.setItem((favoritos.length), JSON.stringify(newAddress))
      }
    }    
  }

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
            <button onClick={(e)=> favorito(e)}>
              <AiFillStar />
              Adcionar aos favoritos
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
            src={`https://www.google.com/maps/embed/v1/search?q=${newAddress.cep}&key=AIzaSyDB6Pu4YHZJ1NWbnYx-L8rmnQ6oovEC3Go`}
          ></iframe>
        </div>
        </>
      </Content>
    </Container>
  )
}