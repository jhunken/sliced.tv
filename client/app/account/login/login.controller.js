'use strict';

export default class LoginController {
  user = {
    name: '',
    email: 'test@example.com',
    password: 'test'
  };
  errors = {
    login: undefined
  };
  submitted = false;


  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  login(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
        .then(() => {
          // Logged in, redirect to home
          this.$state.go('movies');
        })
        .catch(err => {
          this.errors.login = err.message;
        });
    }
  }
}
