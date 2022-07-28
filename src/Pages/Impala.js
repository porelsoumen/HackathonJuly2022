import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import TextContent from '../Components/TextContent';
import URLContent from '../Components/URLContent';
import ImpalaRoot from './ImpalaRoot';

const text = `Impala uses SQL as its query language. To protect user investment in skills development and query design, Impala provides a high degree of compatibility with the Hive Query Language (HiveQL):

Because Impala uses the same metadata store as Hive to record information about table structure and properties, Impala can access tables defined through the native Impala CREATE TABLE command, or tables created using the Hive data definition language (DDL).
Impala supports data manipulation (DML) statements similar to the DML component of HiveQL.
Impala provides many built-in functions with the same names and parameter types as their HiveQL equivalents.
Impala supports most of the same statements and clauses as HiveQL, including, but not limited to JOIN, AGGREGATE, DISTINCT, UNION ALL, ORDER BY, LIMIT and (uncorrelated) subquery in the FROM clause. Impala also supports INSERT INTO and INSERT OVERWRITE.

Impala supports data types with the same names and semantics as the equivalent Hive data types: STRING, TINYINT, SMALLINT, INT, BIGINT, FLOAT, DOUBLE, BOOLEAN, STRING, TIMESTAMP.

For full details about Impala SQL syntax and semantics, see Impala SQL Statements.

Most HiveQL SELECT and INSERT statements run unmodified with Impala. For information about Hive syntax not available in Impala, see SQL Differences Between Impala and Hive.

For a list of the built-in functions available in Impala queries, see Impala Built-In Functions.`

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <ImpalaRoot />
    },
  {
    path: "/doc",
    main: () => <URLContent id="doc" src="https://impala.apache.org/docs/build/html/topics/impala_langref.html" />
  },
  {
    path: "/youtube",
    main: () => <URLContent id="youtube" src="https://www.youtube.com/embed/rdegSAMzXhY" />
  },
  {
    path: "/udemy",
    main: () => <URLContent id="udemy" src="https://cloudera.udemy.com/course/cca-159-data-analyst-using-sqoop-hive-and-impala/" />
  },
  {
    path: "/gdrive-doc",
    main: () => <URLContent id="gdrive-doc" src="https://docs.google.com/document/d/1arDMeyjWmpYOr7vYKolhiI1SU17uWM8jtf4inNf7J28/edit#" />
  },
  {
    path: "/zoom",
    main: () => <URLContent id="zoom" src="https://cloudera.zoom.us/rec/share/4co6NE0xSyW0FjsPcB1wvvjiGDtbpvxqoNzZHN4d2AUcHJMBke4PDtViV5d4l6Ma.CyWriyvBpEqcUWOC" />
  },
  {
    path: "/gdrive-slides",
    main: () => <URLContent id="slides" src="https://drive.google.com/drive/u/0/folders/11MbOnXFW3uCYZJvZc4TUShuOnkEjipzb" />
  }
];

export default function Impala() {
  return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            background: "#f0f0f0"
          }}
        >
        <Link to="/">Onboarding Home</Link>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/impalaqe/doc">Doc</Link>
            </li>
            <li>
              <Link to="/impalaqe/youtube">Youtube Video</Link>
            </li>
            <li>
              <Link to="/impalaqe/udemy">Udemy Course</Link>
            </li>
            <li>
              <Link to="/impalaqe/gdrive-doc">Gdrive Doc</Link>
            </li>
            <li>
              <Link to="/impalaqe/zoom">Zoom Recording</Link>
            </li>
            <li>
              <Link to="/impalaqe/gdrive-slides">Gdrive slides</Link>
            </li>
            <li>
              <Link to="/impalaqe">Top</Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.main />}
              />
            ))}
          </Routes>
        </div>
      </div>
  );
}
