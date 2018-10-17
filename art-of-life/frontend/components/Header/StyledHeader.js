import styled from 'styled-components';

export const StyledHeader = styled.div`
    .bar {
        border-bottom: 10px solid ${props => props.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (min-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }

    .sub-bar{
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${props => props.theme.lightgrey}
    }
`;