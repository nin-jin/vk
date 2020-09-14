namespace $.$$ {

	export class $vk_fund extends $.$vk_fund {

		@ $mol_mem
		store() {
			return this.$.$mol_store_local.sub( '$vk_fund' , super.store() )
		}

		rise( id : number ) {
			return this.store().rise( id )
		}

		@ $mol_mem
		rise_current() {
			const id = this.$.$mol_state_arg.value( 'rise' )
			if( !id ) return null
			return Number( id )
		}

		pages() {
			return [
				this.List_page(),
				... this.rise_current() === null
					? []
					: [ this.Edit_page(  this.rise_current() ) ],
			]
		}

		rise_new_id() {
			return String( this.store().rises().length )
		}

		@ $mol_mem
		rise_list() {
			return this.store().rises().map( (_,i)=> this.Rise_row(i) )
		}

		rise_arg( id : number ) {
			return { rise : `${id}` }
		}

	}

}
