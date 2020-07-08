const Columns = () =>{

    return [
        {
            Header: "Name",
            columns: [
                {
                    Header: "First Name",
                    accessor: "",
                },
                {
                    Header: "Last Name",
                    accessor: "lastName",
                },
            ],
        },
        {
            Header: "Info",
            columns: [
                {
                    Header: "Email",
                    accessor: "email",
                },
                {
                    Header: "Username",
                    accessor: "username",
                },
            ],
        },
    ];
    
} 
export default Columns