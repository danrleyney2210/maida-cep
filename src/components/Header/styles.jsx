import styled from 'styled-components';


export const Container = styled.header`
  background: var(--background);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  display: flex;
  justify-content: space-between;

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

      &:focus {
        border: 2px solid #fff;
        color: #fff;
      }
    }

    label {
      position: absolute;
      top: 0.6rem;
      left: 1.4rem;
      cursor: text;
      color: var(--text-body);
      transition: top 200ms ease-in, left 200ms, font-size 200ms ease-in;
    }

    input:focus ~ label, 
    input:not(:placeholder-shown) input:not(:focus)~label {
      top: -0.3rem;
      left: 0.5rem;
      font-size: 10px;
      padding: 0 3px;
      color: #fff;
      background: var(--background);
    }

    button {
      font-size: 1rem;
      color: #fff;
      background: var(--bg-primary);
      border: 0;
      padding: 0.7rem;
      border-radius: 0.25rem;
    }
  }
`