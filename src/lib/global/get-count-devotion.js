import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getDevotionInfoQuery = gql`
  query pageDevotionInfo($first: Int, $skip: Int) {
    devotionInfo: devotionsConnection(first: $first, skip: $skip) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

async function getDevotionInfoData(first, skip = 0) {
  const { devotionInfo } = await graphcmsClient.request(getDevotionInfoQuery, {
    first: Number(first),
    skip: Number(skip),
  });

  return {
    devotionInfo,
  };
}

export default getDevotionInfoData;
