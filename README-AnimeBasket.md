# Anime Basket #

**_Discover Your Next Anime Adventure: Where Spoilers Dare Not Tread!_**

## <u> I. Introduction </u> ##

### A. Purpose ###

Anime communities have thrived on website forums, vibrant hubs where fans passionately engage with their favorite content. Yet, navigating the tricky terrain of spoilers has remained a consistent challenge over the years.

Our primary goal is to create a welcoming and secure environment that fosters vibrant discussions among anime fans and their friends, with a particular focus on minimizing spoilers. By integrating spoiler tags in comments and discussions, we ensure that our community remains inclusive and healthy. This feature allows avid viewers to freely discuss the latest episodes, while protecting the viewing experience for those who may be catching up.


### B. Industry/ domain ###

The primary domain of this project is the **entertainment** industry, specifically **focusing on anime streaming and fan engagement.** This sector is currently thriving but faces challenges in spoiler management. 

The anime industry's value chain encompasses content creation, licensing, distribution, merchandising, and fan engagement, with key concepts including simulcasting, fan subbing, anime seasons, and spoiler management techniques.

Additionally, the project's relevance extends beyond anime, offering valuable insights and applications to other industries such as film, television, gaming, and literature, where managing spoilers and enhancing community engagement are equally critical.

### C. Stakeholders ###

 Several key stakeholders are directly involved or affected by the development and operation of the software. Here’s a detailed breakdown of these stakeholders, why they would care about the software, and their expectations:

 * _Users (Anime Viewers)_
    * _Why they care:_ Users are central to the website's purpose. They care about the software because it provides a platform to track, share, and discuss anime without the risk of encountering spoilers.

    * _Expectations:_ Users expect a user-friendly, reliable, and engaging platform that effectively blocks or hides spoilers, offers comprehensive tracking features, and fosters community interaction through comments and shared lists.

* _Developers_
    * _Why they care:_ These stakeholders are involved in the design, development, and ongoing technical support of the website. Their primary concern is the technical prowess and innovation of the software.

    * _Expectations:_ Developers look for a software architecture that is maintainable, scalable, and flexible for future enhancements. They expect a clear roadmap for development and efficient tools for deploying updates and fixes.

* _Content Creators (Anime Reviewers, Bloggers)_
    * _Why they care:_ Content creators use the platform to build an audience and share their insights on anime. They rely on the website to connect with like-minded viewers and to gain visibility in the anime community.

    * _Expectations:_ They expect the platform to provide features that enhance their content's visibility, such as featured reviews or integration with social media platforms. Additionally, they need tools to protect their content from being spoiled for other users.

## <u> II. Product Description </u> ##

### A. Architectural Diagram ###

<img src = "./Documents/Illustration/AnimeBasket_Diagram.jpg" alt= "structure diagram" align= "center" width = "80%" />
<br />
<br />
<img src = "./Documents/Illustration/blog_comments.png" alt = "blog comment diagram" align = "center" width = "70%" />
<br />
<br />
<img src = "./Documents/Illustration/draft_anime.png" alt = "written concept draft" align = "center" width = "80%" />

 ### B. User Stories ###

 

 As an anime' viewer, I've had my fair share of frustrations with spoilers and non-customisable list of the shows that I want to watch. I've honed in on the _three pain points_ I consistently encounter when visiting anime websites.

To ensure top-notch quality, scalability, and seamless maintenance, I'm taking a targeted approach by addressing each pain point with one distinct feature and its corresponding design. 


# <code style = "color : yellow"> <b>1</b> Pain Point : <b>1</b> Feature : <b>1</b> Design</code> #
  

## 3 Paint Points

1. Spoilers -> Spoiler tag in the comment section
2. Limited sharing with Friends -> Privacy / Friend request (Keep spoil-mongers away!)
3. Customised Anime List -> Minimalist design (Animelist websites have superlative lists in general.)

**Plan**
- Get inspo from AnimeList website (longest existing animelist website)
<br />

_Rationale_ Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know. (Jakob’s Law, Laws of UX Design)
<br />

- Focus 3 major pain points.
<br/>

_Rationale_  Avoid getting trapped in the rabbit hole of desired features
             Securing the quality, scalability and maintenance of each feature before adding new ones.


### C. User Flow / Wire frame Design ###

<img src = "./Documents/Illustration/figma1.png" alt = "user journey" align = "center" width = "80%" />

_PS: This is the **INITIAL** design_
<br />

