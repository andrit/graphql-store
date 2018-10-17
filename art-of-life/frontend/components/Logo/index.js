import styled from 'styled-components';

export const Logo = styled.h1`
    font-size: 3rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    /* transition: all .5s ease-in-out; */
    font-family: Garamond, Serif;
    a{
        padding: 0.5rem 1rem;
        background: ${props => props.theme.red};
        color: white;
        text-transform: uppercase;
        /* transition: all .2s ease-in-out; */
        sup, span{
            font-size: 2rem;
        }
    }
    @media (max-width: 1300px){
        margin: 0;
        text-align: center;
    }
`;