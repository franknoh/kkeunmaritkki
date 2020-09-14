var naverLogin = new naver.LoginWithNaverId(
  {
    clientId: "0WJ_zopvYiVZQOBDhoRw",
    callbackUrl: window.location.host+"/kkeunmaritkki"+"/api/redirect.html",
    isPopup: true,
    callbackHandle: false
  }
);
naverLogin.init();
