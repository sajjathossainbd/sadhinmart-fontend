import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../hooks/useAuth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { signIn, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await signIn(data.email, data.password).then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        reset(),
          Swal.fire({
            icon: "success",
            title: "Account Login Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        navigate(from, { replace: true });
      });
    } catch {
      console.log(errors);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="lg:w-1/2 max-sm:mx-6 mx-auto mt-4 card shrink-0  shadow-2xl bg-base-100 pt-10 mb-10">
        <h2 className="text-4xl font-bold mb-6 text-center font-playfair">
          Login your account
        </h2>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  name="password"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute top-4 right-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={loading}
                type="submit"
                className="bg-rose-500 w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <ImSpinner9 className="animate-spin m-auto" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* OR CONTINUE WITH */}
        <div className="card-body pt-0">
          {/* Have An Accout */}
          <div className="form-control mt-6 ">
            <SocialLogin />
            <p>
              Dont’t Have An Account ?
              <Link to={"/register"} className="btn btn-link font-playfair">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
