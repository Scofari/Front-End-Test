type ContentTitle = "short";

type ContentDescription = "intro" | "long";

type ContentDates = "posted" | "postedTs" | "postedWithYear";

type Topics = "id" | "attachment";

type Counters = "view" | "comment" | "like";

export interface NewsItem {
    id: string;
    url: string;
    lang: string;
    title: Record<ContentTitle, string>;
    thumbnail: string;
    dates: Record<ContentDates, string>;
    description: Record<ContentDescription, string>;
    parents: Record<Topics, string>[];
    counters: Record<Counters, number>;
}

export interface ContentResponse {
    news: NewsItem[];
}

export interface IArticleDetails {
    news: NewsItem;
}
