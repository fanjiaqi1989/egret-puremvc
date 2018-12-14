module app.controller {
	export class AppPrepViewCommand extends puremvc.SimpleCommand{
		public execute(notification: puremvc.INotification): void{
			this.facade.registerMediator(new view.MainMediator(MediatorName.MAIN,notification.getBody()));
			this.sendNotification(AppMsgConst.MAIN_VIEW_ADD_ROOT_UI);
		}
	}
}