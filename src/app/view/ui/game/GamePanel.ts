module app.view.ui.game {
	export class GamePanel extends eui.Component implements eui.UIComponent{
		
		public exit_btn:eui.Button;
		
		public constructor() {
			super();
		}

		protected childrenCreated(): void{
			super.childrenCreated();
			this.createScene();
			app.AppFacade.getInstance().registerMediator(new view.GameMediator(MediatorName.GAME,this));
		}

		public createScene(): void {
			let button = new eui.Button();
			button.label = "Exit!";
			button.horizontalCenter = 0;
			button.verticalCenter = 0;
			this.addChild(button);

			this.exit_btn = button;
		}
	}
}