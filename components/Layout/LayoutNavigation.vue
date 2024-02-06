<template>
	<nav class="layout-navigation">
		<span class="layout-navigation__button">
			<UIButton
				class="button--brand-1-dark-line"
				@button-click="toggleNavigation"
			>
				<span class="button__icon">
					<UIIcon
						icon-name="menu"
						icon-aria-label="Navigation button"
					/>
				</span>

				<span class="button__text">
					Navigation
				</span>
			</UIButton>
		</span>
		<transition name="slide">
			<div
				v-if="changeOpenNavigation"
				class="layout-navigation__list"
			>
				<ul>
					<li
						v-for="(item, index) in navigationList"
						:key="`navigation-link-${index}`"
					>
						<UIButton :to="item.url">
							{{ item.name }}
						</UIButton>
					</li>
				</ul>
			</div>
		</transition>
	</nav>
</template>

<script>
	export default {
		"name": "LayoutNavigation",
		"layout": "exercises",
		data() {
			return {
				"navigationList": [
					{
						"name": "Home",
						"url": "/nuxt2/exercises/project/home",
					},
					{
						"name": "About Us",
						"url": "/nuxt2/exercises/project/about-us",
					},
					{
						"name": "Posts",
						"url": "/nuxt2/exercises/project/posts",
					},
					{
						"name": "Admin",
						"url": "/nuxt2/exercises/project/admin",
					},
				],
				"window": {
					"width": 0,
					"height": 0,
				},
				"isMobile": false,
				"isOpen": true,
			};
		},
		"computed": {
			getWindowWidth() {
				return this.window.width;
			},
			changeOpenNavigation() {
				return this.isOpen;
			},
		},
		mounted() {
			this.$nextTick(() => {
				this.onResize();
			});
			window.addEventListener("resize", () => {
				this.onResize();
				this.showHideNavigation();
			});
		},
		"methods": {
			responsive() {
				if (this.window.width <= 576) {
					this.isMobile = true;
				} else {
					this.isMobile = false;
				}
			},
			onResize() {
				this.window.width = window.innerWidth;
				this.responsive();
			},
			showHideNavigation() {
				if (this.isMobile) {
					this.isOpen = false;
				} else {
					this.isOpen = true;
				}
			},
			toggleNavigation() {
				this.isOpen = !this.isOpen;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.layout-navigation {
		display: flex;
		flex-direction: column;
		margin: 2rem 0;

		&__button {
			display: none;
			margin-bottom: 2rem;

			@include media("sm") {
				display: flex;
			}

			.button {
				align-items: center;
				width: 100%;

				&__icon {
					width: 3rem;
					height: 3rem;
					margin-right: 1rem;

					.icon {
						width: 100%;
						height: 100%;
					}
				}

				&__text {
					font-size: 2rem;
				}
			}
		}

		&__list {
			@include media("sm") {
				max-height: 500px;
				transition: max-height 0.25s ease-in;
			}

			ul {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
				justify-content: space-around;
				padding: 0;
				list-style: none;

				li {
					width: calc(25% - 1rem);

					@include media("md") {
						width: calc(50% - 1rem);
					}
				}
			}
		}

		.slide-enter,
		.slide-leave-to {
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.15s ease-out;
		}
	}
</style>
