import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {

    state = {
        register_email: '',
        register_password: '',
        user_email: '',
        user_password: '',
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    
    handleLoginSubmit = async (e) => {
        e.preventDefault();

        //! post yapısına uygun statede ki verileri göndermek
        const loginUser = {
            username: this.state.user_email,
            password: this.state.user_password,
        };

        try {
            const loginResponse = await axios.post('https://localhost:7025/api/Auth/LoginUser', loginUser);
            
            //! authToken null veya undefined kontorlü
            if (loginResponse.headers && loginResponse.data.authToken) {
                //! dönen verileri al
                const authToken = loginResponse.data.authToken;
                const accessTokenExpireDate = loginResponse.data.accessTokenExpireDate;
                const loginUserDetails = loginResponse.data.loginUser;

                //! Local storage kayıt 
                localStorage.setItem('authToken', authToken);
                localStorage.setItem('accessTokenExpireDate', accessTokenExpireDate);
                localStorage.setItem('loginUserDetails', JSON.stringify(loginUserDetails));

                console.log('Received authToken:', authToken);
                console.log('Token successfully Saved To LocalStorage');

                window.location.reload();

            } else {
                // authToken is null or undefined
                alert('Login Failed. Please Check Your Username and password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }

    }



    handleRegisterSubmit = async (e) => {
       

        const registeredUser = {
            email: this.state.register_email,
            password: this.state.register_password,
        };

        try {
            await axios.post('https://localhost:7025/api/User', registeredUser);
            console.log('User successfully saved');
             e.preventDefault();
            window.location.reload();
        } catch (error) {
            console.error('Error saving the order:', error);
        }

    }


    render() {
        return (
            <div className="main-content-wrapper">
                <div className="login-register-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-md--40">
                                <h2 className="heading-secondary mb--30">Login</h2>
                                <div className="login-reg-box p-4 bg--2">
                                    <form className="form"  onSubmit={this.handleLoginSubmit}>
                                        <div className="form__group mb--20">
                                            <label className="form__label" htmlFor="username_email">
                                                Email Address <span>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                id="user_email"
                                                className="form__input form__input--2"
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form__group mb--20">
                                            <label className="form__label" htmlFor="password">
                                                Password <span>*</span>
                                            </label>
                                            <input
                                                type="password"
                                                name="user_password"
                                                id="user_password"
                                                className="form__input form__input--2"
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form__group d-flex align-items-center">
                                            <button type="submit" className="btn btn-5 btn-style-1 color-1">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="heading-secondary mb--30">Register</h2>
                                <div className="login-reg-box p-4 bg--2">
                                    <form className="form" onSubmit={this.handleRegisterSubmit}>
                                        <div className="form__group mb--20">
                                            <label className="form__label" htmlFor="register_email">
                                                Email address <span>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="register_email"
                                                id="register_email"
                                                className="form__input form__input--2"
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form__group mb--20">
                                            <label className="form__label" htmlFor="register_password">
                                                Password <span>*</span>
                                            </label>
                                            <input
                                                type="password"
                                                name="register_password"
                                                id="register_password"
                                                className="form__input form__input--2"
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form__group">
                                            <button type="submit" className="btn btn-5 btn-style-2">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
