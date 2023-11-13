import { gql } from "@apollo/client";

export const GET_ARTICLE = gql`
    query Article($url: String) {
        news: content(
            id: ""
            project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
            full_url: $url
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
                postedWithYear: posted(
                    format: "2 $$January$$ 2006, 15:04"
                    lang: "ru"
                )
            }
            description {
                intro
                long
            }
            parents {
                attachment
            }
            counters {
                view
                comment
                like
            }
        }
    }
`;
