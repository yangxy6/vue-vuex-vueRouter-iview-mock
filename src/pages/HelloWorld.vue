<template>
	<div>
		<Row>
			<Col span="24">
				<div>欢迎{{nameList.name}}</div>
				<Table :columns="columns1" :data="nameList.list"></Table>
			</Col>
		</Row>
	</div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
export default {
	name: 'HelloWorld',
	created () {
	  this.getName()
	},
	data () {
		return {
			columns1: [
					{
							title: 'id',
							key: 'id'
					},
					{
							title: 'email',
							key: 'email'
					}
			]
		}
  },
	computed: {
    ...mapState({
      nameList: ({root}) => root.nameList
    })
  },
	methods: {
		...mapActions(['getName'])
	}
}
</script>