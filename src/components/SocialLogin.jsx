import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn, loading, setLoading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogle = () => {
    setLoading(true);
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center font-playfair">
        Or Continue With
      </h2>
      <div className="flex items-center justify-center gap-6 text-5xl">
        <button disabled={loading} onClick={handleGoogle}>
          <FcGoogle className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
