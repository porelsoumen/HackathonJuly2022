import React from 'react';

export default function Content(props) {
    return (
        <div >
            

            <div id="doc">
            Impala uses SQL as its query language. To protect user investment in skills development and query design, Impala provides a high degree of compatibility with the Hive Query Language (HiveQL):

            Because Impala uses the same metadata store as Hive to record information about table structure and properties, Impala can access tables defined through the native Impala CREATE TABLE command, or tables created using the Hive data definition language (DDL).
            Impala supports data manipulation (DML) statements similar to the DML component of HiveQL.
            Impala provides many built-in functions with the same names and parameter types as their HiveQL equivalents.
            Impala supports most of the same statements and clauses as HiveQL, including, but not limited to JOIN, AGGREGATE, DISTINCT, UNION ALL, ORDER BY, LIMIT and (uncorrelated) subquery in the FROM clause. Impala also supports INSERT INTO and INSERT OVERWRITE.

            Impala supports data types with the same names and semantics as the equivalent Hive data types: STRING, TINYINT, SMALLINT, INT, BIGINT, FLOAT, DOUBLE, BOOLEAN, STRING, TIMESTAMP.

            For full details about Impala SQL syntax and semantics, see Impala SQL Statements.

            Most HiveQL SELECT and INSERT statements run unmodified with Impala. For information about Hive syntax not available in Impala, see SQL Differences Between Impala and Hive.

            For a list of the built-in functions available in Impala queries, see Impala Built-In Functions.
            </div>
            <div id="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rdegSAMzXhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div id="udemy">
                <a href="https://cloudera.udemy.com/course/cca-159-data-analyst-using-sqoop-hive-and-impala/">View the course on Udemy</a>
            </div>
            <div id="gdrive-doc">
                <a href="https://docs.google.com/document/d/1arDMeyjWmpYOr7vYKolhiI1SU17uWM8jtf4inNf7J28/edit#">View the document on Google drive</a>
            </div>
            <div id="zoom">
                <a href="https://cloudera.zoom.us/rec/share/4co6NE0xSyW0FjsPcB1wvvjiGDtbpvxqoNzZHN4d2AUcHJMBke4PDtViV5d4l6Ma.CyWriyvBpEqcUWOC">View the Zoom Recording. Passcode is n2k68*^I</a>
            </div>
            <div id="gdrive-slides">
                <a href="https://drive.google.com/drive/u/0/folders/11MbOnXFW3uCYZJvZc4TUShuOnkEjipzb">View the recording and slides on Gdrive</a>
            </div>
        </div>
    )
}