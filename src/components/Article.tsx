import { Link } from "react-router-dom";

import { LOGO_MEDIA_URL, NEWS_MEDIA_URL, fallbackLogo } from "../constants";
import {
    ArticleBody,
    ArticleContainer,
    ArticleDate,
    ArticleDescription,
    ArticleThumbnail,
    ArticleTitle,
    Flex,
} from "./styles/index";
import { NewsItem } from "../models/news.interface";

type ArticleProps = {
    article: NewsItem;
};

export default function Article({ article }: ArticleProps) {
    const { dates, description, parents, thumbnail, title, url } = article;

    return (
        <ArticleContainer>
            <Link to={`/${url}`}>
                <ArticleThumbnail
                    width={252}
                    src={`${NEWS_MEDIA_URL}${thumbnail}`}
                    alt="point logo"
                />
            </Link>
            <ArticleBody>
                <Link to={`/${url}`}>
                    <ArticleTitle>{title.short}</ArticleTitle>
                </Link>
                <ArticleDescription>{description.intro}</ArticleDescription>
                <Flex>
                    <ArticleThumbnail
                        width={20}
                        src={`${LOGO_MEDIA_URL}${
                            parents[1]?.attachment || fallbackLogo
                        }`}
                        alt="point logo"
                    />
                    <ArticleDate>{dates.posted}</ArticleDate>
                </Flex>
            </ArticleBody>
        </ArticleContainer>
    );
}
