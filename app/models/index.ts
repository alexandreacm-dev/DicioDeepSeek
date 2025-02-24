export interface ISearch {
    deletor: string;
    word: string;
    timestamp: string;
    moderator: string;
    deleted: number
    derived_from: string;
    normalized: string;
    sense: number;
    last_revision: number;
    revision_id: number;
    word_id: number;
    creator: string;
    xml: string;
}

export interface Word {
    id: number;
    word: string;
}

export interface INextWords {
    cword: string;
    cid: number;
    words: Array<Word>
}