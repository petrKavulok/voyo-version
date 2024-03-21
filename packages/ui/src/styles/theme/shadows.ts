import type { Shadows } from '@mui/material';

const deep = '0px 2px 24px rgba(0, 0, 0, 0.05)';

export const shadows = ['none', '1px 2px 9px 0px rgba(0, 0, 0, 0.20)', ...Array(23).fill(deep)] as Shadows;
