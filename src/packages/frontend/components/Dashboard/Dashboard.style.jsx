import styled from "styled-components";

export default styled.div`
    border-radius: 1rem;
    color: white;
    .row {
        display: flex;
        margin: 2rem 0;
        font-weight: medium;
        flex-wrap: wrap;
    }
    .stats-list {
        li {
            display: flex;

            span {
                width: 50%;
            }
        }
    }
    .card {
        border-radius: 1rem;
        background: var(--card-grad);
        position: relative;
    }
    .card::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 95%;
        height: 100%;
        background: inherit;
        filter: blur(0.7rem);
        border-radius: 2rem; 
        transform: translate(0.5rem, 1rem);
        opacity: 0.5;
        z-index: -1;
    }
    .data{
        font-family: 'Noto Sans Mono', monospace;
        font-weight: 400;
        letter-spacing: 0.1rem;
    }
`;
