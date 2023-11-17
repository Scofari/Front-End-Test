import { useParams } from "react-router-dom";
import { GET_ARTICLE } from "../apollo/article";
import { useQuery } from "@apollo/client";

import { ReactComponent as CommentIcon } from "../assets/comment.svg";
import { ReactComponent as ViewIcon } from "../assets/view.svg";
import { ReactComponent as LikeIcon } from "../assets/like.svg";
import {
    ArticleContainer,
    ArticleDate,
    ArticleDescription,
    ArticleThumbnail,
    ArticleTitle,
    Flex,
} from "./styles/index";
import { Loader } from "./";
import { IArticleDetails } from "../models/news.interface";
import { NEWS_MEDIA_URL, LOGO_MEDIA_URL, fallbackLogo } from "../constants";

export default function ArticleDetails() {
    const { url } = useParams();
    const { data, loading, error } = useQuery<IArticleDetails>(GET_ARTICLE, {
        variables: { url },
    });

    if (!data) return null;

    const {
        news: {
            dates,
            description,
            parents,
            thumbnail,
            title,
            counters: { comment, like, view },
        },
    } = data;

    if (error) return <h1>Error</h1>;

    if (loading) return <Loader />;

    return (
        <ArticleContainer direction="column" $padding="20px">
            <Flex>
                <CommentIcon />
                {comment}
                <LikeIcon />
                {like}
                <ViewIcon />
                {view}
                <ArticleThumbnail
                    width={20}
                    src={`${LOGO_MEDIA_URL}${
                        parents[1]?.attachment || fallbackLogo
                    }`}
                    alt="point logo"
                />
                <ArticleDate>{dates.postedWithYear}</ArticleDate>
            </Flex>
            <ArticleTitle fontSize="2.5rem">{title.short}</ArticleTitle>
            <ArticleDescription fontSize="1.2rem">
                {description.intro}
            </ArticleDescription>
            <ArticleThumbnail
                width={600}
                src={`${NEWS_MEDIA_URL}${thumbnail}`}
                alt="point thumbnail"
            />
            <p dangerouslySetInnerHTML={{ __html: description.long }} />
        </ArticleContainer>
    );
}
