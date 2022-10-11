import { useState } from 'react';
import { getAllSessions } from '../api/queries/getSessions';
import SessionsList from '../components/SessionsList';
import { Session } from '../interfaces/session';
import Screen from '../components/Screen';
import PageHeader from '../components/PageHeader';
import { Params } from '../interfaces';
import ScheduleDetails from '../components/ScheduleDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

type SessionsProps = {
  sessions: Session[];
};

export declare type ScheduleParams = {
  [param: string]: Params;
};

const Sessions = (props: SessionsProps): JSX.Element => {
  const [sessions, setSessions] = useState(props.sessions);

  function handleQuickRefreshClick() {
    getAllSessions().then((data) => {
      setSessions(data.sessions);
    });
  }

  return (
    <>
      <div className="menu">
        <div className="menu-button refresh-button" onClick={handleQuickRefreshClick}>
          <FontAwesomeIcon className="icon" icon={faSyncAlt} />
        </div>
      </div>
      <Screen>
        <PageHeader />
        <SessionsList sessions={sessions} />
        <ScheduleDetails sessions={sessions} />
      </Screen>
    </>
  );
};

export const getStaticProps = async () => {
  const { sessions } = await getAllSessions();

  return {
    props: {
      sessions,
    },
    revalidate: 10,
  };
};

export default Sessions;
