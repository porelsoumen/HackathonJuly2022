import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import URLContent from '../Components/URLContent';
import Root from './Root';
import ImageContent from '../Components/ImageContent';
import {questions} from '../model/impala_quiz'
import Quiz from './Quiz';

const text = `Everything you need to know before getting started with Cloudera impala-qe repository.`
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Root name="Impala" text={text}/>
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
    main: () => <ImageContent id="udemy" href="https://www.udemy.com/course/cca-159-data-analyst-using-sqoop-hive-and-impala/?src=sac" src={require('../model/udemyss.png')}/>
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
    main: () => <URLContent id="slides" src="https://docs.google.com/presentation/d/10adLkGeiGkjWlgXmy2ASHHmxCz91YBZHeFK6g3-5jeA/edit#slide=id.p1" />
  },
  {
    path: "/quiz",
    main: () => <Quiz name={'ImpalaQE'} questions={questions} />
  }
];

export default function impalaQE() {
  return (
      <div className='main'>
        <div
          className='sidebar'
          
        >
        <Link className='sidebar-item' to="/" style={{ marginLeft: '30px'}}>Onboarding Home</Link>
        <Link className='sidebar-item' to="/quality" style={{ marginLeft: '30px'}}>Quality Home</Link>
        <hr className='divider'/>
          <ul>
            <li className='sidebar-item'>
              <Link to="/impalaqe/doc">Doc</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/impalaqe/youtube">Youtube Video</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/impalaqe/udemy">Udemy Course</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/impalaqe/gdrive-doc">Gdrive Doc</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/impalaqe/zoom">Zoom Recording</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/impalaqe/gdrive-slides">Gdrive slides</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/impalaqe/quiz">Quiz</Link>
            </li>
          </ul>
          <hr className='divider'/>
          <Link className='sidebar-item' to="/impalaqe" style={{ marginLeft: '30px'}}>Top</Link>
          </div>

        <div className='container'>
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
