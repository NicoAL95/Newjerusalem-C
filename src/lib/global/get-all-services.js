import graphcmsClient, { gql } from '../../config/Graphcms.config';

export const getServices = async () => {
    const query = gql`
    {
        services {
            speaker
            theme
            times
        }
    }      
    `
    const {services} = await graphcmsClient.request(graphqlAPI, query);
    
    return {services};
}