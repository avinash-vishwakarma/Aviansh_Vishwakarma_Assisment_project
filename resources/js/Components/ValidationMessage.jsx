import React from "react";

const ValidationMessage = ({ error }) => {
    if (error) {
        return <div className="mt-2 text-sm text-red-600">{error}</div>;
    }

    return "";
};

export default ValidationMessage;
