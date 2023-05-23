import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getAllDevotionsQuery = gql`
  {
    devotions(last: 100, orderBy: datePublished_DESC) {
      datePublished
      title
      content
      slug
    }
  }
`;

async function getAllDevotions() {
  const  {devotions:allDevotions}  = await graphcmsClient.request(getAllDevotionsQuery);
  return {
    allDevotions,
  };
}

export default getAllDevotions;