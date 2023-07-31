<template>
		<v-navigation-drawer expand-on-hover rail permanent>
			<v-list>
				<v-list-item
					prepend-avatar="src/assets/img/profiles/pikachu.png"
					title="Pikachu"
					subtitle="Angel Villamil"
				></v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list density="compact" nav>

				<v-list-item prepend-icon="mdi-magnify">
					<v-text-field
						v-model="search"
						@input="updateSearch"
						clearable
						variant="plain"
						placeholder="Search"
					></v-text-field>
				</v-list-item>
				
				<v-list-item
					prepend-icon="mdi-folder"
					title="My Files"
					value="myfiles"
				></v-list-item>
				<v-list-item
					prepend-icon="mdi-account-multiple"
					title="Shared with me"
					value="shared"
				></v-list-item>
				<v-list-item
					prepend-icon="mdi-star"
					title="Starred"
					value="starred"
				></v-list-item>
			</v-list>
		</v-navigation-drawer>
</template>

<script lang="ts">

	import useAppStore from '@/store/app'
  const { setSearch } = useAppStore();

  export default {
		
    data () {
      return {
        search: '',
      }
    },

		methods: {
			updateSearch() {
				setSearch(this.search);
			}
		}
  }
</script>