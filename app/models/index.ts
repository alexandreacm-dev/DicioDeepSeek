export interface ISearch {
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