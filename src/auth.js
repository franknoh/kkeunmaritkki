function getUser() {
  if(!!firebase.auth().currentUser){// firebase를 사용하는지 감지
     
  }else if(!!naverLogin.user.getId()){// 네이버 로그인 감지
     
  }else if(!!Kakao.Auth.getAccessToken()){// 카카오 로그인 감지
     
  }else{
     return false;
  }
}
