namespace $.$$ {
	
	export class $vk_fund_rise_card extends $.$vk_fund_rise_card {

		image() {
			return this.store().image()
		}

		title() {
			return this.store().name()
		}

		aim() {
			return this.store().aim()
		}

		progress_text() {
			const store = this.store()
			return super.progress_text()
				.replace( '{achieved}' , store.achieved() )
				.replace( '{amount}' , store.amount() )
		}

		portion() {
			const store = this.store()
			return store.achieved() / store.amount()
		}

	}

}
