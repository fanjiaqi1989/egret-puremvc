module app.controller {
	export class AppPrepModelCommand extends puremvc.SimpleCommand{
		public execute(notification: puremvc.INotification): void{
			this.facade.registerProxy(new app.model.AppProxy(app.ProxyName.ROOT));
			this.facade.registerProxy(new app.model.LoginProxy(app.ProxyName.LOGIN));
		}
	}
}