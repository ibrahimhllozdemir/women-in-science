export type FieldId = 'physics' | 'medicine' | 'cs' | 'space' | 'chemistry';

export interface ExhibitionField {
    id: FieldId;
    title: string;
    description: string;
    color: string;
    imageUrl: string;
    icon?: string;
}

export const EXHIBITION_FIELDS: ExhibitionField[] = [
    {
        id: 'physics',
        title: 'Fizik',
        description: 'Evrenin temel yasalarını yeniden yazan kadınlar.',
        color: 'from-blue-500 to-indigo-600',
        imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'medicine',
        title: 'Tıp & Sağlık',
        description: 'İnsan hayatını kurtaran ve şifayı keşfeden öncüler.',
        color: 'from-emerald-500 to-teal-600',
        imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'cs',
        title: 'Bilgisayar Bilimleri & YZ',
        description: 'Kodlarla geleceği inşa eden visionary zekalar.',
        color: 'from-purple-500 to-fuchsia-600',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'space',
        title: 'Uzay & Astronomi',
        description: 'Yıldızlara uzanan ve evrenin sınırlarını zorlayanlar.',
        color: 'from-orange-500 to-amber-600',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'chemistry',
        title: 'Kimya & Biyoloji',
        description: 'Yaşamın yapı taşlarını analiz eden detaycı zihinler.',
        color: 'from-lime-500 to-green-600',
        imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    },
];
