import styled from "styled-components";

export default styled.div`
    border-radius: 1rem;
    .row {
        display: flex;
        margin: 20px 0;
    }
    .stats-list {
        li {
            display: flex;
            margin: 5px 0;
            font-weight: 500;
            span {
                width: 50%;
            }
        }
    }
    .card {
        border-radius: 1rem;
        background-color: #fff;
        padding: 15px;
        background-color: var(--yellow-1);
    }
`;
