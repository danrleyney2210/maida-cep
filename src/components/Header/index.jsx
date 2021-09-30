import Logo from '../../assets/logo.png'
import { Container, Content } from './styles'
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Header({newAddress}) {
  const [loading, setLoading] = useState(false)
  const [cep, setCep] = useState('')

  function buscar(e) {
    if(e.target.value.length <= 8) {
      setCep(e.target.value)
    }
  }
  
 function searchAddress() {
  setLoading(true)
  axios.get('https://viacep.com.br/ws/' + cep + '/json/')
  .then((response) =>{
    newAddress(response.data)
    setCep('')
  })
  .catch((error)=>{
    console.log(error)
  }).finally(() => {
    setLoading(false)
  })
 }

  return (
    <Container>
      <Content>
        <img src={ Logo } alt="Logo Maida CEP" />
        <div className="form">
          <div className="form-cep">
            <input value={cep} onChange={(e) => buscar(e)} type="text"/>
            <label>CEP</label>
          </div>
          <button className="btn" disabled={cep.length < 8 || loading} onClick={() => searchAddress()}>{loading ? 'Buscando...' : 'Buscar'}</button>     
        </div>
      </Content>
    </Container>
  )
}