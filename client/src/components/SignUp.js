import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
function SignUp() {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate();

    function handleSubmit(e) {
        console.log(formData)
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then((resp) => console.log(resp.json))
            .then(() => navigate('/create'))
    }

    return (
        <>
            <section className="text-center text-lg-start">
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card cascading-right" style={{
                                background: "hsla(0, 0%, 100%, 0.55)",
                                backdropFilter: "blur(30px)"
                            }}>
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Sign up now</h2>
                                    <form onSubmit={handleSubmit}>
                                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                        <div className="row">
                                            <div className="form-outline mb-4">
                                                <input onChange={handleChange} className="form-control" placeholder="username" type="text" name="username" value={formData.username}></input><br /><br />
                                            </div>

                                        </div>

                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <input onChange={handleChange} className="form-control" placeholder="email" type="text" name="email" value={formData.email}></input><br /><br />
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4">
                                            <input onChange={handleChange} className="form-control" placeholder="password" type="password" name="password" value={formData.password}></input><br /><br />
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button id="button" type="submit" className="btn btn-primary btn-block mb-4">
                                            Sign up
                                        </button>
                                        <p>Already have an account? <a href="/login" class="link-info">Login here</a></p>

                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SignUp;