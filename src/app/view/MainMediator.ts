module app.view {
	export class MainMediator extends puremvc.Mediator{

		public constructor(mediatorName?: string, viewComponent?: Main) {
			super(mediatorName, viewComponent);
		}

		public getViewComponent(): Main{
			return this.viewComponent as Main;
		}

		public listNotificationInterests(): string[]{
			 return [
					AppMsgConst.MAIN_VIEW_ADD_ROOT_UI
			 ];
		 }

		 public handleNotification(notification: puremvc.INotification): void {
			switch(notification.getName()){
				case AppMsgConst.MAIN_VIEW_ADD_ROOT_UI:
					this.getViewComponent().addRootUI();
					break;
			}
		}
	}
}