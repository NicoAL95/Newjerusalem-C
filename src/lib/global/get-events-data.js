import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getEventsQuery = gql`
    {
        upcomingEvents {
            eventsTitle
            eventsDate
            eventsLocation
            eventsBackground {
                    url
                }
        }
    }
`;

async function getEventsData(){
    const { upcomingEvents } = await graphcmsClient.request(getEventsQuery);

    return {
        upcomingEvents
    }
}

export default getEventsData;