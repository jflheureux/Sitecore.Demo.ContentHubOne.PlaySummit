import { fetchGraphQL } from '../..';
import { Session, AllSessionsResponse, SessionResult } from '../../../interfaces/session';

const sessionsQuery = `
query {
  allSession (first: 100) {
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

const getStartTime = (timeslot: string): number => {
  let startHour = parseInt(timeslot.slice(0, 2));
  const amOrPm = timeslot.slice(5, 7).toUpperCase();

  if (startHour === 12) {
    startHour = 0;
  }

  return amOrPm === 'AM' ? startHour : startHour + 12;
};

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

  return {
    sessions: sessions.sort((a, b) => {
      if (a.day !== b.day) {
        return a.day - b.day;
      }
      return getStartTime(a.timeslot) >= getStartTime(b.timeslot) ? 1 : -1;
    }),
  };
};
