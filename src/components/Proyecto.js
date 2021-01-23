import React, { useContext} from 'react';
import agendaContext from '../context/agenda/agendaContext';
import { Link } from 'react-router-dom';


const Proyecto = ({ proyecto }) => {

    //Extraigo el state de agenda
    const AgendaContext = useContext(agendaContext);
    const { eliminarProyecto, proyectoActual, asociadoPorId,managerPorId } = AgendaContext;

    let date = new Date(proyecto.fecha);
    let d = date.getDate();
    if (d < 10) { d = '0' + d; }
    let m = date.getMonth() + 1;
    if (m < 10) { m = '0' + m; }
    let y = date.getFullYear();
    let h = date.getHours();
    if (h < 10) { h = '0' + h; }
    let min = date.getMinutes();
    if (min < 10) { min = '0' + min; }


    return (
        <tr>
            <td><p>{proyecto.nombre}</p><p>{`Creation date: ` + d + "/" + m + "/" + y + " " + h + ":" + min}</p></td>

            <td>{managerPorId(proyecto.manager)}</td>

            <td>{asociadoPorId(proyecto.asociado)}</td>
            
            <td className="status"><p>{proyecto.estado}</p></td>

            <td>


                
                    <Link to={'/editar-proyecto'} className="btn btn-warning btn-edit" onClick={() => proyectoActual(proyecto)}>
                        Edit
                        <i className="fas fa-edit"></i>
                    </Link>
                    
                

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarProyecto(proyecto._id)}
                >Delete<i className="fas fa-trash"></i></button>
            </td>
        </tr>
    );
}

export default Proyecto;