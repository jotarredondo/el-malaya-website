export interface SocialLink {
  label: string;
  url: string;
  icon: 'instagram' | 'spotify' | 'youtube' | 'soundcloud';
  isOfficial: boolean;
}

export const siteConfig: {
  bookingEmail: string | null;
  socialLinks: SocialLink[];
} = {
  bookingEmail: 'el.malaya.ok@gmail.com',
  socialLinks: [
    { label: 'Instagram', url: 'https://www.instagram.com/elmalayaok', icon: 'instagram', isOfficial: true },
    { label: 'Spotify', url: 'https://open.spotify.com/user/31qj6ariopzyqbql3y6juwjhwrjy?si=a86091dddfa8489c', icon: 'spotify', isOfficial: true },
    { label: 'YouTube', url: 'https://www.youtube.com/watch?v=2MsbVEupqAs', icon: 'youtube', isOfficial: true },
    { label: 'SoundCloud', url: 'https://soundcloud.com/el-malaya-ok', icon: 'soundcloud', isOfficial: true },
  ],
};
