import './form.css'

const Form = ({ handleChange, handleSubmit, activity, errors }) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label className='form-label' htmlFor="countryName">countryName: </label>
                <input className='form-input' type="text" name="countryName" value={activity.countryName} onChange={handleChange} />
                {errors.countryName !== '' && <p className='form-errors'>{errors.countryName}</p>}

                <label className='form-label' htmlFor="name">name: </label>
                <input className='form-input' type="text" name="name" value={activity.name} onChange={handleChange} />
                {errors.name !== '' && <p className='form-errors'>{errors.name}</p>}

                <label className='form-label' htmlFor="difficulty">difficulty: </label>
                <input className='form-input' type="text" name="difficulty" value={activity.difficulty} onChange={handleChange} />
                {errors.difficulty !== '' && <p className='form-errors'>{errors.difficulty}</p>}

                <label className='form-label' htmlFor="duration">duration: </label>
                <input className='form-input' type="text" name="duration" value={activity.duration} onChange={handleChange} />
                {errors.duration !== '' && <p className='form-errors'>{errors.duration}</p>}

                <label className='form-label' htmlFor="season">season: </label>
                <input className='form-input' type="text" name="season" value={activity.season} onChange={handleChange} />
                {errors.season !== '' && <p className='form-errors'>{errors.season}</p>}

                <button className='form-button' type='submit' >Submit </button>
            </form>
        </div>

    )

}



export default Form;