function Body(props) {
    console.log(props)
    return (
        <>
            <p>This is the body component</p>
            <p>Name : {props.Name}</p>
            <p>Phone : {props.phone}</p>
            <p>Age : {props.age}</p>
            <p>Department : {props.department}</p>
        </>
    )
}
export default Body