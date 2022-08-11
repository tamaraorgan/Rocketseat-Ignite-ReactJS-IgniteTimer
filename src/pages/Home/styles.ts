import styled from 'styled-components'

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 3.5rem;
    }
`
export const BaseCountdownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    color: ${(props) => props.theme['text-100']};
`
export const StartCountdownButton = styled(BaseCountdownButton)`
    background: ${(props) => props.theme['third-color']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${(props) => props.theme['fourth-color']};
    }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${(props) => props.theme['first-color']};

    &:hover {
        background: ${(props) => props.theme['fifth-color']};
    }
`
