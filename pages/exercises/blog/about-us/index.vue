<template>
	<Layout>
		<template #title>
			Blog
		</template>
		<template #subtitle>
			Description
		</template>
		<template #content>
			<article>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ipsum magni sapiente
					fugiat. Distinctio quaerat itaque sint dolore voluptate laborum, reprehenderit, cumque atque quae
					eveniet a nihil, quas voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
					corporis fuga sapiente laudantium eaque cupiditate adipisci quidem odio vitae doloremque dolorum,
					vero vel optio unde distinctio aspernatur magni quos nam?
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quae dignissimos necessitatibus, enim
					provident consequatur nisi labore earum minus nostrum. Nisi, officiis iure repellat obcaecati
					provident ipsum exercitationem veritatis sunt.
				</p>
			</article>
		</template>
	</Layout>
</template>

<script>
	import Layout from "@/components/Exercises/Blog/Layout/Layout";

	export default {
		"name": "ViewBlogAbout",
		"components": {
			Layout,
		},
		"layout": "exercises",
		"head": {
			"title": "About | Blog Exercise",
		},
	};
</script>
