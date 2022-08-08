import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getAccessToken } from './accessToken';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token =
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
      ? 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtZW1iZXJfNTkxNTM2NjQ5IiwiaWF0IjoxNjQ1Njk4MDg0LCJfc21pcyI6ZmFsc2V9.Vg-gQrVQrrr2KYSgoI_Ma_GNmxAq_I1OuEaZMSj5B3FfMF-tCiLERWLL-p0IphmsU9bQA3A1_ooAvgZ3jjnSpC9EKkWAbwCN-scf3LdJggNG35mZmIP50269wNwFD31ilqngSu4Cs_HaLkCxaWL8yIXhlJCqO0ipJaYk_DPJlnwtGETtYDCOc4ZupxgJ8TgSDMTTv1OHSfel761SgtFuJq-4tSxvpEUa91_c2NzooKIDgmRFVN4VYsm8_quVq3ZpdX7GGfhhB60PDWzWvjWrVQATIXCTNT_wU-she5ck2i4lJ4rLwMGdWHXTEUDFX87rEl5QDJMdRpGwv4E8pDC8iQ'
      : getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: token ?? '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
