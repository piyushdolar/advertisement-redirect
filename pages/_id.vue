<template>
	<div></div>
</template>

<script>
	import FingerprintJS from '@fingerprintjs/fingerprintjs'

	export default {
		data() {
			return {
				deviceId: null,
				deviceId: '',
			}
		},
		async created() {
			const $this = this

			// Fingerprint js version 3.0
			const fingerPrint = await FingerprintJS.load()
			$this.deviceId = await fingerPrint.get()

			// Final call
			$this.finalize()
		},
		computed: {
			screenSize() {
				return window.innerHeight + 'X' + window.innerHeight
			},
			screenSizeMax() {
				return window.screen.availWidth + 'X' + window.screen.availHeight
			},
			language() {
				return navigator.language
			},
		},
		methods: {
			isNull(value) {
				if (value == '' || value == null) {
					return '-'
				} else {
					return value
				}
			},

			finalize() {
				// Check the banner existence
				const $this = this
				$this.$axios
					.get('/banner/' + $this.$route.params.id)
					.then(function (response) {
						if (response.data.data) {
							// Sending data to backend.
							$this.$axios.post('/client/' + $this.$route.params.id, {
								cDeviceType: $this.isNull($this.$ua.deviceType()),
								cBrowser: $this.isNull($this.$ua.browser()),
								cBrowserDetail: $this.isNull(
									$this.$ua.browserVersion()
								),
								cBrowserVendor: $this.isNull(
									$this.$ua.browserVendor()
								),
								cScreen: $this.isNull($this.screenSize),
								cOriginalScreen: $this.isNull($this.screenSizeMax),
								cLanguage: $this.isNull($this.language),
								cDeviceId: $this.isNull($this.deviceId.visitorId),
								cOs: $this.isNull($this.$ua.os()),
							})

							// Forwarding request.
							if (
								response.data.data.redirectUrl.indexOf('http') > -1
							) {
								window.location.href =
									response.data.data.redirectUrl
							} else {
								// if user is from honey pot.
								if (response.data.data.isActive == 4) {
									console.warn('honey_pot_user')
								} else {
									window.location.href =
										'http://' + response.data.data.redirectUrl
								}
							}
						}
					})
					.catch(function (error) {
						throw error.response ? error.response.data.error : error
					})
			},
		},
	}
</script>
