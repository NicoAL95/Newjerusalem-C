import graphcmsClient, { gql } from '../../config/Graphcms.config';

export const getDevotion = async ({slug}) => {
        const query = gql`
        query Devotion($slug : String!) {
            devotion(where: {slug: $slug}) {
              title
              datePublished
              content
            }
          }
    `
    const {devotion} = await await graphcmsClient.request(query, {
        slug
    });
    
    return {devotion};
}