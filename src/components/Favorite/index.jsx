import { Container, Content } from "./styles";
import  foto  from '../../assets/map.JPG';

export function Favorite() {
  return (
    <Container>
      <Content>
        <div className="header-title">
          <h2>Meus Favoritos</h2>
        </div>

        <div className="section-card">
          <div className="card-mapa">
            <div className="mapa">
              <img src={ foto } alt="" />
            </div>
            <div className="description">
              <div className="location-title">
                <h3>Teresina - PI</h3>
                <span>José de Freitas</span>           
              </div>
            </div>
            <div className="information">
              <p>Logradouro: <span>José de freitas</span></p>
              <p>Bairro: <span>José de freitas</span></p>
              <p>Cidade: <span>José de freitas</span></p>
              <p>Estado: <span>José de freitas</span></p>
            </div>
          </div>

          <div className="card-mapa">
            <div className="mapa">
              <img src={ foto } alt="" />
            </div>
            <div className="description">
              <div className="location-title">
                <h3>Teresina - PI</h3>
                <span>José de Freitas</span>           
              </div>
            </div>
            <div className="information">
              <p>Logradouro: <span>José de freitas</span></p>
              <p>Bairro: <span>José de freitas</span></p>
              <p>Cidade: <span>José de freitas</span></p>
              <p>Estado: <span>José de freitas</span></p>
            </div>
          </div>

          <div className="card-mapa">
            <div className="mapa">
              <img src={ foto } alt="" />
            </div>
            <div className="description">
              <div className="location-title">
                <h3>Teresina - PI</h3>
                <span>José de Freitas</span>           
              </div>
            </div>
            <div className="information">
              <p>Logradouro: <span>José de freitas</span></p>
              <p>Bairro: <span>José de freitas</span></p>
              <p>Cidade: <span>José de freitas</span></p>
              <p>Estado: <span>José de freitas</span></p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}