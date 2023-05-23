import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getInformationList = gql`
    {
        informations {
            id
            title
            description
            link
        }
    }
`;

async function getAllInfo(){
    const { informations } = await graphcmsClient.request(getInformationList);

    return {
        informations
    }
}

export default getAllInfo;