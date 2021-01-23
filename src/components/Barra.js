import React from 'react';
import { Link } from 'react-router-dom';

const Agenda = ({titulo}) => {

    return (
        <header className="header">
        <div className="container barra">
                        
                        <div className="campo">
                        <h1>{titulo}</h1>
                        </div>
    
                        <div className="campo">
                        <Link to={'/'} className="btn btn-secondary btn-block">
                        Back
                                    </Link>
                    </div>
    
                    </div>
        </header>
    );
}

export default Agenda;