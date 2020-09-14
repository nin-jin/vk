namespace $ {

	export class $vk_fund_store extends $mol_store<{
		rises: readonly ReturnType< $vk_fund_rise['data'] >[]
	}> {

		@ $mol_mem
		rises() {
			return this.value( 'rises' ).map(
				( stock , index )=> this.rise( index )
			)
		}

		@ $mol_mem_key
		rise( index : number ) {
			return this.sub( 'rises' )
				.sub( index , new $vk_fund_rise( this.value( 'rises' )[ index ] ?? {} ) )
		}

	}

}
