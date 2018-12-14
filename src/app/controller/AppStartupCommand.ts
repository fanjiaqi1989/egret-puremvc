module app.controller {
	export class AppStartupCommand extends puremvc.MacroCommand{
		
		public initializeMacroCommand(): void{
			this.addSubCommand(AppPrepViewCommand);
			this.addSubCommand(AppPrepControllerCommand);
			this.addSubCommand(AppPrepModelCommand);
		}		
	}
}