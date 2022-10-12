import { RoomResults } from '../room';
import { SpeakerResults } from '../speaker';

export interface SessionResult {
  id: string;
  sessionName: string;
  description: string;
  room: RoomResults;
  speakers?: SpeakerResults;
  isPremium: boolean;
  imageUrl?: string;
  day: number;
  sessionType?: string;
}

export interface AllSessionsResponse {
  data: {
    allSession: {
      results: SessionResult[];
    };
  };
}

export interface Session {
  id: string;
  name: string;
  speakers?: string[];
  description: string;
  room: string;
  type: string;
  isPremium: boolean;
  imageUrl?: string;
  day: number;
}
