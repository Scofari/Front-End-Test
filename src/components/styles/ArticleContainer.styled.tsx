import styled from "styled-components";

type ArticleContainerProps = {
    direction?: "column" | "column-reverse";
    $padding?: string;
};

type ArticleTitleProps = {
    fontSize?: string;
};

type ArticleDescriptionProps = ArticleTitleProps;

export const ArticleContainer = styled.article<ArticleContainerProps>`
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction || "row"};
    text-align: left;
    gap: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    max-width: 1200px;
    padding: ${({ $padding }) => $padding || ""};

    p {
        &:last-child {
            text-indent: 80px;
            font-size: 1.2rem;
        }
    }
`;

export const ArticleDate = styled.time`
    font-size: 14px;
    color: rgb(128, 128, 128);
    line-height: 0;
    width: max-content;
`;

export const ArticleDescription = styled.p<ArticleDescriptionProps>`
    line-height: 20px;
    font-size: ${({ fontSize }) => fontSize || "1rem"};
    font-weight: 400;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const ArticleThumbnail = styled.img`
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    object-fit: cover;
`;

export const ArticleTitle = styled.h3<ArticleTitleProps>`
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: ${({ fontSize }) => fontSize || "1.5rem"};
    line-height: 1;
    color: rgb(15, 23, 42);

    &:hover {
        color: ${({ fontSize }) => (fontSize ? "inherit" : "rgb(255, 71, 0)")};
    }
`;

export const ArticleBody = styled.div`
    flex: 1;
    font-size: 1.2rem;
`;
