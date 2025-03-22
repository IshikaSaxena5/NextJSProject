import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { userSchema } from "../validation/userSchema";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function UserForm({ initialData, onSubmit }) {
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: initialData || {
      name: "",
      email: "",
      age: "",
      mobile: "",
      interest: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      try {
        setSubmitting(true);
        await onSubmit({ ...values, interest: values.interest.split(",") });

        // Show success message
        toast.success("User saved successfully!");

        // Redirect to list after 1.5 seconds
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong!");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (initialData) {
      formik.setValues({ ...initialData, interest: initialData.interest.join(", ") });
    }
  }, [initialData]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">{initialData ? "Edit User" : "Add User"}</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              formik.errors.name && formik.touched.name ? "border-red-500" : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              formik.errors.email && formik.touched.email ? "border-red-500" : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Age Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              formik.errors.age && formik.touched.age ? "border-red-500" : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.errors.age && formik.touched.age && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.age}</p>
          )}
        </div>

        {/* Mobile Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Mobile</label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter mobile number"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              formik.errors.mobile && formik.touched.mobile ? "border-red-500" : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
          {formik.errors.mobile && formik.touched.mobile && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.mobile}</p>
          )}
        </div>

        {/* Interests Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Interests</label>
          <input
            type="text"
            name="interest"
            placeholder="Enter interests (comma-separated)"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              formik.errors.interest && formik.touched.interest ? "border-red-500" : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.interest}
          />
          {formik.errors.interest && formik.touched.interest && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.interest}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="w-full mt-3 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
