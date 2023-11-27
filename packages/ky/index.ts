import ky from 'ky';

const kyInstance = ky.create({
  retry: 0,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      (request) => {
        // TODO(@useonglee): 토큰 로직 추가하기
      },
    ],
  },
});

export default kyInstance;
