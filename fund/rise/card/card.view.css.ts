namespace $ {

	const { rem } = $mol_style_unit

	$mol_style_define( $vk_fund_rise_card , {

		flex: {
			direction: 'column',
		},

		border: {
			radius: rem(.5),
		},

		box: {
			shadow: [{
				x: 0,
				y: 0,
				blur: rem(.5),
				spread: 0,
				color: $mol_theme.line,
			}],
		},

		padding: rem(.75),

		Link: {
			flex: {
				direction: 'column',
			},
		},

		Addon: {
			padding: 0,
		},

		Aim: {
			color: $mol_theme.shade,
		},

		Stat: {
			display: 'flex',
			flex: {
				grow: 1,
				direction: 'column',
			},
		},

		Progress_portion: {
			flex: {
				basis: rem(.5),
			},
			width: 'auto',
		},

	} )

}
