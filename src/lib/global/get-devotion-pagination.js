import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getPaginationDevotionsQuery = gql`
  query devotions($first: Int, $skip: Int) {
    devotions(orderBy: datePublished_DESC, first: $first, skip: $skip) {
      datePublished
      title
      content
      slug
    }
  }
`;

async function getPaginationDevotions(first, skip = 0) {
  const { devotions } = await graphcmsClient.request(
    getPaginationDevotionsQuery,
    {
      first: Number(first),
      skip: Number(skip),
    }
  );

  return {
    devotions,
  };
}

export default getPaginationDevotions;
