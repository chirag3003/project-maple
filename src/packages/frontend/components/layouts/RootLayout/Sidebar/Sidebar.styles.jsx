import styled from 'styled-components';

const StyledRootLayoutSidebarMenu = styled.div`
    .active-button {
        padding: 0.5rem;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 0.1rem;
        font-weight: 500;
        border-radius: 0.5rem;
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

const StyledRootLayoutSidebarLogout = styled.div`
    color: var(--text-primary);
`;

export { StyledRootLayoutSidebarMenu, StyledRootLayoutSidebarLogout };
