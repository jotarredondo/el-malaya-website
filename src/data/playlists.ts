
export interface Playlist {
    id: string;
    title: string;
    description: string;
    spotifyUrl?: string;
    cover?: string;
    }

export const playlists: Playlist[] = [
    {
        id: 'malaya-inspiration',
        title: 'Malaya Inspiration',
        description: 'Playlists de inspiración musical.',
        spotifyUrl:
            'https://open.spotify.com/playlist/62gNHTVXdx3l0GRRLmiHkF?si=7dd08d2a2bec4c07'
    },
    {
        id: 'malaya-inspiration2',
        title: 'Malaya Inspiration2',
        description: 'Playlists de inspiración musical.2',
        spotifyUrl:
            'https://open.spotify.com/playlist/6KrBXwUzrBkSufI4Y49mqv?si=b85b06bb7b5e4718'

    },
    {
        id: 'malaya-inspiration3',
        title: 'Malaya Inspiration3',
        description: 'Playlists de inspiración musical.3',
        spotifyUrl:
            'https://open.spotify.com/playlist/6EYT1lV0po7q9DW5nt9z2P?si=9546f6073e914acc'
    },
    {
        id: 'malaya-inspiration4',
        title: 'Malaya Inspiration4',
        description: 'Playlists de inspiración musical.4',
        spotifyUrl:
            'https://open.spotify.com/playlist/066CQBTaRnNlmSxYCnRNCb?si=ca30ec8b28f64a8b'

    }
];
