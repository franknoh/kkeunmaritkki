var naverLogin = new naver.LoginWithNaverId(
	{
  	clientId: "0WJ_zopvYiVZQOBDhoRw",
    callbackUrl: "https://kkeunmaritkki.firebaseapp.com/__/auth/handler",
    isPopup: true,
    loginButton: {color: "green", type: 3, height: 60}
  }
);
naverLogin.init();
