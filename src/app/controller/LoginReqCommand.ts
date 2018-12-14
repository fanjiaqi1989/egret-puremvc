module app.controller {
	export class LoginReqCommand extends puremvc.SimpleCommand{
		public execute(notification: puremvc.INotification): void{
			//
			let data:vo.LoginVO = notification.getBody();
			let loginM:view.LoginMediator = this.facade.retrieveMediator(MediatorName.LOGIN) as view.LoginMediator;
			// if(data.username.length<6){
			// 	loginM.loginError();
			// 	return;
			// }

			//各种验证成功
			let loginP:model.LoginProxy = this.facade.retrieveProxy(ProxyName.LOGIN) as model.LoginProxy;
			loginP.login(data);
		}
	}
}