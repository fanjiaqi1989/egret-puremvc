module app.view {
	export class LoginMediator extends puremvc.Mediator {
		public constructor(mediatorName?: string, viewComponent?: ui.login.LoginPanel) {
			super(mediatorName, viewComponent);
			viewComponent.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTryLogin,this);
		}

		public listNotificationInterests(): string[] {
			return [
				AppMsgConst.LOGIN_PROXY_LOGIN_SUCCESS,
				AppMsgConst.LOGIN_PROXY_LOGIN_FAILD
			];
		}

		public handleNotification(notification: puremvc.INotification): void {
			switch(notification.getName()){
				case AppMsgConst.LOGIN_PROXY_LOGIN_SUCCESS:
					this.showLoginMessage("login success!");
					this.sendNotification(AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_HALL);
					break;
				case AppMsgConst.LOGIN_PROXY_LOGIN_FAILD:
					this.showLoginMessage("login faild!");
					break;
			}
		}

		private onTryLogin(e:egret.TouchEvent):void{
			this.sendNotification(AppMsgConst.LOGIN_COMMAND_REQ_LOGIN,this.getViewComponent().loginVO);
		}

		public getViewComponent(): ui.login.LoginPanel{
			return this.viewComponent as ui.login.LoginPanel;
		}

		public loginError():void{
			console.log("login message:"+"Error");
		}

		private showLoginMessage(msg:string):void{
			console.log("login message:"+msg);
		}
	}
}