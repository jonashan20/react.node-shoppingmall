import React, { useState } from 'react'
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;


function CheckBox(props) {

    const [Checked, setChecked] = useState([])


    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value)

        const newChecked = [...Checked]

        if(currentIndex === -1) {
            newChecked.push(value) 
            } else {
                newChecked.splice(currentIndex, 1)
            }
            setChecked(newChecked)
            props.handleFilters(newChecked)

        }
    


    const renderCheckboxList =() => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox onChange={()=> handleToggle(value._id)} 
                checked={Checked.indexOf(value._id) === -1 ? false:true}/>
            <span>{value.name}</span>
        </React.Fragment>
    ))
    

    return (
        <div>
            <Collapse defaultActionKey={['0']} >
                <Panel header="Continents" key="1">
                    {renderCheckboxList()}
                  
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
