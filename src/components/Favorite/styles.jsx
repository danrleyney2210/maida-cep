import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;

  .body-favorite {
    p {
      color: #fff;
    }
  }

  .header-title {
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;

    h2 {
      color: #fff;
    }
  }

  .logradouro {
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  
  }

  .section-card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .card-mapa {
      background: #fff;
      height: 400px;
      width: 300px;
      border-radius: 0.44rem;
      margin-bottom: 1.5rem;

    .mapa {
      iframe {
        border-radius: 0.44rem 0.44rem 0  0;
        border: none;
      }
    }

    .description {
      .location-title {
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
        margin: 0 10px;
        h3 {
          color: var(--bg-primary);
        }
        span {
          font-size: 0.8rem ;
          color: var(--text-body);
        }
      }
    }

    .information {
      
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      margin: 0 1rem;

      p{
        font-weight: bold;

        span {
          font-weight: normal;
        }
      }
    }
    }
  }

  @media (max-width:970px) {

  }

`

export const WrapperFavorites = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`