type GraphQLResponseWithErrors = {
  errors: unknown[];
};

export async function fetchGraphQL(query: string): Promise<unknown> {
  const apiKey: string = process.env.NEXT_PUBLIC_CHONE_API_KEY || '';
  const endpointUrl: string = process.env.NEXT_PUBLIC_CHONE_BASE_URL || '';

  try {
    return await fetch(endpointUrl + '/api/graphql/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-GQL-Token': apiKey,
      },
      body: JSON.stringify({ query }),
    })
      .then((response: Response) => {
        const jsonResponsePromise = response.json();
        jsonResponsePromise.then((jsonResponse: unknown) => {
          const responseWithErrors = jsonResponse as GraphQLResponseWithErrors;
          if (responseWithErrors.errors && responseWithErrors.errors.length > 0) {
            console.error(
              'An error was returned by a GraphQL query. See the associated logged object for details.',
              responseWithErrors
            );
          }
        });
        return jsonResponsePromise;
      })
      .catch((error) => {
        return console.log(error);
      });
  } catch (error) {
    return console.log(error);
  }
}
