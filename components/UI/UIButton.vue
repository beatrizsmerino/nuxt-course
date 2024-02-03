<template>
	<component
		:is="checkTag"
		:href="href"
		:to="to"
		:value="value"
		:target="!to ? `_blank` : ''"
		:rel="!to ? 'noopener noreferrer' : ''"
		:class="[classType, classModifier]"
		@click="buttonClick"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		"name": "UIButton",
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
			"classModifier": {
				"type": String,
				"default": null,
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
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.2rem 2rem;
		border: 0.2rem solid $color-black;
		border-radius: 0.5rem;
		outline: none;
		background-color: transparent;
		color: $color-black;
		font-size: 1.6rem;
		font-weight: 900;
		line-height: 110%;
		text-decoration: none;
		text-transform: capitalize;
		cursor: pointer;
		user-select: none;
		appearance: none;

		> * {
			pointer-events: none;
		}

		&.nuxt-link-active,
		&:hover {
			border-color: mix($color-white, $color-black, 20%);
			background-color: mix($color-white, $color-black, 20%);
			color: $color-white;
		}

		&--icon {
			padding: 1rem;
			border: 0;

			&:hover {
				background-color: transparent;
				color: $color-black;
			}
		}

		&--black {
			border-color: $color-black;
			background-color: $color-black;
			color: $color-white;

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
					fill: $color-brand-3;
				}
			}

			&:hover {
				border-color: $color-brand-3;
				background-color: $color-brand-3;
				color: $color-white;

				::v-deep {
					.icon {
						fill: $color-white;
					}
				}
			}
		}

		&--brand-2-dark-line {
			border-color: $color-brand-4;
			color: $color-brand-4;

			::v-deep {
				.icon {
					fill: $color-brand-4;
				}
			}

			&:hover {
				border-color: $color-brand-4;
				background-color: $color-brand-4;
				color: $color-white;

				::v-deep {
					.icon {
						fill: $color-white;
					}
				}
			}
		}

		&--success {
			border-color: $color-success;
			background-color: $color-success;
			color: $color-white;
		}

		&--error {
			border-color: $color-error;
			background-color: $color-error;
			color: $color-white;
		}
	}

	.link {
		display: inline-block;
		position: relative;
		padding: 0 0.5rem;
		color: $color-brand-2;
		font-weight: 900;
		text-decoration: none;

		&:after {
			content: "";
			display: inline-block;
			position: absolute;
			z-index: -1;
			bottom: 0;
			left: 0;
			width: 110%;
			height: 50%;
			transform: rotate(-1deg);
			border-radius: 0.5rem 1rem 0.2rem;
			background-color: mix($color-white, $color-brand-1, 40%);
		}

		&:hover {
			&:after {
				background-color: mix($color-white, $color-brand-1, 20%);
			}
		}
	}
</style>
