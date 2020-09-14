function getUser() {
    if (!!firebase.auth().currentUser) { // firebase를 사용하는지 감지
        return {
            'provider': firebase.auth().currentUser.providerData[0].providerId,
            'profile': firebase.auth().currentUser.providerData[0].photoURL,
            'name': firebase.auth().currentUser.providerData[0].displayName,
            'uid': firebase.auth().currentUser.uid
        };
    } else if (!!naverLogin.user.getId()) { // 네이버 로그인 감지
        naverLogin.getLoginStatus(function(status) {
            if (status) {
                return {
                    'provider': 'naver',
                    'profile': naverLogin.user.getProfileImage(),
                    'name': naverLogin.user.getNickName(),
                    'uid': naverLogin.user.getId()
                };
            } else {
                return 'invalid token';
            }
        });
    } else if (!!Kakao.Auth.User) { // 카카오 로그인 감지
        return {
            'provider': 'kakao',
            'profile': Kakao.Auth.User.photoURL,
            'name': Kakao.Auth.User.displayName,
            'uid': Kakao.Auth.User.uid
        };
    } else {
        return false;
    }
}

function login(provider) {
    if (provider == 'github') {
      firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
    } else if (provider == 'google') {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else if (provider == 'kakao') {
        Kakao.API.request({
            url: 'https://kapi.kakao.com/v2/user/me',
            success: function(res) {
                console.log(JSON.stringify(res))
                Kakao.Auth.User = {
                    'photoURL': res.properties.profile_image,
                    'displayName': res.properties.nickname,
                    'uid': res.properties.id,
                }
            },
            fail: function(error) {
                console.log(
                    'login success, but failed to request user information: ' +
                    JSON.stringify(error)
                )
            },
        })
    } else {
        return 'invalid provider';
    }
}
