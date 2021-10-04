import { Container, Content, WrapperFavorites } from "./styles";
import  foto  from '../../assets/map.JPG';
import { useFavorite, } from "../../Context/favorites";

export function Favorite() {
  const { favoritos } = useFavorite()

  return (
    <Container>
      <Content>
        <div className="header-title">
          <h2>Meus Favoritos</h2>
        </div>

        {
          favoritos.length === 0 && (
            <div className="body-favorite">
              <p>Nenhuma endereço adicionado</p>
            </div>
          )
        }

        {
          favoritos.length > 0 && (
             <WrapperFavorites> 
              {
                favoritos.map((favorito, index) => (
                  <div key={String(index)} className="section-card">
                    <div className="card-mapa">
                      <div className="mapa">
                        <iframe
                          width="100%"
                          height="190"
                          loading="lazy"
                          allowFullScreen
                          title={favorito.cep}
                          src={`https://www.google.com/maps/embed/v1/search?q=${favorito.cep}&key=AIzaSyDB6Pu4YHZJ1NWbnYx-L8rmnQ6oovEC3Go`}
                        ></iframe>
                      </div>
                      <div className="description">
                        <div className="location-title">
                          <h3>{favorito.localidade} - {favorito.uf}</h3>
                          <span>{favorito.cep}</span>           
                        </div>
                      </div>
                      <div className="information">
                        <p className="logradouro">Logradouro: <span>{favorito.logradouro}</span></p>
                        <p>Bairro: <span>{favorito.bairro}</span></p>
                        <p>Cidade: <span>{favorito.localidade}</span></p>
                        <p>Estado: <span>{favorito.uf}</span></p>
                      </div>
                    </div>
                  </div>
                ))
              }
             </WrapperFavorites>
          )
        }   
      </Content>
    </Container>
  )
}