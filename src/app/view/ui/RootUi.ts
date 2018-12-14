module app.view.ui {
	export class RootUi extends eui.Group{
		
		public loginScene:login.LoginPanel;
		public hallScene:hall.HallPanel;
		public gameScene:game.GamePanel;
		
		public constructor() {
			super();
		}

		protected childrenCreated():void{
			app.AppFacade.getInstance().registerMediator(new RootMediator(MediatorName.ROOT,this));
			this.switchLoginScene();
		}

		public switchLoginScene():void{
			this.removeChildren();
			if(this.loginScene == null)this.loginScene = new login.LoginPanel();
			this.addChild(this.loginScene);
		}

		public switchHallScene():void{
			this.removeChildren();
			if(this.hallScene == null)this.hallScene = new hall.HallPanel();
			this.addChild(this.hallScene);
		}

		public switchGameScene():void{
			this.removeChildren();
			if(this.gameScene == null)this.gameScene = new game.GamePanel();
			this.addChild(this.gameScene);
		}

	}
}