namespace $ {
	
	export class $vk_fund_rise extends $mol_store<{
		name: string
		description: string
		image: string
		amount: number
		achieved: number
		aim: string
		payment: string
		author: string
		deadline: string | null
		period: string | null
	}> {

		name( next? : string ) {
			return this.value( 'name' , next ) ?? ''
		}

		description( next? : string ) {
			return this.value( 'description' , next ) ?? ''
		}

		image( next? : string ) {
			return this.value( 'image' , next ) ?? ''
		}

		aim( next? : string ) {
			return this.value( 'aim' , next ) ?? ''
		}

		payment( next? : string ) {
			return this.value( 'payment' , next ) ?? ''
		}

		author( next? : string ) {
			return this.value( 'author' , next ) ?? ''
		}

		@ $mol_mem
		deadline( next? : $mol_time_moment | null ) {
			let str = next?.toString()
			str = this.value( 'deadline' , str )
			return str ? new $mol_time_moment( str ) : null
		}

		@ $mol_mem
		period( next? : $mol_time_duration | null ) {
			let str = next?.toString()
			str = this.value( 'period' , str )
			return str ? new $mol_time_duration( str ) : ''
		}

		amount( next? : number | null ) {
			return this.value( 'amount' , next )
		}

		achieved( next? : number | null ) {
			return this.value( 'achieved' , next )
		}

	}

}
