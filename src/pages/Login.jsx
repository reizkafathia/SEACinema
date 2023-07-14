import React, { useState } from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SignIn } from '../services/Firebase';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data
    try {
      await SignIn(email, password)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="bg-purple-950 min-h-screen">
      <Header />
      <section className="flex justify-center items-center h-screen">
        <div className="w-[429px] h-[405px] relative bg-neutral-200 rounded-[30px]">
          <div className="left-[168.50px] top-[42px] absolute text-fuchsia-950 text-[30px] font-bold">
            Log in
          </div>
          <div className="left-[116px] top-[98px] absolute text-stone-900 text-[17px] font-medium">
            Email
          </div>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="w-[215px] h-[36px] left-[107px] top-[126px] absolute bg-zinc-300 rounded-lg border-fuchsia-950 px-3"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="left-[115px] top-[165px] absolute text-red-500 text-[13px] font-medium">
              This field is required
            </span>
          )}
          <div className="left-[116px] top-[186px] absolute text-stone-900 text-[17px] font-medium">
            Password
          </div>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-[215px] h-[36px] left-[107px] top-[215px] absolute bg-zinc-300 rounded-lg border-fuchsia-950 px-3"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="left-[115px] top-[255px] absolute text-red-500 text-[13px] font-medium">
              This field is required
            </span>
          )}
          <div className="left-[97px] top-[350px] absolute">
            <span className="text-stone-500 text-[13px] font-medium">
              Don’t have an account?{" "}
            </span>
            <NavLink
              to="/register"
              className="text-fuchsia-950 text-[13px] font-medium underline cursor-pointer hover:font-bold"
            >
              Register here.
            </NavLink>
          </div>
          <button
            type="submit"
            className="w-[107px] h-[36px] left-[161px] top-[288px] absolute bg-fuchsia-950 rounded-lg border-fuchsia-950 text-white font-medium cursor-pointer hover:bg-fuchsia-900"
            onClick={handleSubmit(onSubmit)}
          >
            Sign in
          </button>
        </div>
      </section>
    </div>
  );
}

export default Login