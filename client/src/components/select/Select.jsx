const Select = ({name , values , handleChange})=>{
    return(

        <select key={name} name={name} onChange={handleChange}>
            {values.map((value)=>{return <option value={value}>{value}</option>})}
        </select>

    )
 }
export default Select;