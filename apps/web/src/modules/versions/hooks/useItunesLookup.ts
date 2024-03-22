import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useITunesLookup = (id: number) => {
    return useQuery({
        queryKey: ['itunesData', id],
        queryFn: async () => {
            const response = await axios.get(`https://itunes.apple.com/lookup?id=${id}`);

            return response.data;
        },
    });
};

export default useITunesLookup;
