import { Form, Input, Typography } from 'antd';
import { Control, Controller, FieldValues } from 'react-hook-form';

type Props<T extends Partial<FieldValues>> = {
    control: Control<any>;
    name: string;
    label?: string;
    containerClassName?: string;
    errors: any;
    placeholder?: string;
};

const { Text } = Typography;

const TextField = <T extends Partial<FieldValues>>({
    control,
    name,
    label,
    placeholder,
    containerClassName,
    errors,
    rest
}: Props<T>) => {
    return (
        <Form.Item
            label={label}
            className={`custom-text-field ${containerClassName || ''}`}
            {...rest}
        >
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Input type="text" placeholder={placeholder} {...field} />
                )}
            />

            {errors?.[name] && (
                <Text type="danger">{errors?.[name]?.message}</Text>
            )}
        </Form.Item>
    );
};

export default TextField;