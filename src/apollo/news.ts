import { gql } from "@apollo/client";

export const GET_NEWS_LIST = gql`
    query NewsList($take: Int!, $postedDateTo: Int!) {
        news: contents(
            project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
            lang: "ru"
            skip: 0
            take: $take
            posted_date_to: $postedDateTo
        ) {
            id
            url
            title {
                short
            }
            thumbnail
            dates {
                posted: posted(
                    format: "2 $$Jan$$. 15:04"
                    lang: "ru"
                    getDiff: true
                )
                postedTs: posted
            }
            description {
                intro
            }
            parents {
                id
                attachment
            }
        }
    }
`;
