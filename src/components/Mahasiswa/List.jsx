import React, {useEffect, useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
export default function List(){
    //state fakultas
    const [mahasiswa, setMahasiswa] = useState([]);
    //useeffect

    useEffect( () => {
        axios.get("https://academic-mi5a.vercel.app/api/api/mahasiswa")
        .then( response => {
            console. log(response);
            setMahasiswa(response.data.data)//disesuaikan dari inspect
        })
    }, [] )
    return (
        <>
        <h2>List Mahasiswa</h2>
        <NavLink to="/mahasiswa/create" className="btn btn-primary mb-3">
            Create
        </NavLink>
        <table className="table">
            <thead>
                <tr>
                    <th>Nama Mahasiswa</th>
                    <th>npm</th>
                    <th>email</th>
                    <th>hp</th>
                    <th>alamat</th>
                    <th>Prodi</th>
                    <th>Fakultas</th>
                </tr>
            </thead>
            <tbody>
                {mahasiswa.map( (data) => (
                <tr key={data.id}>
                    <td>{data.nama}</td>
                    <td>{data.npm}</td>
                    <td>{data.email}</td>
                    <td>{data.hp}</td>
                    <td>{data.alamat}</td>
                    <td>{data.prodi.nama}</td>
                    <td>{data.prodi.fakultas.nama}</td>
                </tr>
                ) )}

            </tbody>
        </table>
        </>
    )
}