import SessionRow from './SessionRow';
import { Session } from '../interfaces/session';

type SessionsListProps = {
  sessions: Session[];
};

const SessionsList = (props: SessionsListProps): JSX.Element => {
  return (
    <div className="schedule">
      {props?.sessions?.length && (
        <>
          {props.sessions.map((session, i) => (
            <div className="schedule-row" key={i}>
              <SessionRow session={session} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SessionsList;
