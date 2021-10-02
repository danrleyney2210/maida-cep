import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;

  .header-title {
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;

    h2 {
      color: #fff;
    }
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
      img {
        width: 100%;
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