import { useState } from "react";
import { useEffect } from "react";
import { Teachers } from "./teachers";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";

export const Dashboard = ({ teachers, setTeachers, pageNumber, setPageNumber, location }) => {
    const [gender, setGender] = useState("none");
    const [sort, setSort] = useState("none");
    const navigate = useNavigate();

    const table = {
        margin: "auto",
        marginTop: "50px",
    }

    const head = {
        padding: "10px 100px",
        borderBottom: "1px solid gray",
    }

    const button = {
        margin: "10px 5px",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
    }

    useEffect(() => {
        getData();
    }, [pageNumber, gender, sort]);

    const getData = async() => {
        await fetch(`http://localhost:2345/teacher?page=${pageNumber}&&size=5&&gender=${gender}&&sort=${sort}`)
        .then((d) => d.json())
        .then((res) => {
            setTeachers(res);
        });
    }

    const handlePrev = () => {
        if(pageNumber > 1) {
            setPageNumber((p) => {
                return p-1;
            });
        }
    }

    const handleNext = () => {
        if(pageNumber < 2) {
            setPageNumber((p) => {
                return p+1;
            });
        }
    }

    const handleGender = (e) => {
        navigate(`?page=1&&size=5&&gender=${e.target.value}`);
        setGender(e.target.value);
    }

    const handleSort = (e) => {
        if(gender !== "none") {
            navigate(`?page=1&&size=5&&gender=${gender}&&sort=${e.target.value}`);
        }
        else {
            navigate(`?page=1&&size=5&&sort=${e.target.value}`);
        }
        setSort(e.target.value);
    }

    return(
        <>
            <table style={table}>
                <thead>
                    <tr>
                        <th style={head}>Name</th>
                        <th style={head}>Gender</th>
                        <th style={head}>Age</th>
                        <th style={head}>No. of classes</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <input type="text" placeholder="Search" />
                        </td>
                        <td>
                            <select onChange={handleGender}>
                                <option value="none">All</option>
                                
                                <option value="Male">
                                    Male
                                </option>
                               
                                <option value="Female">Female</option>
                            </select>
                        </td>
                        <td>
                            <select onChange={handleSort}>
                                <option value="none">All</option>
                                <option value="ascending">Low to high</option>
                                <option value="descending">High to low</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="contentBody">
                {teachers.map((teacher) => (
                    <Link className="link" to={`/dashboard/${teacher._id}`}>
                        <Teachers key={teacher._id} name={teacher.name} gender={teacher.gender} age={teacher.age} classes={teacher.class_id.length} />
                    </Link>
                ))}
            </div>
            
            <Link to='?page=1&&size=5'>
                <button style={button} onClick={handlePrev}>1</button>
            </Link>
            <Link to="?page=2&&size=5">
                <button style={button} onClick={handleNext}>2</button>
            </Link>
        </>
    )
};