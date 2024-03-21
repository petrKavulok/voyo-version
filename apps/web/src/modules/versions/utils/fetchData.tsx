import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import generateJWTToken from './generateJWT';

// data with appstoreconnect (w/ build number)
// export const fetchAppStoreData = async (id: number) => {
//     try {
//         const token = generateJWTToken();
//         const response = await axios.get('https://api.appstoreconnect.apple.com/v1/apps', {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.data.status) {
//             throw new Error('Network response was not ok');
//         }
//         console.log(response.data);
//         return response.data;
//     } catch {
//         console.warn('its fishy');
//         return {};
//     }
// };
