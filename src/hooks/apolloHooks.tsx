import * as Apollo from '@apollo/client';
import {
  CheckoutStatusDocument,
  CreateAccessTokenDocument,
  CreateQuoteBundleDocument,
  EditQuoteDocument,
  InitWidgetDocument,
  SignStatusDocument,
  StartCheckoutDocument,
  RegisterDirectDebitMutation,
} from '@/graphql/documents';
import {
  CheckoutStatusQuery,
  CheckoutStatusQueryVariables,
  CreateAccessTokenMutation,
  CreateAccessTokenMutationVariables,
  CreateQuoteBundleMutation,
  CreateQuoteBundleMutationVariables,
  EditQuoteMutation,
  EditQuoteMutationVariables,
  InitWidgetMutation,
  InitWidgetMutationVariables,
  SignStatusQuery,
  SignStatusQueryVariables,
  StartCheckoutMutation,
  StartCheckoutMutationVariables,
  RegisterDirectDebitData,
  RegisterDirectDebitVariables,
} from '@/types/schemaTypes';

const defaultOptions: object = {};

/**
 * __useCreateQuoteBundleMutation__
 *
 * To run a mutation, you first call `useCreateQuoteBundleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuoteBundleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuoteBundleMutation, { data, loading, error }] = useCreateQuoteBundleMutation({
 *   variables: {
 *      quoteCartId: // value for 'quoteCartId'
 *      quotes: // value for 'quotes'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useCreateQuoteBundleMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateQuoteBundleMutation, CreateQuoteBundleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateQuoteBundleMutation, CreateQuoteBundleMutationVariables>(
    CreateQuoteBundleDocument,
    options
  );
}

/**
 * __useEditBundledQuoteMutation__
 *
 * To run a mutation, you first call `useEditBundledQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBundledQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBundledQuoteMutation, { data, loading, error }] = useEditBundledQuoteMutation({
 *   variables: {
 *      quoteCartId: // value for 'quoteCartId'
 *      locale: // value for 'locale'
 *      quoteId: // value for 'quoteId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useEditBundledQuoteMutation(
  baseOptions?: Apollo.MutationHookOptions<EditQuoteMutation, EditQuoteMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditQuoteMutation, EditQuoteMutationVariables>(EditQuoteDocument, options);
}

/**
 * __useStartCheckoutMutation__
 *
 * To run a mutation, you first call `useStartCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startCheckoutMutation, { data, loading, error }] = useStartCheckoutMutation({
 *   variables: {
 *      quoteCartId: // value for 'quoteCartId'
 *      quoteIds: // value for 'quoteIds'
 *   },
 * });
 */
export function useStartCheckoutMutation(
  baseOptions?: Apollo.MutationHookOptions<StartCheckoutMutation, StartCheckoutMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<StartCheckoutMutation, StartCheckoutMutationVariables>(StartCheckoutDocument, options);
}

/**
 * __useSignStatusQuery__
 *
 * To run a query within a React component, call `useSignStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useSignStatusQuery(baseOptions?: Apollo.QueryHookOptions<SignStatusQuery, SignStatusQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SignStatusQuery, SignStatusQueryVariables>(SignStatusDocument, options);
}

/**
 * __useCreateAccessTokenMutation__
 *
 * To run a mutation, you first call `useCreateAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccessTokenMutation, { data, loading, error }] = useCreateAccessTokenMutation({
 *   variables: {
 *      quoteCartId: // value for 'quoteCartId'
 *   },
 * });
 */
export function useCreateAccessTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateAccessTokenMutation, CreateAccessTokenMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAccessTokenMutation, CreateAccessTokenMutationVariables>(
    CreateAccessTokenDocument,
    options
  );
}

/**
 * __useCheckoutStatusQuery__
 *
 * To run a query within a React component, call `useCheckoutStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutStatusQuery({
 *   variables: {
 *      quoteCartId: // value for 'quoteCartId'
 *   },
 * });
 */
export function useCheckoutStatusQuery(
  baseOptions: Apollo.QueryHookOptions<CheckoutStatusQuery, CheckoutStatusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckoutStatusQuery, CheckoutStatusQueryVariables>(CheckoutStatusDocument, options);
}

/**
 * useInitWidgetMutation
 *
 * To run a mutation, you first call `useInitWidgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitWidgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [InitWidgetMutation, { data, loading, error }] = useInitWidgetMutation({
 *   variables: {
 *      market: // value for 'market'
 *      locale: // value for 'locale'
 *      requestId: // value for 'requestId'
 *      partnerId: // value for 'partnerId'
 *   },
 * });
 */

export function useInitWidgetMutation(
  baseOptions?: Apollo.MutationHookOptions<InitWidgetMutation, InitWidgetMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InitWidgetMutation, InitWidgetMutationVariables>(InitWidgetDocument, options);
}

export const useRegisterDirectDebitMutation = () =>
  Apollo.useMutation<RegisterDirectDebitData, RegisterDirectDebitVariables>(RegisterDirectDebitMutation);
