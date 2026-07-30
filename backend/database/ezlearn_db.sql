-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2026 at 03:17 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ezlearn_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `description` text NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `name`, `slug`, `description`, `icon`, `color`, `created_at`, `updated_at`) VALUES
(1, 'React', 'react', 'Build modern user interfaces with React. Learn components, hooks, state management, and more.', 'fa-brands fa-react', '#61DAFB', '2026-07-23 15:54:44', '2026-07-26 12:25:11'),
(2, 'Angular', 'angular', 'Build powerful single-page applications with Angular. Learn components, services, routing, and more.', 'fa-brands fa-angular', '#DD0031', '2026-07-23 15:54:44', '2026-07-26 12:25:11'),
(3, 'Laravel', 'laravel', 'Master the PHP framework for elegant web applications. Learn MVC, Eloquent, Blade, and more.', 'fa-brands fa-laravel', '#FF2D20', '2026-07-23 15:54:45', '2026-07-26 12:25:11'),
(4, 'Node.js', 'nodejs', 'Build scalable server-side applications with Node.js. Learn Express, APIs, authentication, and more.', 'fa-brands fa-node-js', '#339933', '2026-07-23 15:54:45', '2026-07-26 12:25:11'),
(5, 'Vue.js', 'vuejs', 'Build progressive web applications with Vue.js. Learn components, directives, composition API, and more.', 'fa-brands fa-vuejs', '#4FC08D', '2026-07-23 15:54:45', '2026-07-26 12:25:11'),
(6, 'Python', 'python', 'Learn Python programming language. Master fundamentals, web development, and data processing.', 'fa-brands fa-python', '#3776AB', '2026-07-23 15:54:46', '2026-07-26 12:25:11'),
(7, 'CSS', 'css', 'Master CSS styling. Learn layouts, animations, and responsive design.', 'fa-brands fa-css3-alt', '#2965F1', '2026-07-23 15:54:46', '2026-07-26 12:25:11'),
(8, 'TypeScript', 'typescript', 'Master TypeScript for type-safe JavaScript. Learn types, interfaces, generics, and advanced patterns.', 'fa-solid fa-code', '#3178C6', '2026-07-23 15:54:46', '2026-07-26 12:25:11'),
(12, 'Django', NULL, 'Python framework for building web application', NULL, NULL, '2026-07-29 18:26:24', '2026-07-29 18:31:52');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `subject` varchar(150) DEFAULT 'Feedback',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `name`, `email`, `message`, `created_at`, `subject`, `updated_at`) VALUES
(1, 'Zubair', 'Zubair@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:02:23', 'Feedback', '2026-07-26 14:05:37'),
(2, 'Abid', 'abid26@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:03:41', 'Feedback', '2026-07-26 14:05:37'),
(3, 'Rahol', 'rahol@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:04:05', 'Feedback', '2026-07-26 14:05:37'),
(4, 'Samiya', 'samiya@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:04:18', 'Feedback', '2026-07-26 14:05:37'),
(5, 'danish', 'danish@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:04:30', 'Feedback', '2026-07-26 14:05:37'),
(6, 'Sumeer', 'sumeer@gmail.com', 'Great for students learning web devlopment', '2026-07-19 15:21:37', 'Feedback', '2026-07-26 14:05:37'),
(8, 'Sumeer', 'sumeer@gmail.com', 'Great for students learning web devlopment', '2026-07-19 15:23:57', 'Feedback', '2026-07-26 14:05:37'),
(9, 'Amara', 'Amara@gmail.com', 'Hi ezlearn team the website need improvements and add some more topics to discovers altough its great and very helpfull', '2026-07-19 15:25:02', 'Feedback', '2026-07-26 14:05:37');

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `lesson_id` int(11) NOT NULL,
  `topic_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `code` text DEFAULT NULL,
  `explanation` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`lesson_id`, `topic_id`, `title`, `description`, `code`, `explanation`, `updated_at`) VALUES
(1, 1, 'Introduction to Components', 'Learn the basics of React components and how to create functional components.', 'function Welcome() {\n  return <h1>Hello, World!</h1>;\n}', 'A React component is a JavaScript function that returns JSX (HTML-like syntax).', '2026-07-26 12:25:30'),
(2, 1, 'Props in React', 'Pass data between components using props.', 'function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\nfunction App() {\n  return <Greeting name=\"John\" />;\n}', 'Props are arguments passed into React components. They are read-only and help make components reusable.', '2026-07-26 12:25:30'),
(3, 1, 'Children Prop', 'Pass nested content to components using children prop.', 'function Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n\nfunction App() {\n  return (\n    <Card>\n      <h2>My Card</h2>\n      <p>This content is passed as children.</p>\n    </Card>\n  );\n}', 'The children prop allows you to pass elements between the opening and closing tags of a component.', '2026-07-26 12:25:30'),
(4, 2, 'useState Hook', 'Add state to functional components using useState.', 'function Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}', 'useState returns an array with two values: the current state and a function to update it.', '2026-07-26 12:25:30'),
(5, 2, 'useEffect Hook', 'Handle side effects in functional components.', 'function Timer() {\n  const [time, setTime] = useState(0);\n  \n  useEffect(() => {\n    const interval = setInterval(() => {\n      setTime(t => t + 1);\n    }, 1000);\n    \n    return () => clearInterval(interval);\n  }, []);\n  \n  return <p>Time: {time}s</p>;\n}', 'useEffect runs after every render. The second argument [] makes it run only once.', '2026-07-26 12:25:30'),
(6, 2, 'useContext Hook', 'Share data across components without prop drilling.', 'const ThemeContext = createContext(\'light\');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <ChildComponent />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ChildComponent() {\n  const theme = useContext(ThemeContext);\n  return <p>Current theme: {theme}</p>;\n}', 'useContext provides a way to pass data through the component tree without prop drilling.', '2026-07-26 12:25:30'),
(7, 3, 'State Lifting', 'Share state between components by lifting it up.', 'function Parent() {\n  const [text, setText] = useState(\'\');\n  \n  return (\n    <div>\n      <ChildInput onTextChange={setText} />\n      <ChildDisplay text={text} />\n    </div>\n  );\n}\n\nfunction ChildInput({ onTextChange }) {\n  return <input onChange={(e) => onTextChange(e.target.value)} />;\n}\n\nfunction ChildDisplay({ text }) {\n  return <p>You typed: {text}</p>;\n}', 'Lifting state up means moving state to the nearest common ancestor of components that need it.', '2026-07-26 12:25:30'),
(8, 3, 'useReducer Hook', 'Manage complex state logic with useReducer.', 'function reducer(state, action) {\n  switch (action.type) {\n    case \'increment\':\n      return { count: state.count + 1 };\n    case \'decrement\':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n  \n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: \'increment\' })}>+</button>\n      <button onClick={() => dispatch({ type: \'decrement\' })}>-</button>\n    </div>\n  );\n}', 'useReducer is a more advanced alternative to useState for complex state logic.', '2026-07-26 12:25:30'),
(9, 4, 'React Router Setup', 'Add navigation to your React app.', 'import { BrowserRouter, Routes, Route } from \'react-router-dom\';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}', 'React Router enables client-side routing. BrowserRouter wraps your app, Routes define your route configuration.', '2026-07-26 12:25:30'),
(10, 4, 'Navigation Links', 'Create navigation links with React Router.', 'import { Link, NavLink } from \'react-router-dom\';\n\nfunction Navigation() {\n  return (\n    <nav>\n      <Link to=\"/\">Home</Link>\n      <NavLink to=\"/about\" className={({ isActive }) => isActive ? \'active\' : \'\'}>\n        About\n      </NavLink>\n    </nav>\n  );\n}', 'Link replaces <a> tags for navigation. NavLink adds active styling when the link matches the current URL.', '2026-07-26 12:25:30'),
(11, 5, 'Introduction to Angular Components', 'Learn the basics of Angular components and how to create them.', 'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-root\',\n  template: \'<h1>Hello, World!</h1>\'\n})\nexport class AppComponent {}', 'Angular components define reusable UI pieces. The @Component decorator adds metadata and templates.', '2026-07-26 12:25:30'),
(12, 5, 'Data Binding', 'Bind data between components and templates.', 'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-root\',\n  template: `\n    <p>{{ message }}</p>\n    <input [(ngModel)]=\"message\" />\n  `\n})\nexport class AppComponent {\n  message = \'Hello, World!\';\n}', 'Angular supports one-way ({{ }}) and two-way ([(ngModel)]) data binding.', '2026-07-26 12:25:30'),
(13, 6, 'Creating Services', 'Build services to share data and logic across components.', 'import { Injectable } from \'@angular/core\';\n\n@Injectable({\n  providedIn: \'root\'\n})\nexport class DataService {\n  getData() {\n    return [\'item1\', \'item2\', \'item3\'];\n  }\n}', 'Services contain business logic and data that can be shared across components.', '2026-07-26 12:25:30'),
(14, 6, 'Dependency Injection', 'Inject services into components using Angular\'s DI system.', 'import { Component, OnInit } from \'@angular/core\';\nimport { DataService } from \'./data.service\';\n\n@Component({\n  selector: \'app-data\',\n  template: \'<ul><li *ngFor=\"let item of data\">{{ item }}</li></ul>\'\n})\nexport class DataComponent implements OnInit {\n  data: string[] = [];\n  \n  constructor(private dataService: DataService) {}\n  \n  ngOnInit() {\n    this.data = this.dataService.getData();\n  }\n}', 'Dependency Injection is a design pattern where services are provided to components via the constructor.', '2026-07-26 12:25:30'),
(15, 7, 'Angular Router Setup', 'Set up routing in your Angular application.', 'import { NgModule } from \'@angular/core\';\nimport { RouterModule, Routes } from \'@angular/router\';\nimport { HomeComponent } from \'./home.component\';\nimport { AboutComponent } from \'./about.component\';\n\nconst routes: Routes = [\n  { path: \'\', component: HomeComponent },\n  { path: \'about\', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule {}', 'Angular Router maps URL paths to components. Routes are defined in a Routes array.', '2026-07-26 12:25:30'),
(16, 8, 'Laravel MVC Overview', 'Understand the Model-View-Controller pattern in Laravel.', '// Route\nRoute::get(\'/users\', [UserController::class, \'index\']);\n\n// Controller\nclass UserController {\n  public function index() {\n    $users = User::all();\n    return view(\'users.index\', [\'users\' => $users]);\n  }\n}\n\n// View (users/index.blade.php)\n@foreach ($users as $user)\n  <p>{{ $user->name }}</p>\n@endforeach', 'MVC separates concerns: Models handle data, Views handle UI, Controllers handle logic.', '2026-07-26 12:25:30'),
(17, 8, 'Laravel Routing', 'Define routes and handle HTTP requests.', '// Basic routes\nRoute::get(\'/\', function () {\n  return view(\'welcome\');\n});\n\n// Route parameters\nRoute::get(\'/user/{id}\', function ($id) {\n  return \'User \'.$id;\n});\n\n// Route groups\nRoute::middleware([\'auth\'])->group(function () {\n  Route::get(\'/dashboard\', [DashboardController::class, \'index\']);\n});', 'Routes define URLs and how to respond to HTTP requests.', '2026-07-26 12:25:30'),
(18, 9, 'Eloquent Models', 'Work with databases using Eloquent ORM.', '// Model\nclass User extends Model {\n  protected $fillable = [\'name\', \'email\', \'password\'];\n}\n\n// Querying\n$users = User::where(\'active\', true)->get();\n$user = User::find(1);\n$user->update([\'name\' => \'John\']);\n$user->delete();', 'Eloquent provides an ActiveRecord implementation for working with databases.', '2026-07-26 12:25:30'),
(19, 9, 'Eloquent Relationships', 'Define and query relationships between models.', '// One to Many\nclass Post extends Model {\n  public function user() {\n    return $this->belongsTo(User::class);\n  }\n}\n\nclass User extends Model {\n  public function posts() {\n    return $this->hasMany(Post::class);\n  }\n}\n\n// Querying relationships\n$posts = User::find(1)->posts()->where(\'published\', true)->get();', 'Eloquent supports various relationships: belongsTo, hasMany, hasOne, belongsToMany, etc.', '2026-07-26 12:25:30'),
(20, 10, 'Blade Basics', 'Learn the Laravel Blade templating engine.', '<!-- Layout -->\n<!-- layouts/app.blade.php -->\n<html>\n  <body>\n    @yield(\'content\')\n  </body>\n</html>\n\n<!-- Child view -->\n<!-- home.blade.php -->\n@extends(\'layouts.app\')\n\n@section(\'content\')\n  <h1>Welcome {{ $name }}</h1>\n  @foreach($items as $item)\n    <p>{{ $item }}</p>\n  @endforeach\n@endsection', 'Blade provides a simple syntax for creating templates with inheritance and control structures.', '2026-07-26 12:25:30'),
(21, 10, 'Blade Components', 'Create reusable UI components in Blade.', '<!-- Component class -->\nclass Alert extends Component {\n  public $type;\n  public $message;\n  \n  public function render() {\n    return view(\'components.alert\');\n  }\n}\n\n<!-- Component usage -->\n<x-alert type=\"success\" message=\"Operation successful!\" />\n\n<!-- Component view -->\n<!-- components/alert.blade.php -->\n<div class=\"alert-{{ $type }}\">\n  {{ $message }}\n</div>', 'Blade components are reusable UI pieces that combine a template with PHP logic.', '2026-07-26 12:25:30'),
(22, 11, 'Introduction to Node.js', 'Get started with Node.js and npm.', '// Basic HTTP server\nconst http = require(\'http\');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \'Content-Type\': \'text/plain\' });\n  res.end(\'Hello, World!\');\n});\n\nserver.listen(3000, () => {\n  console.log(\'Server running on port 3000\');\n});', 'Node.js allows JavaScript to run on the server. It uses an event-driven, non-blocking I/O model.', '2026-07-26 12:25:30'),
(23, 11, 'File System Operations', 'Read and write files in Node.js.', 'const fs = require(\'fs\');\n\n// Async read\nfs.readFile(\'file.txt\', \'utf8\', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// Async write\nfs.writeFile(\'output.txt\', \'Hello, Node.js!\', (err) => {\n  if (err) throw err;\n  console.log(\'File saved!\');\n});', 'The File System (fs) module provides methods for working with files.', '2026-07-26 12:25:30'),
(24, 12, 'Express Basics', 'Build web applications with Express.', 'const express = require(\'express\');\nconst app = express();\n\napp.get(\'/\', (req, res) => {\n  res.json({ message: \'Hello, Express!\' });\n});\n\napp.get(\'/users/:id\', (req, res) => {\n  res.json({ user: req.params.id });\n});\n\napp.listen(3000, () => {\n  console.log(\'Express server running on port 3000\');\n});', 'Express is a minimal and flexible Node.js web application framework.', '2026-07-26 12:25:30'),
(25, 12, 'Express Middleware', 'Use middleware to handle requests in Express.', 'const express = require(\'express\');\nconst app = express();\n\n// Logger middleware\napp.use((req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  next();\n});\n\n// Body parser\napp.use(express.json());\n\n// Error handler\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ error: \'Something went wrong!\' });\n});\n\napp.get(\'/\', (req, res) => {\n  res.json({ message: \'Hello, Express!\' });\n});\n\napp.listen(3000);', 'Middleware functions have access to the request and response objects.', '2026-07-26 12:25:30'),
(26, 13, 'Building REST APIs', 'Create RESTful APIs with Express.', 'const express = require(\'express\');\nconst app = express();\napp.use(express.json());\n\nlet users = [{ id: 1, name: \'John\' }];\n\n// GET all users\napp.get(\'/api/users\', (req, res) => {\n  res.json(users);\n});\n\n// GET single user\napp.get(\'/api/users/:id\', (req, res) => {\n  const user = users.find(u => u.id === parseInt(req.params.id));\n  if (!user) return res.status(404).json({ error: \'User not found\' });\n  res.json(user);\n});\n\n// POST new user\napp.post(\'/api/users\', (req, res) => {\n  const newUser = { id: users.length + 1, ...req.body };\n  users.push(newUser);\n  res.status(201).json(newUser);\n});\n\napp.listen(3000);', 'REST APIs follow CRUD operations: Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE).', '2026-07-26 12:25:30'),
(27, 13, 'Authentication with JWT', 'Secure your APIs with JSON Web Tokens.', 'const jwt = require(\'jsonwebtoken\');\nconst express = require(\'express\');\nconst app = express();\napp.use(express.json());\n\nconst SECRET_KEY = \'my-secret-key\';\n\n// Login endpoint\napp.post(\'/api/login\', (req, res) => {\n  const { username, password } = req.body;\n  if (username === \'admin\' && password === \'password\') {\n    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: \'1h\' });\n    res.json({ token });\n  } else {\n    res.status(401).json({ error: \'Invalid credentials\' });\n  }\n});\n\n// Protected route\napp.get(\'/api/protected\', (req, res) => {\n  const token = req.headers.authorization?.split(\' \')[1];\n  if (!token) return res.status(401).json({ error: \'No token provided\' });\n  \n  try {\n    const decoded = jwt.verify(token, SECRET_KEY);\n    res.json({ message: \'Protected data\', user: decoded.username });\n  } catch (error) {\n    res.status(401).json({ error: \'Invalid token\' });\n  }\n});\n\napp.listen(3000);', 'JWT (JSON Web Token) is a popular method for authentication.', '2026-07-26 12:25:30'),
(28, 14, 'Introduction to Vue', 'Get started with Vue.js.', '<div id=\"app\">\n  <h1>{{ message }}</h1>\n  <button @click=\"increment\">Count: {{ count }}</button>\n</div>\n\n<script>\nconst app = Vue.createApp({\n  data() {\n    return {\n      message: \'Hello, Vue!\',\n      count: 0\n    };\n  },\n  methods: {\n    increment() {\n      this.count++;\n    }\n  }\n}).mount(\'#app\');\n</script>', 'Vue.js is a progressive framework for building UIs. It focuses on the view layer.', '2026-07-26 12:25:30'),
(29, 14, 'Vue Directives', 'Learn Vue directives for DOM manipulation.', '<div id=\"app\">\n  <!-- v-if conditional rendering -->\n  <p v-if=\"isVisible\">Visible content</p>\n  \n  <!-- v-for loop -->\n  <ul>\n    <li v-for=\"item in items\" :key=\"item.id\">\n      {{ item.name }}\n    </li>\n  </ul>\n  \n  <!-- v-model two-way binding -->\n  <input v-model=\"search\" placeholder=\"Search...\" />\n  <p>Searching for: {{ search }}</p>\n</div>\n\n<script>\nconst app = Vue.createApp({\n  data() {\n    return {\n      isVisible: true,\n      items: [{ id: 1, name: \'Item 1\' }, { id: 2, name: \'Item 2\' }],\n      search: \'\'\n    };\n  }\n}).mount(\'#app\');\n</script>', 'Directives are special attributes with the v- prefix. They apply reactive behavior to the DOM.', '2026-07-26 12:25:30'),
(30, 15, 'Vue Components', 'Create reusable Vue components.', '// Component definition\napp.component(\'user-card\', {\n  props: [\'name\', \'email\'],\n  template: `\n    <div class=\"card\">\n      <h2>{{ name }}</h2>\n      <p>{{ email }}</p>\n      <button @click=\"sayHello\">Say Hello</button>\n    </div>\n  `,\n  methods: {\n    sayHello() {\n      alert(`Hello, ${this.name}!`);\n    }\n  }\n});\n\n// Usage\n<user-card name=\"John\" email=\"john@example.com\" />', 'Components are reusable Vue instances with a name. They can accept props and have their own data and methods.', '2026-07-26 12:25:30'),
(31, 15, 'Composition API', 'Use Composition API for better organization.', '<script>\nimport { ref, computed, onMounted } from \'vue\';\n\nexport default {\n  setup() {\n    const count = ref(0);\n    const doubled = computed(() => count.value * 2);\n    \n    function increment() {\n      count.value++;\n    }\n    \n    onMounted(() => {\n      console.log(\'Component mounted!\');\n    });\n    \n    return { count, doubled, increment };\n  }\n}\n</script>\n\n<template>\n  <p>Count: {{ count }}</p>\n  <p>Doubled: {{ doubled }}</p>\n  <button @click=\"increment\">Increment</button>\n</template>', 'The Composition API provides a way to organize component logic using functions.', '2026-07-26 12:25:30'),
(32, 16, 'Vue Router', 'Add routing to your Vue application.', 'import { createRouter, createWebHistory } from \'vue-router\';\nimport Home from \'./views/Home.vue\';\nimport About from \'./views/About.vue\';\n\nconst routes = [\n  { path: \'/\', component: Home },\n  { path: \'/about\', component: About }\n];\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes\n});\n\n// In main.js\napp.use(router);\n\n// In template\n<router-link to=\"/\">Home</router-link>\n<router-link to=\"/about\">About</router-link>\n<router-view />', 'Vue Router is the official router for Vue.js. It deeply integrates with Vue core.', '2026-07-26 12:25:30'),
(33, 17, 'Python Fundamentals', 'Learn Python syntax and data types.', '# Variables and data types\nname = \"John\"\nage = 25\nis_active = True\n\n# Lists\nfruits = [\'apple\', \'banana\', \'orange\']\n\n# Dictionaries\nperson = {\n  \'name\': \'John\',\n  \'age\': 25,\n  \'city\': \'New York\'\n}\n\n# Loops\nfor fruit in fruits:\n  print(fruit)\n\n# Conditionals\nif age >= 18:\n  print(\'Adult\')\nelse:\n  print(\'Minor\')', 'Python is a versatile language with simple syntax. It supports multiple programming paradigms.', '2026-07-26 12:25:30'),
(34, 17, 'Functions & Modules', 'Create reusable code with functions.', '# Function definition\ndef greet(name):\n  return f\'Hello, {name}!\'\n\n# Default parameters\ndef power(base, exponent=2):\n  return base ** exponent\n\n# *args and **kwargs\ndef print_args(*args, **kwargs):\n  print(args)\n  print(kwargs)\n\n# Importing modules\nimport math\nprint(math.sqrt(16))', 'Functions are blocks of reusable code. Modules allow you to organize code across multiple files.', '2026-07-26 12:25:30'),
(35, 18, 'Classes & Objects', 'Learn OOP in Python.', 'class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n  \n  def greet(self):\n    return f\'Hello, I am {self.name}\'\n\n# Inheritance\nclass Student(Person):\n  def __init__(self, name, age, grade):\n    super().__init__(name, age)\n    self.grade = grade\n  \n  def study(self):\n    return f\'Studying {self.grade} grade\'\n\n# Usage\nstudent = Student(\'John\', 16, 10)\nprint(student.greet())\nprint(student.study())', 'Python supports OOP with classes, inheritance, polymorphism, and encapsulation.', '2026-07-26 12:25:30'),
(36, 18, 'Dunder Methods', 'Use special methods to customize classes.', 'class Vector:\n  def __init__(self, x, y):\n    self.x = x\n    self.y = y\n  \n  def __add__(self, other):\n    return Vector(self.x + other.x, self.y + other.y)\n  \n  def __str__(self):\n    return f\'Vector({self.x}, {self.y})\'\n  \n  def __eq__(self, other):\n    return self.x == other.x and self.y == other.y\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nv3 = v1 + v2\nprint(v3)', 'Dunder (double underscore) methods allow you to define behavior for operators and built-in functions.', '2026-07-26 12:25:30'),
(37, 19, 'Flask Basics', 'Build web applications with Flask.', 'from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\n@app.route(\'/\')\ndef hello():\n  return jsonify({\'message\': \'Hello, Flask!\'})\n\n@app.route(\'/users/<int:user_id>\')\ndef get_user(user_id):\n  return jsonify({\'id\': user_id, \'name\': f\'User {user_id}\'})\n\n@app.route(\'/api/data\', methods=[\'POST\'])\ndef post_data():\n  data = request.json\n  return jsonify({\'received\': data})\n\nif __name__ == \'__main__\':\n  app.run(debug=True)', 'Flask is a lightweight web framework for Python. It\'s perfect for building REST APIs.', '2026-07-26 12:25:30'),
(38, 20, 'Flexbox Layout', 'Create flexible layouts with Flexbox.', '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  min-height: 100vh;\n  flex-wrap: wrap;\n}\n\n.item {\n  flex: 1;\n  min-width: 200px;\n  padding: 20px;\n  background: #f0f0f0;\n  border-radius: 8px;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}', 'Flexbox provides a powerful way to distribute space and align items in containers.', '2026-07-26 12:25:30'),
(39, 20, 'CSS Grid', 'Build complex layouts with CSS Grid.', '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  padding: 20px;\n}\n\n.grid-item {\n  background: #f0f0f0;\n  padding: 20px;\n  border-radius: 8px;\n}\n\n.grid-item:first-child {\n  grid-column: span 2;\n}\n\n@media (max-width: 768px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}', 'CSS Grid is a two-dimensional layout system that offers fine-grained control over rows and columns.', '2026-07-26 12:25:30'),
(42, 22, 'Responsive Units & Media Queries', 'Build responsive websites.', ':root {\n  --spacing: clamp(1rem, 3vw, 3rem);\n  --font-size: clamp(1rem, 2vw, 1.25rem);\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: var(--spacing);\n}\n\n@media (max-width: 768px) {\n  .container {\n    padding: 1rem;\n  }\n  \n  .title {\n    font-size: 1.5rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .mobile-hidden {\n    display: none;\n  }\n}', 'Responsive design ensures your website works on all devices using relative units and media queries.', '2026-07-26 12:25:30'),
(43, 23, 'Basic Types', 'Learn TypeScript type system.', '// Primitive types\nlet name: string = \'John\';\nlet age: number = 25;\nlet isActive: boolean = true;\nlet colors: string[] = [\'red\', \'green\', \'blue\'];\n\n// Any (avoid when possible)\nlet something: any = \'could be anything\';\n\n// Union types\nlet id: string | number = 123;\n\n// Type aliases\ntype User = {\n  id: number;\n  name: string;\n  email?: string;\n};\n\nconst user: User = {\n  id: 1,\n  name: \'John\'\n};', 'TypeScript adds static types to JavaScript, helping catch errors early and improving code quality.', '2026-07-26 12:25:30'),
(44, 23, 'Functions & Return Types', 'Type functions and their return values.', '// Function with types\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Arrow functions\nconst multiply = (a: number, b: number): number => a * b;\n\n// Optional parameters\nfunction greet(name: string, greeting?: string): string {\n  return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;\n}\n\n// Void return\nfunction log(message: string): void {\n  console.log(message);\n}\n\n// Function types\nlet calculator: (a: number, b: number) => number;\ncalculator = add;', 'TypeScript allows you to specify function parameter and return types for self-documenting code.', '2026-07-26 12:25:30'),
(45, 24, 'Interfaces & Generics', 'Create reusable type patterns.', '// Interfaces\ninterface Person {\n  name: string;\n  age: number;\n  greet(): void;\n}\n\nclass Employee implements Person {\n  constructor(public name: string, public age: number) {}\n  greet() {\n    console.log(`Hello, I\'m ${this.name}`);\n  }\n}\n\n// Generics\nfunction identity<T>(value: T): T {\n  return value;\n}\n\nfunction wrapInArray<T>(value: T): T[] {\n  return [value];\n}\n\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  message: string;\n}\n\nconst response: ApiResponse<{ user: string }> = {\n  data: { user: \'John\' },\n  status: 200,\n  message: \'Success\'\n};', 'Interfaces define contracts for object shapes. Generics create reusable components that work with multiple types.', '2026-07-26 12:25:30'),
(46, 24, 'Utility Types', 'Use TypeScript\'s built-in utility types.', 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n}\n\n// Make all properties optional\ntype PartialUser = Partial<User>;\n\n// Make all properties required\ntype RequiredUser = Required<User>;\n\n// Pick specific properties\ntype UserPreview = Pick<User, \'id\' | \'name\'>;\n\n// Omit properties\ntype UserWithoutPassword = Omit<User, \'password\'>;\n\n// Readonly\ntype ReadonlyUser = Readonly<User>;\n\n// Record\nconst userMap: Record<string, User> = {\n  \'john\': { id: 1, name: \'John\', email: \'john@example.com\', password: \'secret\' }\n};', 'Utility types provide convenient transformations for existing types, reducing boilerplate.', '2026-07-26 12:25:30'),
(47, 25, 'React & TypeScript', 'Use TypeScript with React for type-safe components.', 'import React, { useState, useEffect, FC } from \'react\';\n\n// Props interface\ninterface GreetingProps {\n  name: string;\n  age?: number;\n}\n\n// Functional component with props\nconst Greeting: FC<GreetingProps> = ({ name, age }) => {\n  return (\n    <div>\n      <h1>Hello, {name}!</h1>\n      {age && <p>Age: {age}</p>}\n    </div>\n  );\n};\n\n// State with types\nconst Counter: FC = () => {\n  const [count, setCount] = useState<number>(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\n// Events\nconst Input: FC = () => {\n  const [value, setValue] = useState<string>(\'\');\n  \n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(e.target.value);\n  };\n  \n  return <input value={value} onChange={handleChange} />;\n};', 'TypeScript integrates perfectly with React, providing type safety for props, state, events, and hooks.', '2026-07-26 12:25:30'),
(48, 25, 'Advanced React Types', 'Type advanced React patterns.', 'import React, { ReactNode, ComponentType } from \'react\';\n\n// Children with ReactNode\ninterface ContainerProps {\n  children: ReactNode;\n  className?: string;\n}\n\nconst Container: React.FC<ContainerProps> = ({ children, className }) => {\n  return <div className={className}>{children}</div>;\n};\n\n// Higher Order Component\ntype WithLoadingProps = {\n  isLoading: boolean;\n};\n\nfunction withLoading<P extends object>(\n  WrappedComponent: ComponentType<P>\n): React.FC<P & WithLoadingProps> {\n  return function WithLoadingComponent(props: P & WithLoadingProps) {\n    if (props.isLoading) {\n      return <div>Loading...</div>;\n    }\n    return <WrappedComponent {...props as P} />;\n  };\n}\n\n// Usage\nconst DataComponent: React.FC<{ data: string }> = ({ data }) => {\n  return <p>{data}</p>;\n};\n\nconst DataWithLoading = withLoading(DataComponent);\n\n// Render Props\ntype RenderProps = {\n  render: (data: string) => ReactNode;\n};\n\nconst DataProvider: React.FC<RenderProps> = ({ render }) => {\n  const data = \'Hello from render props!\';\n  return <>{render(data)}</>;\n};', 'Advanced React patterns like HOCs and render props can be strongly typed with TypeScript.', '2026-07-26 12:25:30'),
(49, 1, 'Types of Components', 'There are two types of compoenents in react class base and functional base in modern react we use functional compoenents ', 'function Welcome() {\n  return <h1>Hello, World!</h1>;\n}', 'A React component is a JavaScript function that returns JSX (HTML-like syntax).', '2026-07-26 12:25:30');

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `topic_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `content` text NOT NULL,
  `code_example` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`topic_id`, `course_id`, `title`, `content`, `code_example`, `created_at`, `updated_at`) VALUES
(1, 1, 'Components & Props', '', NULL, '2026-07-23 15:54:44', '2026-07-26 12:25:22'),
(2, 1, 'Hooks', '', NULL, '2026-07-23 15:54:44', '2026-07-26 12:25:22'),
(3, 1, 'State Management', '', NULL, '2026-07-23 15:54:44', '2026-07-26 12:25:22'),
(4, 1, 'Routing', '', NULL, '2026-07-23 15:54:44', '2026-07-26 12:25:22'),
(5, 2, 'Components & Templates', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(6, 2, 'Services & Dependency Injection', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(7, 2, 'Routing & Navigation', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(8, 3, 'MVC Architecture', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(9, 3, 'Eloquent ORM', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(10, 3, 'Blade Templating', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(11, 4, 'Node.js Basics', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(12, 4, 'Express Framework', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(13, 4, 'REST APIs', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(14, 5, 'Vue.js Basics', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(15, 5, 'Components & Composition', '', NULL, '2026-07-23 15:54:45', '2026-07-26 12:25:22'),
(16, 5, 'Vue Router & State', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(17, 6, 'Python Basics', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(18, 6, 'Object-Oriented Programming', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(19, 6, 'Web Development with Flask', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(20, 7, 'CSS Layout', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(22, 7, 'Responsive Design', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(23, 8, 'TypeScript Basics', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(24, 8, 'Advanced Types', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(25, 8, 'TypeScript with React', '', NULL, '2026-07-23 15:54:46', '2026-07-26 12:25:22'),
(26, 1, 'React Router Dom', '', NULL, '2026-07-24 12:08:25', '2026-07-26 12:25:22'),
(27, 1, 'React Router Dom', 'Build sigle page application using react router dom ', NULL, '2026-07-24 12:08:55', '2026-07-26 12:25:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'Syed Junaid ali', 'syedjunaidalishah26@gmail.com', '$2b$10$z2qmJixwu8no7jY.ZV.NDeUNWKJUSShTlYU8tbJ5fkxZZvTRNzQHy', 'admin', '2026-07-26 18:49:04', '2026-07-26 18:49:04'),
(2, 'Sajad', 'sajad@gmail.com', '$2b$10$MEvWmsceqXk6vWbYZxCUm.UMNzu56tkgXvgtfIdb1TRN8mygjUuZ6', 'user', '2026-07-26 11:15:44', '2026-07-26 12:25:43'),
(3, 'Ahmed', 'Ahmed@gmail.com', '$2b$10$WSjw3RUnPY4sd6xnOnJZ3eV8Ii9qaeE.jLXjacWnaZLT.1mNFpKm.', 'user', '2026-07-26 11:36:48', '2026-07-26 12:25:43'),
(4, 'Zubair', 'zubair@gmail.com', '$2b$10$l5ZlxdCHgXNZ/7Bna80HD.JvjqV9GqpwGUHwJZaW77lw8AOpMk7cm', 'user', '2026-07-26 11:50:11', '2026-07-26 12:25:43'),
(5, 'Ali Raza', 'ALI@gmail', '$2b$10$FVeiuGHORpaTKvH83HUvYOFf871FkiRS4x6XQIQQoKAcIkA90Q5mm', 'user', '2026-07-26 15:44:49', '2026-07-26 15:44:49'),
(6, 'Danish', 'danish@gmail.com', '$2b$10$RjIl9tXrdjtf8TtjdTDweu0FIELzq7tQDLQ80e3EmbrZN8Ve7mNye', 'user', '2026-07-26 18:42:17', '2026-07-26 18:42:17'),
(8, 'asif', 'asif@gmail.com', '$2b$10$QKKJhC.0/.FVQuWr0Q3Cz.Tadt7nZ90Di8FcBki83GIi./8HisOvu', 'user', '2026-07-26 19:24:26', '2026-07-26 19:24:26'),
(9, 'johnDoe', 'johndoe@gmail.com', '$2b$10$zNunYdQgc4LgFDc/ajztjOdJaAyvc62ZE94FN4wR3xdv1HnELHjhS', 'user', '2026-07-27 10:27:58', '2026-07-27 10:27:58'),
(10, 'Ron', 'Ron@gmail.com', '$2b$10$8Io80WKlIy9zMcACngXMGuevGKi71OLl0GNBYsvGkgjiFBIwfzv/W', 'user', '2026-07-27 10:35:10', '2026-07-27 10:35:10'),
(11, 'AhmedAli', 'Ahmedali@gmail.com', '$2b$10$ATY.yQnVqihpqYj7/yxqu.fpXp35W0h4CfhvfidAfcHtdbsnWKpBW', 'user', '2026-07-29 10:21:18', '2026-07-29 10:21:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`lesson_id`),
  ADD KEY `topic_id` (`topic_id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`topic_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
  MODIFY `lesson_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
  MODIFY `topic_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lessons`
--
ALTER TABLE `lessons`
  ADD CONSTRAINT `lessons_ibfk_1` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`topic_id`) ON DELETE CASCADE;

--
-- Constraints for table `topics`
--
ALTER TABLE `topics`
  ADD CONSTRAINT `topics_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
