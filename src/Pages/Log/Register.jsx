import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="hero min-h-{93vh} ">
                <div className="hero-content grid">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            <div className="flex">
                                <p>Already have account</p>
                                <Link className="btn-link" to={"/login"}>
                                    login
                                </Link>
                            </div>
                            <div className="grid items-center gap-4 mt-4">
                                <button className="shadow-xl flex items-center  gap-2">
                                    <FaGoogle></FaGoogle>{" "}
                                    <span>Login with google</span>
                                </button>
                                <button className="shadow-xl flex items-center  gap-2">
                                    <FaGithub></FaGithub> Login with github
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
