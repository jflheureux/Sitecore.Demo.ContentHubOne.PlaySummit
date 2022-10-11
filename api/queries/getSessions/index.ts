import { fetchGraphQL } from '../..';
import { Session, AllSessionsResponse, SessionResult } from '../../../interfaces/session';

const sessionsQuery = `
query {
  allSession {
    results {
      id
      sessionName
      description
      isPremium
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
      type: 'hardcoded',
      room: session?.room?.results[0]?.roomName || 'No Room',
      speakers: session?.speakers?.results?.map((speaker) => speaker.speakerName) || [],
    });
  });

  return { sessions };
};
