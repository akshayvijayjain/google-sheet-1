export default {
	myVar1: [],
	newEmployeedData: {},

	insertRow(){
		postOne.run().then( x => console.log(x));
	},

	updateRow(){
		getEmp.run().then(employeeData => {
			this.newEmployeedData = {
				...employeeData[0],
				...JSONForm1.formData
			}
			PATCH.run().then(response=>{
				console.log('response of postEmp',response);
			})
		})
	},
	
	submitForm(){
		var matchingRow =getEmp.data;
		if(matchingRow.length === 0){
			this.insertRow();
		}else {
			this.updateRow() ;
		}
	},

		async keyMapper(formData){
			//	use async-await or promises
			//	await storeValue('varName', 'hello world')
		}
}