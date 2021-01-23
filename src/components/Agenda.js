import React, { Fragment } from 'react';
import TablaProyectos from './TablaProyectos';
import { Link } from 'react-router-dom';

const Agenda = () => {

    return (
        <Fragment>

            < header className="header">
                <div className="container barra">
                    
                    <div className="campo">
                    <h1>My Projects</h1>
                    </div>

                    <div className="campo">
                    <Link to={'/nuevo-proyecto'} className="btn btn-danger text-right">
                        + Add Project
                </Link>
                </div>

                </div>

            </header >

            <div className="container">

                <TablaProyectos />
            </div>
        </Fragment>
    );
}

export default Agenda;