let container = document.querySelector('#container')

let req = new XMLHttpRequest()
req.addEventListener("load", displayInfo)
req.open('GET', 'https://api.github.com/users/SalazNys')
req.send()

function displayInfo(){
	let item = JSON.parse(this.responseText)
	let info = ''

		info += `
			<div class="head">${item.name}</div>
			<div class="columnContianer">
				<div class="leftColumn">
					<h2>The Basics</h2>
					<ul>
						<li>Name: ${item.name}</li>
						<li>Github URL: ${item.html_url}</li>
						<li>Email: ${item.email}</li>
						<li>Company: ${item.company}</li>
						<li>Website: ${item.blog}</li>
					</ul>
				</div>
				<div class="centerColumn">
					<h2>The Story</h2>
					<p>${item.bio}</p>
				</div>
				<div class="rightColumn">
					<img src="${item.avatar_url}"
				</div>
			</div>
		`
	container.innerHTML = info
}
