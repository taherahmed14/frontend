import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./dashboard.css";

export const Teacher = () => {
    const { id } = useParams();
    const [teacher, setTeacher] = useState([]);
    const [classes, setClasses] = useState([]);

    const avatar = {
        height: "20px",
    }

    useEffect(() => {
        getData();
    }, []);

    const getData = async() => {
        await fetch(`http://localhost:2345/teacher/${id}`)
        .then((d) => d.json())
        .then((res) => {
            setTeacher(res);
            setClasses(res.class_id);
        });
    }

    console.log(classes);

    return(
        <>
            <div className="teacherDetail">
                <div>
                    {teacher.gender === "Male" ?
                        <img style={avatar} src="https://img.icons8.com/external-color-for-better-life-royyan-wijaya/64/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-12.png"/>
                        :
                        <img style={avatar}  src="https://img.icons8.com/external-color-for-better-life-royyan-wijaya/64/000000/external-avatar-avatar-ii-color-for-better-life-royyan-wijaya-15.png"/>
                    }
                    {teacher.name}
                </div>
                <div>{teacher.gender}</div>
                <div>{teacher.age}</div>
            </div>
            {classes.map((classes) => (
                    <div className="classDetail">
                        <div>{classes.grade}</div>
                        <div>{classes.section}</div>
                        <div>{classes.subject}</div>
                    </div>
            ))}
        </>
    )
}