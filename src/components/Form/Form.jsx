import { useState } from 'react'
import './Form.css'
import '../Button/Button.css'
import line from '../../assets/line.jpg'
   

function Form() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    repeatPassword: '',
    confirmPassword: false
  })

  function handleChange(e) {
    const { name, type, value, checked } = e.target; 
    setForm({
      ...form,
      [name]: type ===  'checkbox' ? checked : value
    });
  }

  function  btnContinue () {
        const { name, surname, phone, email, password, repeatPassword, confirmPassword } = form

    if (!name || !surname || !phone || !email || !password || !repeatPassword || !confirmPassword) {
      alert('Заполните все поля и подтвердите пароль!')
      return;
    }
   
    if (form.password !== form.repeatPassword) {
      alert('Проверьте, пожалуйста, пароль!')
      return
    }
     console.log(form)
      setForm({
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        repeatPassword: '',
        confirmPassword: false
      })
       alert('Форма отправлена!')
  }

  return (
    <div>
        <form className='form'>
              <input 
                  className='input-text'
                  type='text'
                  name='name'
                  placeholder='Имя'
                  value={form.name}
                  onChange={handleChange}
              />
              <input
                  className='input-text'
                  type='text'
                  name='surname'
                  placeholder='Фамилия'
                  value={form.surname}
                  onChange={handleChange}
              />
                <input
                  className='input-text'
                  type='text'
                  name='phone'
                  placeholder='Номер телефона'
                  value={form.phone}
                  onChange={handleChange}
              />
                <input
                  className='input-text'
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={form.email}
                  onChange={handleChange}
              />
                <input
                  className='input-text'
                  type='text'
                  name='password'
                  placeholder='Пароль'
                  value={form.password}
                  onChange={handleChange}
              />
                <input
                  className='input-text'
                  type='text'
                  name='repeatPassword'
                  placeholder='Повторите пароль'
                  value={form.repeatPassword}
                  onChange={handleChange}
              />
              <div className='input-checkbox'>
                  <input 
                  type="checkbox" 
                  id="toggleCheckbox"
                  className='demoToggleCheckbox'
                  name='confirmPassword'
                  checked={form.confirmPassword} 
                  onChange={handleChange} />
                  <label htmlFor="toggleCheckbox"></label>
                  <p className='checkbox-text'>Подтверждаю пароль</p>
              </div>

              <div>
                 <button type='button' onClick={btnContinue}>Продолжить</button>
             </div>
        </form>
    
           <img className='line' src={line} alt='линия'/>

         <div className='login-prompt'>
             <p className='login-prompt-text'>Уже есть аккаунт ?
             <a href='/' className='login-prompt-link'>Войти →</a></p>   
         </div>  
 </div>
  )
}

export default Form