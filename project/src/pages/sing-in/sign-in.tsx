import { ChangeEvent, MouseEvent, useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authorize } from '../../store/api-action';
import { isValidEmail, isValidPassword } from './helper';
import { toast } from 'react-toastify';
import { isAuthorized } from '../../store/user-process/selectors';
import { Navigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
}

export default function SignInScreen() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthorized);

  const validate = ({ email, password }: FormData) => {
    if (!isValidEmail(email)) {
      throw Error('non valid email');
    }

    if (!isValidPassword(password)) {
      throw Error('password must have at least one alphabet and one digit');
    }
  };

  const handleSignInClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    try {
      validate(formData);
      dispatch(authorize(formData));
    } catch (err) {
      if (err instanceof Error) {
        toast.warn(err.message);
      }
    }
  };

  const handleChangeLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setFormData({
      ...formData,
      email: evt.target.value,
    });
  };

  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setFormData({
      ...formData,
      password: evt.target.value,
    });
  };

  if (isAuth) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={formData.email} onChange={handleChangeLogin} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={formData.password} onChange={handleChangePassword} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleSignInClick}>Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>);
}
