'use client'

import React, {useState} from 'react';
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { Form, Button, Flex } from 'antd';
import { message } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';

import TextField from "./components/Form/TextField";
import { generateGraphFromWikiUrl } from "./services/scraper";

const wikipediaUrlRegex = /^https?:\/\/(www\.)?(en|[a-z]{2})\.wikipedia\.org\/wiki\/(.*?)+/i;

const schema = yup
    .object({
        url: yup.string()
            .matches(wikipediaUrlRegex, 'Invalid Wikipedia URL')
            .required('URL is required'),
    })
    .required()

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (formData) => {
        const { url } = formData;

        try {
            setIsLoading(true);
            const res = await generateGraphFromWikiUrl(url);

            if (!res.ok) {
                throw new Error('Failed to fetch the graph image');
            }

            // Use blob response to download the image file
            const blob = await res.blob();
            const objectUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = objectUrl;
            link.download = 'graph.png';
            document.body.appendChild(link);
            link.click();

            // Clean up the temp link
            document.body.removeChild(link);
            window.URL.revokeObjectURL(objectUrl);

            // Notification
            message.success('Graph has been generated and downloaded successfully!');

            // Reset URL input
            reset();
        } catch (e) {
            console.error('An error occurred during graph generation: ', e.message);
            message.error('Failed to generate the graph. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Flex align="center" gap="middle" vertical>
            <h1>Graph Generation</h1>

            <Form
                layout="vertical"
                style={{ width: 500 }}
                onFinish={handleSubmit(onSubmit)}
            >
                <TextField
                    label="Wikipedia URL:"
                    control={control}
                    name="url"
                    errors={errors}
                    placeholder="Please enter a Wikipedia URL"
                />

                <Form.Item label={null} style={{ textAlign: 'center' }}>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Generate
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    );
}