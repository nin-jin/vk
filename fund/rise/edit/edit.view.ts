namespace $.$$ {
	
	export class $vk_fund_rise_edit extends $.$vk_fund_rise_edit {

		@ $mol_mem
		image( next? : string ) {
			return next ?? this.store().image()
		}

		@ $mol_mem
		name( next? : string ) {
			return next ?? this.store().name()
		}

		name_bid() {
			if( !this.name().trim() ) return this.bid_required()
			return ''
		}

		@ $mol_mem
		description( next? : string ) {
			return next ?? this.store().description()
		}

		@ $mol_mem
		aim( next? : string ) {
			return next ?? this.store().aim()
		}

		aim_bid() {
			if( !this.aim().trim() ) return this.bid_required()
			return ''
		}

		@ $mol_mem
		amount( next? : number | null ) {
			return next ?? this.store().amount() ?? null
		}

		amount_bid() {
			if( this.amount() > 0 )  return ''
			return this.bid_required()
		}

		@ $mol_mem
		period( next? : string | null ) {
			return next ?? this.store().period()?.toString() ?? null
		}

		@ $mol_mem
		payment( next? : string ) {
			return next ?? this.store().payment() ?? ''
		}

		payment_bid() {
			if( !this.payment() ) return this.bid_required()
			return ''
		}

		@ $mol_mem
		author( next? : string ) {
			return next ?? this.store().author() ?? ''
		}

		@ $mol_mem
		deadline( next? : string | null ) {
			return next ?? this.store().deadline() ?? null
		}

		submit() {
			
			this.store().data({
				image : this.image(),
				name : this.name(),
				description : this.description(),
				aim : this.aim(),
				amount : this.amount(),
				achieved: Math.floor( this.amount() / 3 ),
				period : this.period(),
				payment : this.payment(),
				author : this.author(),
				deadline : this.deadline()?.toString() ?? null,
			})
			
			const button = this.Close().dom_node() as HTMLElement
			button.click()

		}

	}

}
