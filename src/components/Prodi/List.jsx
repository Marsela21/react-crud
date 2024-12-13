import React, {useEffect, useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";

export default function List(){
    //state prodi
    const [prodi, setProdi] = useState([]);
    //useeffect

    useEffect( () => {
        axios.get("https://academic-mi5a.vercel.app/api/api/prodi")
        .then( response => {
            console. log(response);
            setProdi(response.data.data)//disesuaikan dari inspect
        })
    }, [] )
    return (
        <>
        <h2>List Prodi</h2>
        <NavLink to="/prodi/create" className="btn btn-primary mb-3">
            Create
        </NavLink>
        <table className="table">
            <thead>
                <tr>
                    <th>Nama Prodi</th>
                    <th>Kaprodi</th>
                    <th>Singkatan</th>
                    <th>Fakultas</th>
                </tr>
            </thead>
            <tbody>
                {prodi.map( (data) => (
                <tr key={data.id}>
                    <td>{data.nama}</td>
                    <td>{data.kaprodi}</td>
                    <td>{data.singkatan}</td>
                    <td>{data.fakultas_id}</td>
                </tr>
                ) )}
            </tbody>
        </table>
        </>
    )
}