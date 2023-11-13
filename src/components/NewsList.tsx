import { Fragment } from "react";
import { Waypoint } from "react-waypoint";
import { useQuery } from "@apollo/client";

import { Article, Loader } from ".";
import { GET_NEWS_LIST } from "../apollo/news";
import { ContentResponse } from "../models/news.interface";
import { NewsListContainer, Title } from "./styles/index";

export default function NewsList() {
    const { data, loading, error, fetchMore } = useQuery<ContentResponse>(
        GET_NEWS_LIST,
        {
            variables: {
                take: 30,
            },
        }
    );

    if (!data) return null;

    const { news } = data;

    const handleWaypoinEnter = () => {
        const lastPostedTimestamp = parseInt(
            news[news.length - 1].dates.postedTs
        );

        fetchMore({
            updateQuery(previousQueryResult, { fetchMoreResult }) {
                if (!fetchMoreResult) {
                    return previousQueryResult;
                }

                return {
                    __typename: "Content",
                    news: [
                        ...previousQueryResult.news,
                        ...fetchMoreResult.news,
                    ],
                };
            },
            variables: {
                postedDateTo: lastPostedTimestamp,
            },
        });
    };

    return (
        <>
            {loading && <Loader />}
            {news.length > 0 && (
                <NewsListContainer>
                    <Title>Сегодня</Title>
                    {news.map((article, index: number) => (
                        <Fragment key={`${article.id}-${index}`}>
                            <Article article={article} />
                            {index === news.length - 10 && (
                                <Waypoint onEnter={handleWaypoinEnter} />
                            )}
                        </Fragment>
                    ))}
                </NewsListContainer>
            )}
            {error && <h1>Error</h1>}
        </>
    );
}
