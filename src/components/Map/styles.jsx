import styled from "styled-components"

export const Container = styled.div`
  background: #f3f3f3;

`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  border-radius: 0.24rem;
  display: flex;
  flex-direction: column;

  table {
    margin: 0 0 1.5rem 0;
    border-spacing: 0;
    border: 1px solid #E6E7E8;

    thead {      
      background-color: var(--bg-primary);
      color: #fff;
      font-size: 1rem;

      th {
        text-align: start;
        font-weight: 400;      
        padding: 5px 10px;
      }
    }

    tbody {
      background-color: #fff;

      td {  
        font-weight: 400;      
        padding: 5px 10px;
        font-size: 1rem;
      }
    }
  }

  .content-button {
      width: 100%;
      gap: 1rem;
      display: flex;
      

      button {
      padding: .6rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      border: none;
      background: var(--bg-primary);
      color: #fff;
      border-radius: 0.2rem;

      &:hover {
        background: #df30dc;
      }
    }
  }

  .favoritado {
    button {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }


  .content-map {
    margin-top: 1.5rem;
    width: 100%;
    border: none;    

    iframe {
      border: none;
    }
  }

  @media(max-width: 700px) {
    flex-direction: column;

    table {
      margin: 0 0 30px 0;
    }
  }

`