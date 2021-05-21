<template>
	<div>
		<v-container fill-height fluid>
			<v-row align="center">
				<v-col cols="12">
					<v-card elevation="0">
						<v-card-text>
							<v-alert
								text
								prominent
								color="deep-orange"
								icon="mdi-fire"
							>
								<h3 class="headline">Coming Soon...</h3>
								<div class="mt-1">
									We're coming soon, stay tuned for more
									updates.
								</div>
							</v-alert>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>

			<v-row align="center">
				<v-col cols="12">
					<v-card elevation="0">
						<v-card-text>
							<v-alert type="warning" text>
								Our landing page is under
								<strong>development</strong> will be published
								soon.
							</v-alert>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
				time: 0,
				forecast: [
					{
						day: 'Tuesday',
						icon: 'mdi-white-balance-sunny',
						temp: '24\xB0/12\xB0',
					},
					{
						day: 'Wednesday',
						icon: 'mdi-white-balance-sunny',
						temp: '22\xB0/14\xB0',
					},
					{ day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
				],
			}
		},
		components: {},
		middleware() {},
		computed: {},
		created() {
			// If b91.com comes in.
			if (
				window.location.host === 'b91vip.com' ||
				window.location.host === 'www.b91vip.com'
			) {
				return window.location.replace('http://www.b91.com')
			}
		},
		methods: {},
	}
</script>
