import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@logos/logo_yard_sale.svg'
import styles from '@styles/Login.module.scss';


const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className={styles.Login}>
			<div className={ styles['Login-container'] }>
				<Image src={logo} alt="logo" className={ styles.logo } />
				<form action="/" className={ styles.form } ref={form}>
					<label htmlFor="email" className={ styles.label }>Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={`${ styles.input } ${ styles['input-email'] }`} />
					<label htmlFor="password" className={ styles.label }>Password</label>
					<input type="password" name="password" placeholder="*********" className={`${ styles.input } ${ styles['input-password'] }`} />
					<button
						onClick={handleSubmit}
						className={`${ styles['primary-button'] } ${ styles['login-button'] }`}>
						Log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<Link
                    href={'/signup'}
					className={`${ styles['secondary-button'] } ${ styles['signup-button'] } `}
				>
					Sign up
				</Link>
			</div>
		</div >
	);
}

export default Login;
