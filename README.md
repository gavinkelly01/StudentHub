# Dublin Student Hub Website

Welcome to the Dublin Student Hub repository! This project was created by third-year computing students at the National College of Ireland. Inspired by our own challenges in accessing vital information when starting college, we aimed to build a comprehensive online resource for students in Dublin.

## Introduction

The Dublin Student Hub Website is designed to provide a one-stop platform for all things related to student life in Dublin. Whether you're looking for accommodation, financial aid, healthcare resources, or simply want to explore the vibrant city scene, our website aims to empower you with essential information and guides.

## Features

- **Easy Navigation:** Explore categories such as Events, Finance, Health, and Resources.
- **Detailed Content:** Dive into articles covering nightlife, concerts, accommodation, student grants, and more.
- **User-Friendly Design:** Responsive and accessible across all devices and platforms.
- **Interactive Elements:** Dropdown menus, clickable buttons, and engaging banners for intuitive browsing.
- **Community Engagement:** Blog section and social media integration to share updates and connect with peers.

## Installation

To run the Dublin Student Hub Website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/gavinkelly01/StudentHub.git
2. Navigate to the project directory:
      ```bash
   cd StudentHub
3.Open the <b> index.html </b> file in your web browser to navigate through the website

## Usage

**Navigate through sections using the menu bar or drop down menu**
**Click on links on the webpage to access other content or external resources/support groups**
**Content and interface is designed specifically to cater towards prospective and third-level students in Ireland specifically Dublin**

## Contributing
We welcome contributions to enhance the Dublin Student Hub Website. As fellow students, your input is invaluable. If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and improvements.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature/new-feature).
6. Create a new Pull Request.

## About Us

### Our Inspiration
This project is developed by third-year computing students at the National College of Ireland. Having experienced challenges in accessing vital information during our own college journey, we set out to create a solution that would simplify and enrich the experience for future Dublin students.

### Our Mission
Our goal is to build a comprehensive online platform that provides Dublin students with essential resources and insights to navigate student life effectively. From academic support to lifestyle tips and community engagement, we aim to empower students with the tools they need to thrive.

### Meet the Team
- **Adam Cowan** - Project Manager.
- **Eoin Wyse** - Developer and Content Researcher.
- **Aisha Ntuli** - Front End Developer.
- **Dillon O'Connor** - UI/UX Developer.
- **Gavin Kelly** - Back End Developer.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Testing Set-up (Guide to Installation of third party software included)
Testing Set-up

PhpUnit:
	1. Download composer from website and install
	2. Configure a path for composer.
		1)Open file explorer
		2)Right click on this pc
		3)Click advanced System settings on the right side of system settings
		4)Click advanced in system properties and select environment variables 
		5)Scroll down system variables until you see path (highlight path by clicking on it)
		6)Click ‘Edit’
		7)Click new and set the file path to PHP and composer/bin
	3. Install via Composer with ‘composer require --dev phpunit/phpunit’
	4. In bash (terminal) ‘Composer install’
	5. Configure Php interpreter (Go to settings in your ide, then languages and frameworks and ensure that the path leads back to 	your install of php i.e. "C:\php8.3")
	6. Ensure PHPUnit is configured in the project.

To run the PHP unit tests edit run configurations, select test scope and set to directory before listing the path of the directory and selecting use alternative config file (set the file as the phpunit.xml file).
Ensure the correct interpreter (PHP 8.3) is selected and run the tests. Be sure to configure the correct paths before running said tests(this includeds the path in the testing file).


Node.js and Cypress:
	1. Download node.js and cypress from website and install
	2. Configure a path for node.js
		1) Open file explorer
		2) Right click on this pc
		3) Click advanced System settings on the right side of system settings
		4) Click advanced in system properties and select environment variables 
		5) Scroll down system variables until you see path (highlight path by clicking on it)
		6) Click ‘Edit’
		7) Click new and set the file path to nodejs
To run the server and cypress open the terminal after installing dependencies and start the server by typing ‘node server js’.
Once the server is up and running open a new terminal (don’t close the previous terminal, else it will terminate the process) and type ‘npx cypress open’ from there select E2E for end to end testing and run your tests by selecting the file and clicking the play icon.

