<template>
	<component
		:is="checkTag"
		:href="href"
		:to="to"
		:value="value"
		:class="classType"
		@click="buttonClick"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		"name": "Button",
		"props": {
			"href": {
				"type": String,
				"default": null,
			},
			"to": {
				"type": String,
				"default": null,
			},
			"value": {
				"type": String,
				"default": null,
			},
			"classType": {
				"type": String,
				"validator": function(value) {
					return [
						"button",
						"link",
					].includes(value);
				},
				"default": "button",
			},
		},
		"computed": {
			checkTag() {
				if (this.href) {
					return "a";
				} else if (this.to) {
					return "nuxt-link";
				} else if (this.value) {
					return "input";
				}

				return "button";
			},
		},
		"methods": {
			buttonClick() {
				this.$emit("button-click");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.button {
		padding: 1.2rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: 900;
		line-height: 110%;
		color: $color-black;
		border: 0.2rem solid $color-black;
		border-radius: 0.5rem;
		outline: none;
		background-color: transparent;
		user-select: none;
		cursor: pointer;
		appearance: none;

		> * {
			pointer-events: none;
		}

		&.nuxt-link-active,
		&:hover {
			color: $color-white;
			border-color: mix($color-white, $color-black, 20%);
			background-color: mix($color-white, $color-black, 20%);
		}

		&--icon {
			padding: 1rem;
			border: none;

			&:hover {
				color: $color-black;
				background-color: transparent;
			}
		}

		&--black {
			color: $color-white;
			border-color: $color-black;
			background-color: $color-black;

			&:hover {
				border-color: mix($color-white, $color-black, 20%);
				background-color: mix($color-white, $color-black, 20%);
			}
		}

		&--brand-1-dark-line {
			border-color: $color-brand-3;
			color: $color-brand-3;

			::v-deep {
				.icon {
					&__use {
						fill: $color-brand-3;
					}
				}
			}

			&:hover {
				color: $color-white;
				border-color: $color-brand-3;
				background-color: $color-brand-3;

				::v-deep {
					.icon {
						&__use {
							fill: $color-white;
						}
					}
				}
			}
		}

		&--brand-2-dark-line {
			border-color: $color-brand-4;
			color: $color-brand-4;

			::v-deep {
				.icon {
					&__use {
						fill: $color-brand-4;
					}
				}
			}

			&:hover {
				color: $color-white;
				border-color: $color-brand-4;
				background-color: $color-brand-4;

				::v-deep {
					.icon {
						&__use {
							fill: $color-white;
						}
					}
				}
			}
		}

		&--success {
			color: $color-white;
			border-color: $color-success;
			background-color: $color-success;
		}

		&--error {
			color: $color-white;
			border-color: $color-error;
			background-color: $color-error;
		}
	}

	.link {
		padding: 0 0.5rem;
		display: inline-block;
		position: relative;
		text-decoration: none;
		color: $color-brand-2;
		font-weight: 900;

		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: -1;
			width: 110%;
			height: 50%;
			border-radius: 0.5rem 1rem 0.2rem 1rem;
			background-color: mix($color-white, $color-brand-1, 40%);
			transform: rotate(-1deg)
		}

		&:hover {
			&:after {
				background-color: mix($color-white, $color-brand-1, 20%);
			}
		}
	}
</style>
