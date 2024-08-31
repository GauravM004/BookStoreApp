import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className=" w-[500px] border-[2px] shadow-md p-5 rounded-lg  bg-slate-700">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-md btn-circle btn-ghost relative left-96 ">
                  ✕
                </button>
              </Link>

              <h3 className="font-bold text-lg">Signup!</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  className=" w-80 px-3 py-1 border rounded-lg outline-none "
                  type="text"
                  placeholder=" Enter Your Full Name"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  className=" w-80 px-3 py-1 border rounded-lg outline-none "
                  type="email"
                  placeholder=" Enter Your Email"
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
                <span>Password</span>
                <br />
                <input
                  className="w-80 px-3 py-1 border rounded-lg outline-none"
                  type="Password"
                  placeholder=" Enter Your Password"
                  {...register("Password", { required: true })}
                />
                 <br />
              {errors.Password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-2">
                <button className=" py-1 px-3 rounded-lg bg-pink-500 text-white hover:bg-pink-900 duration-200">
                  Signup
                </button>
                <p className="mt-1">
                  Have Account?
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    {" "}
                    Login!
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
