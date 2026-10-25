
export interface Video {
    id: string;
    title: string;
    description: string;
    youtubeUrl?: string;
    thumbnail?: string;
}

export const videos: Video[] = [
    {
        id: 'flashback-malaya-remix',
        title: 'Javiera Mena - Flashback (Malaya Remix)',
        description: 'Remix publicado en YouTube.',
        youtubeUrl: 'https://www.youtube.com/watch?v=2MsbVEupqAs',
        thumbnail: 'https://i.ytimg.com/vi/2MsbVEupqAs/hqdefault.jpg'
    }
];
