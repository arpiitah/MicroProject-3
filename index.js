let globalTipPercent = 0

const calculateBill = (tipPercent = 0) => {
	let billAmount = Number(document.getElementById('bill-input').value)
	let numberOfPeople = Number(document.getElementById('people-input').value)
	if(tipPercent != 0)
		globalTipPercent = tipPercent
	let tipAmount = (globalTipPercent/100) * billAmount
	billAmount += tipAmount

	let tipAmountPerPerson = tipAmount / numberOfPeople
	let totalPerPerson = billAmount / numberOfPeople
	document.getElementById('tip-per-person').innerText = `₹ ${tipAmountPerPerson.toFixed(2)}`
	document.getElementById('total-per-person').innerText = `₹ ${totalPerPerson.toFixed(2)}`
}

const reset = () => {
	document.getElementById('bill-input').value = ''
	document.getElementById('people-input').value = '1'
	document.getElementById('tip-per-person').innerText = `₹ 0.00`
	document.getElementById('total-per-person').innerText = `₹ 0.00`
	globalTipPercent = 0
}