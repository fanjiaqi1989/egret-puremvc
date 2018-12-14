module app {
	export class AppFacade extends puremvc.Facade implements puremvc.IFacade{
        public constructor() {
            super();
        }
        public static getInstance(): AppFacade{
            if(this.instance == null) this.instance = new AppFacade();
            return <AppFacade><any>(this.instance);
        }

		public initializeController():void{
			super.initializeController();
			this.registerCommand(AppMsgConst.STARTUP,controller.AppStartupCommand);
		}

		/**
         * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
         * @param	rootView	-	PureMVC应用程序的根视图root，包含其它所有的View Componet
         */
        public startUp(main: egret.DisplayObjectContainer): void {
            this.sendNotification(AppMsgConst.STARTUP, main);
            this.removeCommand(AppMsgConst.STARTUP); //PureMVC初始化完成，注销STARUP命令
        }
	}
}