import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  nav {
    display: flex;

    a {
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;
      color: ${(props) => props.theme['gray-100']};
      padding: 0.625rem;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
