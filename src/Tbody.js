import React from 'react'

const Tbody = (props) => {
        const rowLimit = props.listItem
        const handleCredit= (e) => {
            // let credit = e.target.value
            // console.log("Credit:" + credit)
        }
        const handleGrade= (e) => {
            // let grade = e.target.value
            // console.log("Grade" + grade)
        }
        return(
            <>
            {
                Array.from({length: rowLimit}, (_,k) => (
                    <tr className = "list">
                        <td className = "tableText">Course {k + 1}</td>
                        <td ><input type = "number" className = "creditInput" placeholder = "0" step = "1" onInput = {handleCredit}/></td>
                        <td ><input type = "number" className = "gradeInput"  placeholder = "0" step = "0.01" min = "1" max = "4" onInput = {handleGrade} /></td>
                    </tr>
                ))
            }
            </>
        )
}
export default Tbody;