namespace $ {

	const { rem } = $mol_style_unit

	$mol_style_define( $vk_fund , {

		List_page: {
			flex: {
				basis: rem(30),
				shrink: 0,
				grow: 0,
			},
		},

		Rise_list: {
			padding: rem(.75),
			'>': {
				$mol_view: {
					margin: rem(.75),
				},
			},
		},
		
		Edit_page: {
			flex: {
				basis: rem(30),
				shrink: 0,
				grow: 0,
			},
		},

		$mol_string: {
			border: {
				radius: rem(.5),
			},
		},

		$mol_link: {
			border: {
				radius: rem(.5),
			},
		},

		$mol_button: {
			border: {
				radius: rem(.5),
			},
		},

		Rise_list_hint: {
			justifyContent: 'flex-end',
		},

	} )

}
