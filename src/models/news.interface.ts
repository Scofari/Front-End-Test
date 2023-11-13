interface ContentTitle {
    short: string;
}

interface ContentDates {
    posted: string;
    postedTs: string;
    postedWithYear: string;
}

interface ContentDescription {
    intro: string;
    long: string;
}

interface Topic {
    attachment: string;
}

interface Counters {
    view: number;
    comment: number;
    like: number;
}

export interface NewsItem {
    id: string;
    url: string;
    lang: string;
    title: ContentTitle;
    thumbnail: string;
    dates: ContentDates;
    description: ContentDescription;
    parents: Topic[];
    counters: Counters;
}

export interface ContentResponse {
    news: NewsItem[];
}

export interface IArticleDetails {
    news: NewsItem;
}
