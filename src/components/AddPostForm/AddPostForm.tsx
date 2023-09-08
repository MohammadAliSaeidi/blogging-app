"use client";

import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {HtmlEditorComponent} from "@/components/AddPostForm/HtmlEditorComponent";

export default function AddPostForm() {
    const methods = useForm<PostFormData>();

    const onSubmit = methods.handleSubmit((data) => console.log(data));

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <input {...methods.register("title")} type={"text"} placeholder={"title"}/>
                <HtmlEditorComponent name="content"/>
                <input type="submit"/>
            </form>
        </FormProvider>
    );
}