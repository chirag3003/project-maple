import styled from "styled-components";

export default styled.nav`
    .item {
        width: 100%;
        margin-bottom: 20px;
        z-index: 10;
        button {
        padding: 0.5rem;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        }
    }
    .active-button {
        padding: 0.5rem;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 1rem;
        background: var(--card-grad);
        position: relative;
        color: white;
    }
    .active-button::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 95%;
        height: 100%;
        background: inherit;
        filter: blur(0.7rem);
        border-radius: 2rem; 
        transform: translate(0.2rem, 0.5rem);
        opacity: 0.5;
        z-index: -1;
    }
`;
