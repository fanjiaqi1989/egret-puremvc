module app.controller {
	export class AppPrepControllerCommand extends puremvc.SimpleCommand{
		public execute(notification: puremvc.INotification): void{
			this.facade.registerCommand(AppMsgConst.LOGIN_COMMAND_REQ_LOGIN,LoginReqCommand);
		}
	}
}
