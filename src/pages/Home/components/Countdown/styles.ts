import styled from 'styled-components'

export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme['text-100']};

    display: flex;
    justify-content: space-between;
    gap: 1rem;

    span {
        background: linear-gradient(
            0deg,
            ${(props) => props.theme['fourth-color']} 0%,
            ${(props) => props.theme['first-color']} 100%
        );
        padding: 2rem 1.9rem;
        border-radius: 8px;
    }
`
export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme['first-color']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
