import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getAllSlugsQuery = gql`
    {
        devotions {
            slug
        }
    }
`;

async function getAllSlugs(){
    const { devotions } = await graphcmsClient.request(getAllSlugsQuery);

    return {
        devotions
    }
}

export default getAllSlugs;