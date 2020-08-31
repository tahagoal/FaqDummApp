export type Faq = {
    id: number;
    name: string;
    path: string;
};

export type question= {
    id: number;
    text: string;
    details: string;
}

export type detF = {
    id: number;
    name: string;
    questions: question[];
};