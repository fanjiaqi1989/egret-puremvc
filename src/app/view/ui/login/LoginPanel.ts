module app.view.ui.login {
	export class LoginPanel extends eui.Component implements eui.UIComponent{
		public btn_login:eui.Button;
		public loginVO:vo.LoginVO;
		public constructor() {
			super();
		}

		protected childrenCreated(): void{
			super.childrenCreated();
			this.loginVO = new vo.LoginVO();
			app.AppFacade.getInstance().registerMediator(new view.LoginMediator(MediatorName.LOGIN,this));
		}

	}
}