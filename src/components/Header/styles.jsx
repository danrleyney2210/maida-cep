import styled from 'styled-components';


export const Container = styled.header`
  background: var(--background);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .form {
    display: flex;

    button {
      background: var(--bg-primary);
      color: #fff;
      border: none;
      padding: 0 0.5rem;
      border-radius: 0.24rem;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .form-cep {
    position: relative;

    input {
      border: none;
      background: none;
      border: 2px solid var(--text-body);
      padding: 0.7rem;
      color: #fff;
      outline: none;
      border-radius: 0.25rem;
      margin-right: 5px;

      &:focus {
        border: 2px solid #fff;
        color: #fff;
      }
    }

    label {
      position: absolute;
      top: -0.3rem;
      left: 0.5rem;
      font-size: 10px;
      padding: 0 3px;
      color: #fff;
      background: var(--background);
    }
  }

  @media (max-width:450px){
    flex-direction: column;
    padding: 2rem 1rem 2rem;

    .form {
      margin-top: 2rem;
    }    
  }
`