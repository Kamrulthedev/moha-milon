import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {


    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()



    const handlerLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

       // create User in firebase
        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
           navigate('/')
          })
          .catch(error =>{
            console.error('Error signing in:', error.code, error.message);
          })
    }

    const handlerGoogleSingIn = () =>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen  bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body w-96" onSubmit={handlerLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>New Here? Please <Link to={'/Register'}>
                            <button className="btn btn-link">Register</button>
                        </Link></p>
                        <p><button onClick={handlerGoogleSingIn} className="btn btn-ghost">Google</button></p>
                        </form>

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
