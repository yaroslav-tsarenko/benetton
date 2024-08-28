import create from 'zustand';

interface LinkState {
    links: Record<string, string>;
    captchaStatus: 'on' | 'off';
    setLink: (customNameOfLink: string, value: string) => void;
    getLink: (customNameOfLink: string) => string | undefined;
    setCaptchaStatus: (status: 'on' | 'off') => void;
    getCaptchaStatus: () => 'on' | 'off';
}

export const useLinkStore = create<LinkState>((set) => ({
    links: JSON.parse(localStorage.getItem('links') || '{}'),
    captchaStatus: 'off',

    setLink: (customNameOfLink, value) => set((state) => {
        const updatedLinks = { ...state.links, [customNameOfLink]: value };
        localStorage.setItem('links', JSON.stringify(updatedLinks));
        return { links: updatedLinks };
    }),

    getLink: (customNameOfLink) => {
        const links = JSON.parse(localStorage.getItem('links') || '{}');
        return links[customNameOfLink];
    },

    setCaptchaStatus: (status) => set(() => {
        localStorage.setItem('captchaStatus', status);
        return { captchaStatus: status };
    }),

    getCaptchaStatus: () => {
        return localStorage.getItem('captchaStatus') as 'on' | 'off' || 'off';
    },
}));