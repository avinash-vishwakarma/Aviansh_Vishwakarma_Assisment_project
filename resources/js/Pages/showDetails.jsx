import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ShowDetails(props) {
    console.log(props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Showing all details
                </h2>
            }
        >
            <div className="pt-2">
                <div className="max-w-1 mx-auto sm:px-6 lg:px-8">
                    <table class="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-b border-gray-300">
                                    Name
                                </th>
                                <th class="py-2 px-4 border-b border-gray-300">
                                    Address
                                </th>
                                <th class="py-2 px-4 border-b border-gray-300">
                                    Email
                                </th>
                                <th class="py-2 px-4 border-b border-gray-300">
                                    Website
                                </th>
                                <th class="py-2 px-4 border-b border-gray-300">
                                    Contact Name
                                </th>
                                <th class="py-2 px-4 border-b border-gray-300">
                                    Contact Number
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.details.data.map(
                                ({
                                    id,
                                    name,
                                    address,
                                    email,
                                    contactName,
                                    website,
                                    phoneNumber,
                                }) => {
                                    return (
                                        <tr key={id} className="border-b-2 ">
                                            <td className="border-r-2 p-2">
                                                {name}
                                            </td>
                                            <td className="border-r-2 p-2">
                                                {address}
                                            </td>
                                            <td className="border-r-2 p-2">
                                                {email}
                                            </td>
                                            <td className="border-r-2 p-2">
                                                {website}
                                            </td>
                                            <td className="border-r-2 p-2">
                                                {contactName}
                                            </td>
                                            <td className="p-2">
                                                {phoneNumber}
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>

                    <div className="mt-2">
                        <LinkButton
                            disable={!props.details.prev_page_url}
                            href={props.details.prev_page_url}
                            className="mr-2"
                        >
                            {"<"} Previous
                        </LinkButton>
                        <LinkButton
                            disable={!props.details.next_page_url}
                            href={props.details.next_page_url}
                        >
                            {" "}
                            Next {">"}
                        </LinkButton>
                    </div>
                </div>
            </div>

            <Head title="Show Details" />
        </AuthenticatedLayout>
    );
}
