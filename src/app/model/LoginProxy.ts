module app.model {
	export class LoginProxy extends puremvc.Proxy implements puremvc.IProxy{

		private loggedIn:boolean = false;

		private loginVO:vo.LoginVO = new vo.LoginVO();

		public login(tryLogin: vo.LoginVO): void {
			if (!this.loggedIn) {
				this.loginVO.username = tryLogin.username;
				this.loginVO.password = tryLogin.password;
				egret.setTimeout(this.onResult,this,1000);
			} else {
				this.logout();
				this.login(tryLogin);
			}
		}

		private onResult():void{
			this.sendNotification(AppMsgConst.LOGIN_PROXY_LOGIN_SUCCESS,this.loginVO.authToken);
		}

		public logout():void{
			if(this.loggedIn) {
				this.loginVO = new vo.LoginVO();
				this.loggedIn = false;
			}
			this.sendNotification(AppMsgConst.LOGIN_PROXY_LOGIN_OUT);
		}
	}
}