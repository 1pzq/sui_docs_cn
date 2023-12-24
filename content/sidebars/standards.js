// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

const standards = [
	'standards',
	'standards/kiosk',
	{
		type: 'category',
		label: '深度书籍',
		link: {
			type: 'doc',
			id: 'standards/deepbook',
		},
		items: [
			'standards/deepbook/design',
			'standards/deepbook/orders',
			'standards/deepbook/pools',
			'standards/deepbook/query-the-pool',
			'standards/deepbook/routing-a-swap',
			'standards/deepbook/trade-and-swap',
		],
	},
	'standards/display',
	'standards/wallet-standard',
	{
		type: 'category',
		label: '闭环代币',
		link: {
			type: 'doc',
			id: 'standards/closed-loop-token',
		},
		items: [
			'standards/closed-loop-token/overview',
			'standards/closed-loop-token/action-request',
			'standards/closed-loop-token/token-policy',
			'standards/closed-loop-token/spending',
			'standards/closed-loop-token/rules',
			'standards/closed-loop-token/coin-token-comparison',
		],
	},
];
module.exports = standards;
