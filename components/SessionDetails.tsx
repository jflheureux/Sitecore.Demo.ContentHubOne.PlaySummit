import Link from 'next/link';
import { Session } from '../interfaces/session';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faClock,
  faDoorOpen,
  faTag,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

type SessionDetailsProps = {
  sessions: Session[];
};

const closeShowDetail = (sessionId: string) => {
  document.getElementById(sessionId)?.classList.remove('active');
};

const SessionDetails = (props: SessionDetailsProps): JSX.Element => {
  return (
    <>
      {props.sessions.map((session, index) => {
        return (
          <div key={index} id={session.id} className="session-detail">
            <div
              className="session-close-detail from-center"
              onClick={() => closeShowDetail(session.id)}
            >
              <span>
                <FontAwesomeIcon className="icon" icon={faTimes} />
              </span>
            </div>
            <div
              className="session-detail-image"
              style={{
                backgroundImage: `url("${session.imageUrl}")`,
              }}
            >
              {session.isPremium && (
                <div className="session-detail-meta">
                  <div>
                    <span>
                      <FontAwesomeIcon className="icon" icon={faTag} />
                    </span>
                    VIP tickets only
                  </div>
                </div>
              )}
            </div>
            <div className="section-detail-content">
              <h2 className="session-name">{session.name}</h2>
              <div className="session-meta">
                <div>
                  {session.day && (
                    <span>
                      <FontAwesomeIcon className="icon" icon={faCalendar} />
                      Day {session.day}
                    </span>
                  )}
                </div>
                <div>
                  {session.timeslot && (
                    <span>
                      <FontAwesomeIcon className="icon" icon={faClock} />
                      {session.timeslot}
                    </span>
                  )}
                </div>
                <div>
                  {session.room && (
                    <span>
                      <FontAwesomeIcon className="icon" icon={faDoorOpen} />
                      {session.room}
                    </span>
                  )}
                </div>
                <div>
                  {session.speakers?.length && (
                    <span>
                      <FontAwesomeIcon className="icon" icon={faUser} />
                      {session.speakers.join(', ')}
                    </span>
                  )}
                </div>
              </div>
              <div
                className="session-description"
                contentEditable="false"
                dangerouslySetInnerHTML={{ __html: session.description }}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SessionDetails;
