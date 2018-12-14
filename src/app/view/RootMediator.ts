module app.view {
	export class RootMediator extends puremvc.Mediator{

		public constructor(mediatorName?: string, viewComponent?: ui.RootUi) {
			super(mediatorName, viewComponent);
		}
		
		 public listNotificationInterests(): string[]{
			 return [
				 AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_LOGIN,
				 AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_HALL,
				 AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_GAME
			 ];
		 }

		 public handleNotification(notification: puremvc.INotification): void {
			switch(notification.getName()){
				case AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_LOGIN:
					this.getViewComponent().switchLoginScene();
					break;
				case AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_HALL:
					this.getViewComponent().switchHallScene();
					break;
				case AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_GAME:
					this.getViewComponent().switchGameScene();
					break;
			}
		}

		public getViewComponent(): ui.RootUi{
			return this.viewComponent as ui.RootUi;
		}
	}
}