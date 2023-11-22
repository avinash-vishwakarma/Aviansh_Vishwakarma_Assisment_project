import ValidationMessage from "@/Components/ValidationMessage";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { addDetailsValidationSchema } from "@/ValidationSchemas/addDetailSchema";
import { Head } from "@inertiajs/react";
import { useFormik } from "formik";
import { router } from "@inertiajs/react";
import { useEffect } from "react";

export default function Dashboard(props) {
    const submitHandler = (values, action) => {
        router.post("/store-details", values);
    };

    const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        setErrors,
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            contactName: "",
            phoneNumber: "",
            website: "",
            address: "",
        },
        validationSchema: addDetailsValidationSchema,
        onSubmit: submitHandler,
    });

    const invalidClass =
        "border-red-500 text-red-600 bg-red-100 focus:outline-none focus:ring focus:border-blue-300";

    useEffect(() => {
        if (Object.keys(props.errors).length) {
            setErrors(props.errors);
        }
    }, [props.errors]);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add New Business Detail
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                {/* <!-- Name Field --> */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-600 text-sm font-medium"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        className={`mt-1 p-2 w-full border rounded-md ${
                                            errors.name && invalidClass
                                        }`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <ValidationMessage error={errors.name} />
                                </div>
                                {/* <!-- Email Field --> */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-600 text-sm font-medium"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`mt-1 p-2 w-full border rounded-md ${
                                            errors.email && invalidClass
                                        }`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <ValidationMessage error={errors.email} />
                                </div>

                                {/* <!-- Contact Name Field --> */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="contactName"
                                        className="block text-gray-600 text-sm font-medium"
                                    >
                                        Contact Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        name="contactName"
                                        className={`mt-1 p-2 w-full border rounded-md ${
                                            errors.contactName && invalidClass
                                        }`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.contactName}
                                    />
                                    <ValidationMessage
                                        error={errors.contactName}
                                    />
                                </div>

                                {/* <!-- Phone Number Field --> */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block text-gray-600 text-sm font-medium"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className={`mt-1 p-2 w-full border rounded-md ${
                                            errors.phoneNumber && invalidClass
                                        }`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phoneNumber}
                                    />
                                    <ValidationMessage
                                        error={errors.phoneNumber}
                                    />
                                </div>

                                {/* <!-- Website Field --> */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="website"
                                        className="block text-gray-600 text-sm font-medium"
                                    >
                                        Website
                                    </label>
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        className={`mt-1 p-2 w-full border rounded-md ${
                                            errors.website && invalidClass
                                        }`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.website}
                                    />
                                    <ValidationMessage error={errors.website} />
                                </div>

                                {/* <!-- Address Field (Textarea) --> */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="address"
                                        className="block text-gray-600 text-sm font-medium"
                                    >
                                        Address
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        rows="4"
                                        className={`mt-1 p-2 w-full border rounded-md ${
                                            errors.address && invalidClass
                                        }`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                    ></textarea>

                                    <ValidationMessage error={errors.address} />
                                </div>

                                {/* <!-- Submit Button --> */}
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
