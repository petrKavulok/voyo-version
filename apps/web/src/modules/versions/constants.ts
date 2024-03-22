export type VersionProps = {
    title: 'CZ' | 'SK' | 'RO';
    id?: number;
};

export const versions = [
    {
        title: 'CZ',
        id: 529093783,
    },
    {
        title: 'SK',
        id: 564759871,
    },
    {
        title: 'RO',
        id: 544688095,
    },
] as const satisfies ReadonlyArray<VersionProps>;
