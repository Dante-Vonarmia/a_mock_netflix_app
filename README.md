### USAGE

#### Step 1
clone the repository: 

	git clone https://github.com/Dante-Vonarmia/a_mock_netflix_app

#### step 2
Enter the folder wherever you've download:   

	cd ./a_mock_netflix_app

#### Step 3
run it: 
	
	npm install && npm run dev

#### The task is to create a mock Netflix like page with editable rows of titles using any framework you want (preferably React).
> Please complete the below test and share the git link and also any explanation in the email if required. 
---
##### You are given the following JSON object which will serve as mock back­end data: 
		
		{
			'mylist': [{
				'title': 'Futurama',
				'id': 1,
				'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
			}, {
				'title': 'The Interview',
				'id': 2,
			x'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
			}, {
				'title': 'Gilmore Girls',
				'id': 3,
				'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
			}],
			'recommendations': [{
				'title': 'Family Guy',
				'id': 4,
				'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
			}, {
				'title': 'The Croods',
				'id': 5,
				'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
			}, {
				'title': 'Friends',
				'id': 6,
				'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
			}]
		}

---

- [x] The top row will be the ‘My List’ row and will display the titles included in ‘mylist’ array.
 
- [x] The second row will be the recommendation row which will display the titles included in ‘recommendations’ array.
 
- [x] Hovering over an image in the ‘My List’ row should create a “Remove” button displayed below the image. Clicking on the button should remove the title from the “My List” row.
 
- [x] Hovering over an image in the recommendations row should create an “Add” button displayed below the image. Clicking on the button should add the title to the “My List” row.
 
- [x] The list of titles in the “My List” row should be displayed at the bottom of the page.

- [x] Remove should move the title to recommended  

- [x] Put a netflix logo at the top left  

- [x] Ensure that a http call is made to retrieve data and not use JSON file as an object with data  

- [x] Render the data with a single template only and ensure that different functions are written for the same layout for add and remove  

- [x] PLEASE DO IT IN REACT AND REDUX  

- [x] Please create a git repository and push the code there and send across the link when complete.  
