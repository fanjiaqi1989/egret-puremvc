module app {
	export class AppMsgConst {
		//Facade
		public static STARTUP:string = "startup";

		//view
		public static MAIN_VIEW_ADD_ROOT_UI:string = "main view add root ui";

		public static ROOT_VIEW_SWITCH_UI_TO_LOGIN:string = "root view switch ui to login";
		public static ROOT_VIEW_SWITCH_UI_TO_HALL:string = "root view switch ui to hall";
		public static ROOT_VIEW_SWITCH_UI_TO_GAME:string = "root view switch ui to game";
		//controller
		public static LOGIN_COMMAND_REQ_LOGIN:string = "login command req login";
		//model
		public static LOGIN_PROXY_LOGIN_SUCCESS:string = "login proxy login success";
		public static LOGIN_PROXY_LOGIN_FAILD:string = "login proxy login faild";
		public static LOGIN_PROXY_LOGIN_OUT:string = "login proxy login out";

	}
}