
export interface Playlist {
    id: string;
    title: string;
    description: string;
    spotifyUrl?: string;
    cover?: string;
    }

export const playlists: Playlist[] = [
    {
        id: 'Groovy Tech-House',
        title: 'Groovy Tech House',
        description: 'Bajos con actitud, percusión contagiosa y grooves diseñados para la pista.',
        spotifyUrl:
            'https://open.spotify.com/playlist/0WAl70tGR4eF2NVFnCUMJd?si=bb4bf2025e714a5e'
    },
    {
        id: 'Edm Festival Electro-House',
        title: 'Edm Festival Electro-House',
        description: 'Energía de festival, drops explosivos y himnos electrónicos para levantar la pista.',
        spotifyUrl:
            'https://open.spotify.com/playlist/6z4W6OG2u5c2VKR1I4LVeu?si=c2d55e58c3c746d0'

    },
    {
        id: 'Global Club Afro-Latin',
        title: 'Global Club Afro-Latin',
        description: 'Percusión afro-latina, ritmos globales y electrónica de club sin fronteras.',
        spotifyUrl:
            'https://open.spotify.com/playlist/0BEXIYEv4lo0zaFxapUDRc?si=0a69fcf463894cf1'
    },
    {
        id: 'Disco Funky-House',
        title: 'Disco Funky-House',
        description: 'El espíritu disco y el funk se encuentran con el house. Ritmo, elegancia y mucho groove.',
        spotifyUrl:
            'https://open.spotify.com/playlist/2C0PqOqbuvA9kjjKUasFxQ?si=0da80ed0ab7740c8'

    }
];
