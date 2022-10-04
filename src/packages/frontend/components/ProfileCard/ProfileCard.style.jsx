import styled from "styled-components";

export default styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 20px 0;
    border-color: #979ca5;
    border-bottom-width: 1px;
    .image {
        width: 55%;
        aspect-ratio: 1/1;
        padding: 10px;
        background-color: var(--yellow-3);
        border-radius: 100%;
        display: flex;
        align-items: baseline;
        justify-content: center;
        overflow: hidden;
        svg {
            height: 100%;
            width: 100%;
        }
    }
    .name {
        margin-top: 20px;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 6px;
    }
    .title {
        font-size: 1.25rem;
        color: var(--text-gray);
        margin-bottom: 50px;
    }
`;
