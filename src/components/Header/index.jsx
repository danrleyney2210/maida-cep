import Logo from '../../assets/logo.png'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={ Logo } alt="Logo Maida CEP" />

        <div className="">
          <div className="form-cep">
            <input type="text" className="textbox"/>
            <label className="form-label">CEP</label>
          </div>
          {/* <button>Buscar</button> */}
        </div>
      </Content>
    </Container>
  )
}