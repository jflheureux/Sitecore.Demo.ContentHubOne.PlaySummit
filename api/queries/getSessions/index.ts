import { fetchGraphQL } from '../..';
import { Session, AllSessionsResponse, SessionResult } from '../../../interfaces/session';

const sessionsQuery = `
query {
  allSession {
    results {
      id
      sessionName
      description
      imageUrl
      isPremium
      day
      sessionType
      timeslot
      room {
        results {
          ... on Room {
          	id
            roomName
        	}
        }
      }
      speakers {
        results {
          ... on Speaker {
          	id
            speakerName
        	}
        }
      }
    }
  }
}
`;

export const getAllSessions = async (): Promise<{ sessions: Session[] }> => {
  const results: AllSessionsResponse = (await fetchGraphQL(sessionsQuery)) as AllSessionsResponse;
  const sessions: Session[] = [];

  results.data.allSession.results.forEach((session: SessionResult) => {
    sessions.push({
      id: session.id,
      name: session.sessionName,
      description: session.description,
      isPremium: session.isPremium,
      type: session.sessionType || '',
      room: session?.room?.results[0]?.roomName || '',
      speakers: session?.speakers?.results?.map((speaker) => speaker.speakerName) || [],
      imageUrl: session.imageUrl,
      day: session.day,
      timeslot: session.timeslot,
    });
  });

  return { sessions };
};
