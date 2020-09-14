function getUser() {
  if(!!firebase.auth().currentUser){// firebase를 사용하는지 감지
     return {
       'provider': firebase.auth().currentUser.providerData[0].providerId,
       'profile': firebase.auth().currentUser.providerData[0].photoURL,
       'name': firebase.auth().currentUser.providerData[0].displayName,
       'uid': firebase.auth().currentUser.uid
     };
  }else if(!!naverLogin.user.getId()){// 네이버 로그인 감지
     return {
       'provider': 'naver',
       'profile': naverLogin.user.getProfileImage(),
       'name': naverLogin.user.getNickName(),
       'uid': naverLogin.user.getId()
     };
  }else if(!!Kakao.Auth.getAccessToken()){// 카카오 로그인 감지
     /*return {
       'provider': 'kakao',
       'profile': firebase.auth().currentUser.providerData[0].photoURL,
       'name': firebase.auth().currentUser.providerData[0].displayName,
       'uid': firebase.auth().currentUser.uid
     };*/
  }else{
     return false;
  }
}
