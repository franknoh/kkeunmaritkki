var naverLogin = new naver.LoginWithNaverId(
  {
    clientId: "0WJ_zopvYiVZQOBDhoRw",
    callbackUrl: "https://kkeunmaritkki.firebaseapp.com/__/auth/handler",
    isPopup: true,
    callbackHandle: false
  }
);
naverLogin.init();
