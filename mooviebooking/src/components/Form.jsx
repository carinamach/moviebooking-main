import { useFormik } from 'formik';


function validateNameAndPhone(values) {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Fältet är mandatory';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    } else if (values.firstName === "stefan") {
        errors.firstName = 'Ej valid name';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (!/^(\+46)?\d{9}$/.test(values.phone)) {
        errors.phone = 'Phonenumber needs to be 10 digits';
    }    
    return errors;

}


function Form() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: ''
        },
        validate: validateNameAndPhone,
        onSubmit: values => {
            // fetch  method = post -> JSON API
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <section className="contact" id="contact">
                <h1>Bokningsformulär</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="">
                        <label htmlFor="firstName">First name:</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </div>
                    {formik.errors.firstName ? <span className="error">{formik.errors.firstName}<br/></span> : null}
                    <br />
                    <div className="row">
                        <label htmlFor="lastName">Last Name: </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </div>
                    {formik.errors.lastName ? <div className="error">{formik.errors.lastName}<br/></div> : null}
                    <br />

                    <div className="row">
                        <label htmlFor="phone">Phone Number: </label>
                        <input
                            id="phone"
                            name="phone"
                            type="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                    </div>
                    {formik.errors.phone ? <div className="error">{formik.errors.phone}<br/></div> : null}
                    <br />
                    <button className="sendButton" type="submit">Boka</button>
                </form>
            </section>
        </>
    )
}

export default Form;

