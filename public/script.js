// Fetch timezones from JSON file and populate the select element
fetch('timezones.json')
	.then(response => response.json())
	.then(data => {

		// Sort the timezones alphabetically by label
		data.sort((a, b) => {
			const labelA = a.label.toUpperCase(); // Ignore upper and lowercase
			const labelB = b.label.toUpperCase(); // Ignore upper and lowercase
			if (labelA < labelB) {
				return -1;
			}
			if (labelA > labelB) {
				return 1;
			}
			return 0;
		});
		
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