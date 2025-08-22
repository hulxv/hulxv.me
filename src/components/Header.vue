<script lang="ts" setup>
import { useWindowScroll } from "@vueuse/core";
import { computed, onMounted, ref, unref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";
import siteConfig from "@/site-config";
import { getLinkTarget } from "@/utils/link";

const navLinks = siteConfig.header.navLinks || [];

const socialLinks = computed(() => {
	return siteConfig.socialLinks.filter((link: Record<string, any>) => {
		if (link.header && typeof link.header === "boolean") {
			return link;
		} else if (link.header && typeof link.header === "string") {
			link.icon = link.header.includes("i-") ? link.header : link.icon;
			return link;
		} else {
			return false;
		}
	});
});

const { y: scroll } = useWindowScroll();

const oldScroll = ref(unref(scroll));

onMounted(() => {
	const navMask = document.querySelector(".nav-drawer-mask") as HTMLElement;

	navMask?.addEventListener("touchmove", (event) => {
		event.preventDefault();
	});

	const headerEl = document.querySelector("#header") as HTMLElement;
	if (!headerEl) return;

	if (document.documentElement.scrollTop > 100) headerEl.classList.add("header-bg-blur");

	window.addEventListener("scroll", () => {
		if (scroll.value < 150) {
			headerEl.classList.remove("header-hide");
			return;
		}

		if (scroll.value - oldScroll.value > 150) {
			headerEl.classList.add("header-hide");
			oldScroll.value = scroll.value;
		}

		if (oldScroll.value - scroll.value > 150) {
			headerEl.classList.remove("header-hide");
			oldScroll.value = scroll.value;
		}
	});
});

function toggleNavDrawer() {
	const drawer = document.querySelector(".nav-drawer") as HTMLElement;
	const mask = document.querySelector(".nav-drawer-mask") as HTMLElement;
	if (!drawer || !mask) return;
	if (drawer.style.transform === `translateX(0%)`) {
		drawer.style.transform = `translateX(100%)`;
		mask.style.display = `none`;
	} else {
		drawer.style.transform = `translateX(0%)`;
		mask.style.display = `block`;
	}
}
</script>

<template>
	<header
		id="header"
		:class="{ 'header-bg-blur': scroll > 20 }"
		class="z-899 !fixed relative flex h-20 w-screen max-w-7xl items-center justify-between bg-transparent px-6"
	>
		<div class="flex h-full items-center justify-between gap-x-6">
			<div>
				<a href="/" aria-label="Header Logo Image">
					<img
						width="84"
						height="84"
						:src="siteConfig.header.logo.src"
						:alt="siteConfig.header.logo.alt"
						style="mix-blend-mode: multiply"
					/>
				</a>
			</div>
			<nav class="position-initial hidden flex-row flex-wrap gap-x-6 sm:flex">
				<a
					v-for="link in navLinks"
					:key="link.text"
					:aria-label="`${link.text}`"
					:target="getLinkTarget(link.href)"
					nav-link
					:href="link.href"
				>
					{{ link.text }}
				</a>
			</nav>
		</div>
		<div sm:hidden h-full flex items-center @click="toggleNavDrawer()">
			<menu i-ri-menu-2-fill />
		</div>
		<div class="hidden sm:flex sm:gap-x-6">
			<a
				v-for="link in socialLinks"
				:key="link.text"
				:aria-label="`${link.text}`"
				:class="link.icon"
				nav-link
				:target="getLinkTarget(link.href)"
				:href="link.href"
			/>

			<a nav-link target="_blank" href="/rss.xml" i-ri-rss-line aria-label="RSS" />
			<ThemeToggle />
		</div>
	</header>
	<nav class="nav-drawer flex flex-col justify-between sm:hidden">
		<!-- <i i-ri-menu-2-fill /> -->
		<div class="flex flex-col items-start justify-between gap-y-8">
			<a
				v-for="link in navLinks"
				:key="link.text"
				:aria-label="`${link.text}`"
				:target="getLinkTarget(link.href)"
				nav-link
				:href="link.href"
				@click="toggleNavDrawer()"
			>
				{{ link.text }}
			</a>
		</div>
		<div class="mb-6 flex items-center justify-between gap-x-6">
			<a
				v-for="link in socialLinks"
				:key="link.text"
				:aria-label="`${link.text}`"
				:class="link.icon"
				nav-link
				:target="getLinkTarget(link.href)"
				:href="link.href"
			/>

			<a nav-link target="_blank" href="/rss.xml" i-ri-rss-line aria-label="RSS" />
			<ThemeToggle />
		</div>
	</nav>
	<div class="nav-drawer-mask" @click="toggleNavDrawer()" />
</template>

<style scoped>
.header-hide {
	transform: translateY(-100%);
	transition: transform 0.4s ease;
}

.header-bg-blur {
	--at-apply: backdrop-blur-sm;
}

.nav-drawer {
	transform: translateX(100%);
	--at-apply: box-border fixed h-screen z-999 right-0 top-0 min-w-32vw max-w-50vw bg-main p-6
		text-lg flex flex-col gap-5 transition-all;
}

.nav-drawer-mask {
	display: none;
	--at-apply: transition-all;
	content: "";
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	z-index: 998;
}
</style>
