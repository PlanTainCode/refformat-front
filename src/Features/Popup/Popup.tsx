import { FC, useState } from "react";

import './popup.scss';
import { Link } from "react-router-dom";

interface IPopupProps {
    openPopup: boolean;
    setOpenPopup: (data: boolean) => void;
}

const Popup:FC<IPopupProps> = ({openPopup, setOpenPopup}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ name: '', phone: '', email: '' });
    
    const validatePhone = (phone: string) => {
        const phoneRegex = /\+?[0-9]{10,}/; // ваше регулярное выражение для телефона
        return phoneRegex.test(phone);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^.+@.+\..+$/; // ваше регулярное выражение для электронной почты
        return emailRegex.test(email);
    };

    const handleBlur = (field: string) => {
        let errorsCopy:any = { ...errors };
        if (field === 'name' && name === '') {
            errorsCopy.name = 'Имя не может быть пустым';
        } else if (field === 'phone' && !validatePhone(phone)) {
            errorsCopy.phone = 'Неправильный телефон';
        } else if (field === 'email' && !validateEmail(email)) {
            errorsCopy.email = 'Неправильный email';
        } else {
            errorsCopy[field] = '';
        }
        setErrors(errorsCopy);
    };

    const isFormValid = () => {
        return name !== '' && validatePhone(phone) && validateEmail(email);
    };

    const sendDataToBack = () => {
        console.log('Провалидировано')
        setTimeout(() => {
            setOpenPopup(false)
        }, 2000)
        
    };

    return (
        <div className={openPopup ? 'popup opened': 'popup'}>
            <div className="area"></div>
            <div className="body">
                <div className="close">
                    <div className="close-item" onClick={() => setOpenPopup(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M26 2L2 26M2 2L26 26" stroke="#ADADAD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="content">
                    <h3>Оплата вебинара “Виды сплинтов для работы с ВНЧС”</h3>

                    {/* <div className="form">
                        <div className="input">
                            <p>Имя</p>
                            <input type="text" />
                        </div>
                        <div className="input">
                            <p>Телефон</p>
                            <input type="tel"  />
                        </div>
                        <div className="input">
                            <p>Email</p>
                            <input type="email" />
                        </div>
                    </div> */}
                    <div className="form">
                        <div className="input">
                            <p>Имя</p>
                            <input type="text" className={errors.name ? 'error' : ''} value={name} onChange={(e) => setName(e.target.value)} onBlur={() => handleBlur('name')} />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className="input">
                            <p>Телефон</p>
                            <input type="tel" className={errors.phone ? 'error' : ''} value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={() => handleBlur('phone')} />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>
                        <div className="input">
                            <p>Email</p>
                            <input type="email" className={errors.email ? 'error' : ''} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleBlur('email')} />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                    </div>
                    <button onClick={isFormValid() ? sendDataToBack : undefined} className={isFormValid() ? '' : 'disabled'}>Оплатить</button>
                    {/* <button>Оплатить</button> */}

                    <p>Нажимая на кнопку “Оплатить”, я подтверждаю, что ознакомился и согласен с условиями <Link to='/privacy'>политики конфиденциальности</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Popup;
