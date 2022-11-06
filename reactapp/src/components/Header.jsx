import React from 'react'

const Header = (props) => {
    let str = "React JS Tutorial - "
    const object = {
        name: "React JS",
        text: "Web App Course for Beginners"
    }
  return (
    <>
        
        <div>
            <h1>React JS Web Application</h1>
            <p>Course: {str} {props.name} {props.text}</p>
            <p> {object.name} {object.text} ${props.price} </p>
            <MyAllHeaders value = {props.price} />
            <SubHeader />
        </div>
    
    </>
  )
}

const SubHeader = () => {
    return(
        <div>
            <h4>Next tutorials</h4>
            
        </div>
    );
}

////export components to use in other files to use export keyword
export const MyAllHeaders = ({ value }) => <h3>Mobile App -  ${value}</h3>
export const MyAllHeaders2 = ({name, price}) => <h3>Web App {name} - ${price} </h3>

//export components to use in other files in that ways
//export {MyAllHeaders, MyAllHeaders2}

export default Header