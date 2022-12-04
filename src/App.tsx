import React, { useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField, RadioField } from "./input/InputField";

type Profile = {
    name: string;
    age: number;
    description: string;
    website: string;
    gender: string;
};

function App() {
    const schema = yup.object().shape({
        name: yup.string().required(),
        age: yup.number().required().min(16).max(50).integer(),
        website: yup.string().notRequired().url(),
        description: yup.string().required(),
        gender: yup.string().required(),
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Profile>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: Profile) => {
        if (data) {
            console.log(`Name : ${data.name} Age : ${data.age} Link Facebook : ${data.website} Description : ${data.description} Gender : ${data.gender}`)
        }
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-1/3 border-[0.4px] py-14 px-8 shadow-lg shadow-indigo-500/40"
            >
                <h3 className="text-center">FORM</h3>
                <InputField
                    placeholder="User Name"
                    control={control}
                    name="name"
                    type="text"
                    errors={errors}
                    id='name'
                />
                <InputField
                    placeholder="Age"
                    control={control}
                    name="age"
                    type="text"
                    errors={errors}
                />
                <InputField
                    placeholder="Link Facebook"
                    control={control}
                    type="url"
                    name="website"
                    errors={errors}
                />

                <InputField
                    placeholder="Description"
                    control={control}
                    type="textarea"
                    name="description"
                    errors={errors}
                />
                <div>
                    <RadioField
                        control={control}
                        name="gender"
                        value="Female"
                        errors={errors}
                    />

                    <RadioField
                        control={control}
                        name="gender"
                        value="Male"
                        errors={errors}
                    />

                    <RadioField
                        control={control}
                        name="gender"
                        value="Other"
                        errors={errors}
                    />
                </div>
                <p className="text-red-500 italic">{errors.gender?.message}</p>
                <Button color="info" className="mt-8 text-gray-500">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default App;
