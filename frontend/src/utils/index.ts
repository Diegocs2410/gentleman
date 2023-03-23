import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  name: Yup.string().required('Ingrese su nombre'),
  email: Yup.string()
    .email('Ingrese un correo electrónico válido')
    .required('Ingrese su correo electrónico'),
  password: Yup.string().required('Ingrese su contraseña')
})
