# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
    The name of the foreign key would be animal_id with datatype integer. The foreign key would be a part of the Sightings model.
  Researched answer:
    The foreign key is found on the Sightings model, and its value should be the primary key of the Animal that it belongs to. This creates a cross-reference between the two models, thus establishing a link or relationship between the two.


2. Which RESTful routes must always be passed params? Why?

  Your answer:
    Show, Update, and Destroy must all be passed parameters because they target a specific query.
  Researched answer:
    Edit must also be passed a parameter, as it is the intermediary before update occurs. The params select a specific query by its primary key, and that query is the one that the route will act upon.


3. Name three rails generator commands. What is created by each?

  Your answer:
    $ rails generate controller creates the controller file, which houses your controller methods. $ rails generate model creates models for your schema. $ rails generate resources does both of these all in one step. If you generate resources, then you do not have to edit your routes file.
  Researched answer:
    Using generators will save the programmer time by creating several directories with files that have boilerplate code.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users          
  index - lists all items in a particular model
method="GET"    /users/1  
  show - lists a single item in a model
method="GET"    /users/new
  new - returns a form for the user to input
method="GET"    /users/edit/1    
  edit - returns a form for user to input changes
method="POST"   /users/       
  create - adds new information to the database
method="PUT"    /users/1      
  update - updates a specific item in database
method="DELETE" /users/1      
  destroy - removes information from database


5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

1. As a user, I can see all of the current tasks.
2. As a user, I can add more tasks.
3. As a user, I can delete tasks.
4. As a user, I can update task descriptions.
5. As a user, I can mark tasks as completed.
6. As a user, I can categorize tasks based on type of work.
7. As a user, I can somehow priortize the importanace of tasks.
8. As a user, I can see when a task should be completed by.
9. As a user, I can add a completion date for each task.
10. As a user, I can click and view a specific task and its entire description.