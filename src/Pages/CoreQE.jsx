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
import { questions } from '../model/core_quiz';
import Quiz from './Quiz';

const text = `This page includes all the prerequisite knowledge about the existing company wide QA systems & infrastructure. You can go through the items in any order but all the items need to be completed.`
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Root name="Core" text={text}/>
    },
  {
    path: "/cdp",
    main: () => <ImageContent id="udemy" href="https://education.cloudera.com/store/2476246-cloudera-essentials-for-cdp" src={require('../model/education.png')}/>
  },
  {
    path: "/quasar-zoom1",
    main: () => <URLContent id="zoom1" src="https://cloudera.zoom.us/rec/share/-hvY_wA_mdPBRWTHpWBDdNV-aAZjrGoDUvND6ne24qFCU0ib981r3QRHYWIawWz5.zavBiiAjEdu9AC2v" />
  },
  {
    path: "/quasar-zoom2",
    main: () => <URLContent id="zoom2" src="https://cloudera.zoom.us/rec/share/ff8FxgAskBq0zFDg08AYlNx5rbHcZXcKEgXoZ3G9In1CwrFXoO9g3YbFz_WvL_qC.nI0odXbW2puqQWlJ" />
  },
  {
    path: "/quasar-doc",
    main: () => <URLContent id="gdoc" src="https://docs.google.com/presentation/d/1IU1nDFunA7tnulr8FmGX_Etv7jojlFzQqHyc2Np_A-c/edit#slide=id.p" />
  },
  {
    path: "/quanta",
    main: () => <ImageContent id="udemy" href="https://cloudera.udemy.com/learning-paths/1866112/" src={require('../model/udemy_quanta.png')}/>
  },
  {
    path: "/git-gerrit",
    main: () => <URLContent id="doc" src="https://www.youtube.com/embed/USjZcfj8yxE" />
  },
  {
    path: "/jira",
    main: () => <URLContent id="youtube" src="https://www.youtube.com/embed/iryX1Oa1cMQ" />
  },
  {
    path: "/docker",
    main: () => <URLContent id="youtube" src="https://www.youtube.com/embed/3c-iBn73dDE" />
  },
  {
    path: "/kubernetes",
    main: () => <URLContent id="youtube" src="https://www.youtube.com/embed/s_o8dwzRlu4" />
  },
  {
    path: "/quiz",
    main: () => <Quiz name={'CoreQE'} questions={questions} />
  }
];

export default function CoreQE() {
  return (
      <div className='main'>
        <div
          className='sidebar'
        >
        <Link className='sidebar-item' to="/" style={{ marginLeft: '30px'}}>Onboarding Home</Link>
        <Link className='sidebar-item' to="/quality" style={{ marginLeft: '30px'}}>Quality Home</Link>
        <hr className='divider'/>
          <ul>
            <li  className='sidebar-item'>
              <Link to="/coreqe/cdp">CDP</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/quasar-zoom1">Quasar Zoom Recording 1</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/quasar-zoom2">Quasar Zoom Recording 2</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/quasar-doc">Quasar Doc</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/quanta">Quanta</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/git-gerrit/">Git/Gerrit</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/jira">JIRA Crash Course</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/docker">Docker Tutorial</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/kubernetes">Kubernetes Tutorial</Link>
            </li>
            <li className='sidebar-item'>
              <Link to="/coreqe/quiz">Quiz</Link>
            </li>
          </ul>
          <hr className='divider'/>
          <Link className='sidebar-item' to="/coreqe" style={{ marginLeft: '30px'}}>Top</Link>
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
