import React from "react";
import { Controller } from "react-hook-form";
import { FormGroup, Input } from "reactstrap";
export const InputField = ({
    placeholder,
    control,
    name,
    type,
    errors,
}: any) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (

                <FormGroup>
                    <Input
                        {...field}
                        placeholder={placeholder}
                        type={type}
                    />
                    <p className="text-red-500 italic">
                        {errors[name]?.message}
                    </p>
                </FormGroup>
            )}
        />
    );
};

export const RadioField = ({ value, control, name }: any) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <FormGroup>
                    <Input
                        {...field}
                        name={name}
                        value={value}
                        id={value}
                        type="radio"
                    />
                    <label className="px-2" htmlFor={value}>
                        {value}
                    </label>
                </FormGroup>
            )}
        />
    );
};
