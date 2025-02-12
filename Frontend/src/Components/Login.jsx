import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}

            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark: text-black"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg dark: text-black">Login!</h3>
            {/* Email */}
            <div className="mt-4 space-y-2 ">
              <span className="dark: text-black dark:text-white">Email</span>
              <br />
              <input
                type="email"
                placeholder=" Enter Your Email"
                className=" w-80 px-3 py-1 border rounded-lg outline-none dark: text-black "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span className="dark: text-black dark:text-white">Password</span>
              <br />
              <input
                type="password"
                placeholder=" Enter Your Password"
                className="w-80 px-3 py-1 border rounded-lg outline-none dark: text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-2">
              <button className=" py-1 px-2 rounded-lg bg-pink-500 text-white hover:bg-pink-900 duration-200">
                Login
              </button>
              <p className="mt-1">
                Not registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  {" "}
                  Signup!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
