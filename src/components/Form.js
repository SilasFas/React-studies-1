import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const Form = () => {

    const schema = yup.object().shape({
        FullName: yup.string().required('Your full name is required'),
        Email: yup.string().email().required(),
        Age: yup.number().positive().integer().min(18).required(),
        Password: yup.string().min(4).max(20).required(),
        Confirm_Password: yup
            .string()
            .oneOf([yup.ref('Password'), null], "Passwords don't  Match")
            .required()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder="Full Name..." {...register('FullName')} />
            <p>{errors.FullName?.message}</p>
            <input type="text" placeholder="e-mail..." {...register('Email')} />
            <p>{errors.Email?.message}</p>
            <input type="number" placeholder="Age..." {...register('Age')} />
            <p>{errors.Age?.message}</p>
            <input type="password" placeholder="Password..." {...register('Password')} />
            <p>{errors.Password?.message}</p>
            <input type="password" placeholder=" Confirm password..." {...register('Confirm_Password')} />
            <p>{errors.Confirm_Password?.message}</p>
            <input type="submit" />
        </form>
    )
}