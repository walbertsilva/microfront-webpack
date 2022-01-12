import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

// CSS
import './app.css';

const App = () => {

    // MF
    const StudiePage = React.lazy(() => import("StudiesApp/StudiePage"));
	const TaskPage   = React.lazy(() => import("TaskApp/TaskPage"));
	const CertificatePage   = React.lazy(() => import("CertificateApp/CertificatePage"));
	
  
    return(
      <Router>
        <div>
            <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/studies">Estudos</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/tasks">Tarefas</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/certificates">Certificados</Link>
                    </NavItem>
                </Nav>
            </Navbar>
			<Switch>
				<Route exact path="/studies">
					<Suspense fallback={<div>Loading...</div>}>
						<StudiePage />
					</Suspense>
				</Route>
				<Route exact path="/tasks">
					<Suspense fallback={<div>Loading...</div>}>
						<TaskPage />
					</Suspense>
				</Route>
				<Route exact path="/certificates">
					<Suspense fallback={<div>Loading...</div>}>
						<CertificatePage />
					</Suspense>
				</Route>
			</Switch>
        </div>
      </Router>
    )
  
  }
  
  export default App;