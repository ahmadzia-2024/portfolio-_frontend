import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signUpSchema, TSignUpSchema } from "@/types";

export default function AddUserPopup({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    try {
      setLoading(true);
      setMessage("");

      // Replace with your API endpoint
      const response = await axios.post("/api/users", data);
      setMessage("User created successfully!");
      reset(); // Reset form
    } catch (error) {
      setMessage("Failed to create user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New User</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("fullname")}
              type="text"
              placeholder="Full Name"
              className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.fullname
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-600"
              }`}
            />
            {errors.fullname && (
              <p className="text-sm text-red-500 mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-600"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-600"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-600"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creating User..." : "Create User"}
          </button>
        </form>

        {/* Message */}
        {message && <p className="text-center mt-4 text-sm">{message}</p>}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
