import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getHomeDataQuery = gql`
    {
        services {
            speaker
            theme
            times
        },
        serviceBackgrounds {
            serviceBanner {
                    url
                }
        },
        longBackgrounds {
            longBanner {
                    url
                }
        },
        goldCommunities {
            title
            subtitle
            manualDate
            address
            storyPortrait {
                url
            }
        }
    }
`;

async function getHomeData(){
    const {services, serviceBackgrounds,  longBackgrounds, goldCommunities} = await graphcmsClient.request(getHomeDataQuery);

    return {
        services,
        serviceBackgrounds,
        longBackgrounds,
        goldCommunities
    }
}

export default getHomeData;