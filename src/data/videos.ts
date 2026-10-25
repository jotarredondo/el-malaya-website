
export interface Video {
    id: string;
    title: string;
    description: string;
    youtubeUrl?: string;
    thumbnail?: string;
}

export const videos: Video[] = [
    {
        id: 'youtube-demo',
        title: 'Prueba técnica de YouTube',
        description: 'Contenido de prueba, no publicar.',
        youtubeUrl: 'https://www.youtube.com/watch?v=2MsbVEupqAs'
    }

];
