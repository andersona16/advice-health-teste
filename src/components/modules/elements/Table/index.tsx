import { FC } from "react";
import { Table } from 'react-bootstrap';
import './custom.scss'

const TableContainer: FC = () => {
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Concluido</th>
                        <th>Nome Completo</th>
                        <th>CPF</th>
                        <th>Data de nascimento</th>
                        <th>Endereço</th>
                        <th>Data da consulta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                    </tr>

                </tbody>
            </Table>
        </>
    )
}

export { TableContainer }