import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    const res = await httpRequest.get('users/search', {
        params: {
            q,
            type,
        },
    });
    return res.data;
};
