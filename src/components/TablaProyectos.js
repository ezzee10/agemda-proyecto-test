import React, { useContext, useEffect, Fragment } from 'react';
import agendaContext from '../context/agenda/agendaContext';
import Proyecto from './Proyecto';
import ReactPaginate from 'react-paginate';

const TablaProyectos = () => {

    //Extraigo los proyectos del state inicial
    const AgendaContext = useContext(agendaContext);
    const { proyectos, consultarManagers, consultarAsignados, cantidadPaginas, changePaginaActual, obtenerProyectosPorPagina, paginaActual } = AgendaContext;


    //Obtengo todos los proyectos al cargar el componente
    useEffect(() => {
        obtenerProyectosPorPagina();
        consultarManagers();
        consultarAsignados();
    //eslint-disable-next-line
    }, [paginaActual]);

    const handlePageClick = (e) => {
        const selectedPage = e.selected + 1;
        changePaginaActual(selectedPage);
    };

    return (

        <Fragment>

            {proyectos.length === 0 ? <p>There are no projects, press add project to create one</p> :

                <div className="container">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Project info</th>
                                <th scope="col">Project Manager</th>
                                <th scope="col">Assigned to</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>



                            {proyectos.map(proyecto => (

                                <Proyecto
                                    key={proyecto._id}
                                    proyecto={proyecto}
                                />

                            ))}

                        </tbody>
                    </table>

                    <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={cantidadPaginas}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                </div>

            }

        </Fragment>


    );
}

export default TablaProyectos;