import Head from 'next/head';
import { useQuery } from '@apollo/client';

import QUERY from './api/graphql/queries/cards.graphql';

import styles from '../styles/Home.module.scss';

export default function Home() {
  const { data, loading, error } = useQuery(QUERY);

  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <div className={styles.container}>
      {loading && <p>loading...</p>}
      {data && (
        <>
          {data.getAll.map(
            (
              e: { _id: string; title: string; author_id: string },
              i: number
            ) => (
              <code key={i}>
                <i>{'{'}</i>
                <br />
                _id:<i>{e._id}</i>
                <br />
                title:<i>{e.title}</i>
                <br />
                author_id:<i>{e.author_id}</i>
                <br />
                <i>{'}'}</i>
                <br />
                <br />
              </code>
            )
          )}
        </>
      )}
    </div>
  );
}
