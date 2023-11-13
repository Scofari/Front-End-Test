import styled from "styled-components";

const pointLogo = "https://point.md/static/svg/new-point-logo.svg";

export const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PointLogo = styled.img.attrs({
    src: pointLogo,
})`
    height: 50px;
`;

export const Slogan = styled.p`
    color: rgb(128, 128, 128);
    font-size: 0.85rem;
    margin: 0;
    line-height: 20px;
`;
