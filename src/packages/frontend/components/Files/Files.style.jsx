import styled from "styled-components";

export default styled.div`
    width: 100%;
    .add-button{
        background: var(--card-grad);
        position: relative;
        transition: 0.2s ease-in-out;

    }

    .add-button::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 95%;
        height: 100%;
        background: inherit;
        filter: blur(0.5rem);
        border-radius: 2rem; 
        transform: translate(0.2rem, 0.4rem);
        opacity: 0.8;
        z-index: -1;
    }
    .add-button:hover{
        transform: scale(0.96);
    }
`;