The anime list filter on the main page is accessible to everyone, allowing users to browse and refine their selections with ease. However, for those looking to engage more deeply—such as reading, creating, and commenting on blogs—a quick sign-up or login is required. This setup ensures full access to our interactive features for registered users.


<img src = "./Documents/Illustration/wireframe_1.png" alt = "draft welcome page" align= "center" width = "70%" />
<br />
<br />

<img src = "./Documents/Illustration/wireframe_user.png" alt = "account user page" align= "center" width = "70%" />
<br />
<br />
<img src = "./Documents/Illustration/wireframe_blog_navbar_comment_spoiler.png" alt = "draft UI blog navbar comment and spoiler tag" align= "center" width = "70%" />
<br />
<br />
<img src = "./Documents/Illustration/wireframe_friendlist.png" alt = "drafts friendlist page" align= "center" width = "70%" />


### D. Features ###

* User Account - Sign in or sign up
* Anime Search Bar - To filter anime' choices (Jikan API)
* Blog
* Comments
* Spoiler Feature

### Feature Screen ###

<img src = "./Documents/Illustration/feature_screen.png" alt = "criteria to meet for every feature req" align= "center" width = "70%" />

### E. Tech Stack ###

I applied the MVC structure applied in different paths.

_Frontend:_

- **HTML, CSS, JavaScript:** Main usage for UI
- **React.js:** jS library for user interfaces
- **Material UI:** library of React components to implement design system in my app.
- **Jikan API:** Anime list API. The documentation relied heavily on its documentation.

_Backend:_

  - **Node.js:** JavaScript runtime environment.
  - **Express.js:** Node.js web app framework
  - **MySQL:** Database management system.
  - **Bruno:** API development and testing tool.
  - **Docker:** Cointainer for packaging, distributing, and running applications.


### F. Testing ###

_Backend Testing_

- **Bruno**: used to test the connection between data import and export to and from the database (server and web database) — to ensure data integrity and functionality.
- **Docker - MySQL**: To check database - server - API connection.

<img src = "./Documents/Illustration/dockerdb_1.png" alt = "show database" align = "center" width = "80%" />
<br />
<br />
<img src = "./Documents/Illustration/dockerdb_2.png" alt = "blog and spoiler feature" align = "center" width = "80%" />

_Frontend Testing_

- **Browser Dev Tools:** To inspect elements, check network requests, and debugging.
- **Console:** To log and debug jS code.


<img src = "./Documents/Illustration/bruno_apiusers.png" alt = "fake user db" align = "center" width = "80%" />
<br />
<br />
<img src = "./Documents/Illustration/bruno_blog_post.png" alt = "user id - blog id - update time connection" align = "center" width = "80%" />
<br />
<br />
<img src = "./Documents/Illustration/bruno_spoilerfeature.png" alt = "user id - blog id - update time - spoiler tag connection" align = "center" width = "80%" />

_Third Party API Testing_

- **Jikan API:** Used its documentation as a basis on how the desired/requested data will be rendered. 
               - Used Bruno, Docker, MySQL to ensure data flow.


<img src = "./Documents/Illustration/animebasket_spoilertag_hide.png" alt = "blocked comment tagged as spoiler" align = "center" width = "80%" />

<br />
<br />

<img src = "./Documents/Illustration/animebasket_spoiler_show.png" alt = "show Im a spoiler" align = "center" width = "80%" />

### G. Installation ###

### Instructions ###


1. Navigate to the app directory:
```bash
cd ./anime-basket
```

2. Install dependencies using npm:
``` bash
npm install
```

3. Start MySQL DB Docker container

**Note**: Ensure that the `.env` file is in the root folder.

### Create MySQL Container

Run the following command to create a MySQL container:
```bash
docker run -p 3306:3306 --name anime_basket_mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:8.3.0
```
### Start MySQL Container

```bash
docker start anime_basket_mysql
```

### Connect from the Command Line
```bash
docker exec -it anime_basket_mysql bash
```
### Log into MySQL
```bash
mysql -u root -p
```

## References
1. https://github.com/institutedata/capstone-rodasamortin
2. https://lawsofux.com/
3. https://hub.docker.com/_/mysql
4. https://docs.api.jikan.moe/#section/Information/JSON-Notes
5. IOD Module slides
6. https://myanimelist.net/ (Caution: This might contain a Not Safe For Work content)

## Books
To work on my soft skills. I want become a great developer and user advocate.

1. The Pragmatic Programmer by David Thomas, Andrew Hunt
2. The Design of Everyday Things by Don Norman
