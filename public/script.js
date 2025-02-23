// Fetch timezones from JSON file and populate the select element
fetch('timezones.json')
	.then(response => response.json())
	.then(data => {
		const select = document.getElementById("timezone-select");
		data.forEach(timezone => {
			const option = document.createElement("option");
			option.value = timezone.tzCode;
			timezone.label = timezone.label.replace(/_/g, " ");
			option.textContent = timezone.label;
			select.appendChild(option);
		});
	})
	.catch(error => console.error('Error fetching timezones:', error));