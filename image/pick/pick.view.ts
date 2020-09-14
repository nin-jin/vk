namespace $.$$ {

	export class $vk_image_pick extends $.$vk_image_pick {

		items( next?: $mol_attach_item[] ) {
			return $mol_maybe( this.value( next && next[ next.length - 1 ]?.url_thumb() ) || null )
				.map( (_,i)=> this.Item(i) )
		}

		content() {
			return [
				... this.items() ,
				... this.value() ? [] : [ this.Add() ],
			]
		}
		
	}


}
