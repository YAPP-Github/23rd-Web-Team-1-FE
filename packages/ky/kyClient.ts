/* eslint-disable require-await */
import Cookie from 'js-cookie';
import ky from 'ky';

const kyClientInstance = ky.create({
  retry: 0,
  credentials: 'include',
  timeout: 15_000,
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = Cookie.get('accessToken');

        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`);
        }
      },
    ],
  },
});

export default kyClientInstance;
