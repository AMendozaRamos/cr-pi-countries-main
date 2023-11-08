import './create.css'
import { useEffect, useState } from "react";
import validation from '../../components/form/validation';
import Form from '../../components/form/Form';
import { postActivity } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const Create = () => {

    const dispatch = useDispatch()
    const [activity, setActivity] = useState({ countryName:"", name: "", difficulty: "", duration: "", season: "" })
    const [errors, setErrors] = useState({ countryName:"" , name: "", difficulty: "", duration: "", season: "" })

    const handleChange = (event) => {
        setActivity({ ...activity, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (activity.countryName !="" && activity.name != "" && activity.difficulty != "" && activity.duration != "" && activity.season != "" &&
            errors.countryName != "" && errors.name != "" && errors.difficulty != "" && errors.duration != "" && errors.season != "" 
          ){
            dispatch(postActivity(activity))
          }
      
    }
    useEffect(() => {
        if (activity.countryName !==''||activity.name !== '' || activity.difficulty !== '' || activity.duration !== '' || activity.season !== '') {
            setErrors(validation(activity))
        }
    }, [activity])



    return (
        <div>
            <h1>CREA UNA ACTIVIDAD</h1>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} activity={activity} errors={errors} />
        </div>

    )
}

export default Create;