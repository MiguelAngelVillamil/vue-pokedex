<template>
		<v-navigation-drawer class="bg-grey-darken-4" permanent :rail="rail" @click="rail = false">

			<v-list-item
				style="margin-top: 5px; margin-bottom: 5px;"
				nav
				:title="selectedProfilePick[0]?.toUpperCase() + selectedProfilePick.slice(1)"
				subtitle="Angel Villamil"
			>
				<template v-slot:prepend>
					<v-avatar rounded :image="`src/assets/img/profiles/${selectedProfilePick}.png`"></v-avatar>
				</template>
				<template v-slot:append>
					<v-btn
						variant="text"
						icon="mdi-chevron-left"
						@click.stop="rail = !rail"
					></v-btn>
				</template>
			</v-list-item>

			<v-divider />

			<v-list density="compact">

				<v-list-item>
					<v-text-field
						prepend-icon="mdi-magnify"
						v-model="search"
						@input="updateSearch"
						@click:clear="clearSearch"
						placeholder="Search"
						variant="outlined"
						density="compact"
						clearable
					></v-text-field>
				</v-list-item>
				
				<v-list-item>
					<v-select
						prepend-icon="mdi-pokeball"
						v-model="types"
						@vue:updated="updateTypes"
						:items="itemsTypes"
						multiple
						placeholder="Types"
						variant="outlined"
						density="compact"
						chips
						clearable
					></v-select>
				</v-list-item>

			</v-list>
		</v-navigation-drawer>
</template>

<script lang="ts">

	import { mapState, mapMutations } from 'vuex';

  export default {
        
	data () {
		return {
			rail: true,
			search: "",
			types: [],
			itemsTypes: ["grass","normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"],
			selectedProfilePick: "",
		}
	},

	computed: {
		...mapState(['profilePick']),
	},

  methods: {
    ...mapMutations(['setSearch', 'setTypes']),

    updateSearch() {
      this.setSearch(this.search);
    },

		clearSearch() {
      this.setSearch("");
    },

		updateTypes() {
			this.setTypes(this.types)
		}
  },

	mounted() {
		this.selectedProfilePick = this.profilePick;
		console.log(this.profilePick)
	},
}
</script>