import { ChangeEvent, MouseEvent, useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useAppDispatch } from '../../hooks';
import { authorize } from '../../store/api-action';

export default function SignInScreen() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useAppDispatch();

  const onClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(authorize(formData));
  };

  const onChangeLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setFormData({
      ...formData,
      email: evt.target.value,
    });
  };

  const onChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setFormData({
      ...formData,
      password: evt.target.value,
    });
  };

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
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={formData.email} onChange={onChangeLogin} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={formData.password} onChange={onChangePassword} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={onClick}>Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>);
}
