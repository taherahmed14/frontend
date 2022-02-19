import "./dashboard.css";

export const Teachers = ({ name, gender, age, classes }) => {
    const avatar = {
        height: "20px",
    }

    return (
        <>
            <div className="teacherDetail">
                <div>
                    {gender === "Male" ?
                        <img style={avatar} src="https://img.icons8.com/external-color-for-better-life-royyan-wijaya/64/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-12.png"/>
                        :
                        <img style={avatar}  src="https://img.icons8.com/external-color-for-better-life-royyan-wijaya/64/000000/external-avatar-avatar-ii-color-for-better-life-royyan-wijaya-15.png"/>
                    }
                    {name}
                </div>
                <div>{gender}</div>
                <div>{age}</div>
                <div>{classes}</div>
            </div>
        </>
    )
};