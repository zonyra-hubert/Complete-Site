const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Load stored questions or fallback to hardcoded ones
const defaultQuestions = [
    {
        question: "What is a primary key in a database?",
        answers: [
            { text: "A unique identifier for each record in a table", correct: true },
            { text: "A key used to encrypt data", correct: false },
            { text: "A type of data field", correct: false },
            { text: "A reserved keyword in SQL", correct: false },
        ]
    },
    {
        question: "Which SQL command is used to retrieve data from a database?",
        answers: [
            { text: "INSERT", correct: false },
            { text: "UPDATE", correct: false },
            { text: "SELECT", correct: true },
            { text: "DELETE", correct: false },
        ]
    },
    {
        question: "What does SQL stand for?",
        answers: [
            { text: "Structured Query Language", correct: true },
            { text: "Simple Query Language", correct: false },
            { text: "Standard Query Language", correct: false },
            { text: "Systematic Query Language", correct: false },
        ]
    },
    {
        question: "What is a foreign key?",
        answers: [
            { text: "A key that uniquely identifies each record in a table", correct: false },
            { text: "A key that links records between two tables", correct: true },
            { text: "A key that encrypts data in a table", correct: false },
            { text: "A key used to store large data", correct: false },
        ]
    },
    {
        question: "Which SQL statement is used to delete data from a table?",
        answers: [
            { text: "REMOVE", correct: false },
            { text: "DELETE", correct: true },
            { text: "DROP", correct: false },
            { text: "TRUNCATE", correct: false },
        ]
    },
    {
        question: "What is the purpose of the JOIN clause in SQL?",
        answers: [
            { text: "To combine rows from two or more tables", correct: true },
            { text: "To remove duplicate rows", correct: false },
            { text: "To filter data in a table", correct: false },
            { text: "To create a new table", correct: false },
        ]
    },
    {
        question: "Which command is used to modify existing records in a table?",
        answers: [
            { text: "MODIFY", correct: false },
            { text: "UPDATE", correct: true },
            { text: "CHANGE", correct: false },
            { text: "ALTER", correct: false },
        ]
    },
    {
        question: "In a relational database, what is a table?",
        answers: [
            { text: "A collection of data organized in rows and columns", correct: true },
            { text: "A storage mechanism for multimedia files", correct: false },
            { text: "A way to restrict access to the database", correct: false },
            { text: "A set of commands for querying data", correct: false },
        ]
    },
    {
        question: "What is normalization in database design?",
        answers: [
            { text: "A process to improve data redundancy", correct: false },
            { text: "A technique to organize tables to minimize redundancy", correct: true },
            { text: "A method to compress data", correct: false },
            { text: "A command to speed up data retrieval", correct: false },
        ]
    },
    {
        question: "Which SQL clause is used to filter records?",
        answers: [
            { text: "ORDER BY", correct: false },
            { text: "WHERE", correct: true },
            { text: "GROUP BY", correct: false },
            { text: "LIMIT", correct: false },
        ]
    },
    {
        question: "What is a relational database?",
        answers: [
            { text: "A database organized as a collection of tables", correct: true },
            { text: "A file-based storage system", correct: false },
            { text: "A hierarchical data model", correct: false },
            { text: "A command-line interface for managing data", correct: false },
        ]
    },
    {
        question: "What is SQL used for?",
        answers: [
            { text: "To style web pages", correct: false },
            { text: "To interact with and manage relational databases", correct: true },
            { text: "To handle HTTP requests", correct: false },
            { text: "To develop mobile apps", correct: false },
        ]
    },
    {
        question: "Which SQL clause is used to sort the result-set?",
        answers: [
            { text: "GROUP BY", correct: false },
            { text: "ORDER BY", correct: true },
            { text: "WHERE", correct: false },
            { text: "HAVING", correct: false },
        ]
    },
    {
        question: "What does the COUNT() function do in SQL?",
        answers: [
            { text: "Counts the total number of columns", correct: false },
            { text: "Returns the number of rows in a table", correct: true },
            { text: "Calculates the sum of a column", correct: false },
            { text: "Removes duplicate rows", correct: false },
        ]
    },
    {
        question: "What is a database index?",
        answers: [
            { text: "A pointer to the primary key", correct: false },
            { text: "A data structure that improves data retrieval speed", correct: true },
            { text: "An identifier for a database", correct: false },
            { text: "A section in the database for backup storage", correct: false },
        ]
    },
    {
        question: "Which command removes all data from a table but keeps its structure?",
        answers: [
            { text: "DELETE", correct: false },
            { text: "TRUNCATE", correct: true },
            { text: "DROP", correct: false },
            { text: "REMOVE", correct: false },
        ]
    },
    {
        question: "What is a composite key?",
        answers: [
            { text: "A key made up of multiple columns to uniquely identify a row", correct: true },
            { text: "A key used to link tables", correct: false },
            { text: "A foreign key", correct: false },
            { text: "An index key", correct: false },
        ]
    },
    {
        question: "Which SQL keyword is used to change an existing table structure?",
        answers: [
            { text: "MODIFY", correct: false },
            { text: "CHANGE", correct: false },
            { text: "ALTER", correct: true },
            { text: "EDIT", correct: false },
        ]
    },
    {
        question: "What does ACID stand for in database management?",
        answers: [
            { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
            { text: "Accuracy, Control, Integration, Duration", correct: false },
            { text: "Access, Control, Integrity, Database", correct: false },
            { text: "Availability, Consistency, Isolation, Duplication", correct: false },
        ]
    },
    {
        question: "Which statement is used to remove a table from the database?",
        answers: [
            { text: "DELETE TABLE", correct: false },
            { text: "REMOVE", correct: false },
            { text: "DROP TABLE", correct: true },
            { text: "TRUNCATE TABLE", correct: false },
        ]
    },
    {
        question: "What is a stored procedure?",
        answers: [
            { text: "A SQL command to create tables", correct: false },
            { text: "A compiled collection of SQL statements stored in the database", correct: true },
            { text: "A unique key for each table", correct: false },
            { text: "A type of database constraint", correct: false },
        ]
    },
    {
        question: "Which clause is used to filter aggregated data?",
        answers: [
            { text: "GROUP BY", correct: false },
            { text: "ORDER BY", correct: false },
            { text: "HAVING", correct: true },
            { text: "WHERE", correct: false },
        ]
    },
    {
        question: "What is a transaction in database terms?",
        answers: [
            { text: "A process to handle data retrieval", correct: false },
            { text: "A series of operations treated as a single unit", correct: true },
            { text: "A method for data security", correct: false },
            { text: "A way to index data", correct: false },
        ]
    },
    {
        question: "Which SQL keyword is used to create a new database?",
        answers: [
            { text: "NEW DATABASE", correct: false },
            { text: "CREATE DATABASE", correct: true },
            { text: "INIT DATABASE", correct: false },
            { text: "INSERT DATABASE", correct: false },
        ]
    },
    {
        question: "What is denormalization?",
        answers: [
            { text: "The process of organizing data to reduce redundancy", correct: false },
            { text: "The process of adding redundancy for optimization", correct: true },
            { text: "Removing a foreign key", correct: false },
            { text: "Dropping a table", correct: false },
        ]
    },
    {
        question: "Which type of join returns all records when there is a match in either table?",
        answers: [
            { text: "INNER JOIN", correct: false },
            { text: "LEFT JOIN", correct: false },
            { text: "RIGHT JOIN", correct: false },
            { text: "FULL OUTER JOIN", correct: true },
        ]
    },
    {
        question: "What is a view in a database?",
        answers: [
            { text: "A physical table", correct: false },
            { text: "A virtual table based on a query", correct: true },
            { text: "A function", correct: false },
            { text: "A stored procedure", correct: false },
        ]
    },
    {
        question: "What is a foreign key constraint?",
        answers: [
            { text: "A constraint on primary keys", correct: false },
            { text: "A rule enforcing links between two tables", correct: true },
            { text: "A rule that removes duplicate rows", correct: false },
            { text: "A command to index a column", correct: false },
        ]
    },
    {
        question: "Which SQL clause is used to group rows that have the same values?",
        answers: [
            { text: "GROUP BY", correct: true },
            { text: "ORDER BY", correct: false },
            { text: "WHERE", correct: false },
            { text: "JOIN", correct: false },
        ]
    },
    {
        question: "What is an entity in a database?",
        answers: [
            { text: "A single attribute", correct: false },
            { text: "A unique identifier for data", correct: false },
            { text: "A thing or object in the real world with data representation", correct: true },
            { text: "A form of SQL command", correct: false },
        ]
    },
    {
        question: "What does NULL represent in a database?",
        answers: [
            { text: "A zero value", correct: false },
            { text: "An unknown or missing value", correct: true },
            { text: "An error", correct: false },
            { text: "A default value", correct: false },
        ]
    },
    {
        question: "Which command is used to create a table in SQL?",
        answers: [
            { text: "MAKE TABLE", correct: false },
            { text: "INIT TABLE", correct: false },
            { text: "CREATE TABLE", correct: true },
            { text: "NEW TABLE", correct: false },
        ]
    },
    {
        question: "What is a unique constraint in SQL?",
        answers: [
            { text: "A constraint to prevent duplicate values in a column", correct: true },
            { text: "A constraint that links tables", correct: false },
            { text: "A default constraint", correct: false },
            { text: "A foreign key constraint", correct: false },
        ]
    },
    {
        question: "What is referential integrity?",
        answers: [
            { text: "Ensuring all database transactions are processed", correct: false },
            { text: "Maintaining consistency of data across tables", correct: true },
            { text: "Providing index for each table", correct: false },
            { text: "Preventing database duplication", correct: false },
        ]
    },
    {
        question: "Which function calculates the average value of a numeric column?",
        answers: [
            { text: "SUM()", correct: false },
            { text: "AVG()", correct: true },
            { text: "COUNT()", correct: false },
            { text: "MIN()", correct: false },
        ]
    },
    {
        question: "What is a clustered index?",
        answers: [
            { text: "An index that defines the order of the table's data", correct: true },
            { text: "An index for foreign keys", correct: false },
            { text: "A temporary table", correct: false },
            { text: "An index on a specific data type", correct: false },
        ]
       
    },
    {
        question: "What is the purpose of the UNION operator?",
        answers: [
            { text: "To combine tables by joining them", correct: false },
            { text: "To combine results from multiple SELECT statements", correct: true },
            { text: "To create new tables", correct: false },
            { text: "To delete records", correct: false },
        ]
    },
    {
        question: "Which statement is used to add a new row in a table?",
        answers: [
            { text: "INSERT", correct: true },
            { text: "ADD", correct: false },
            { text: "UPDATE", correct: false },
            { text: "MODIFY", correct: false },
        ]
    },
    {
        question: "Which clause in SQL is used to restrict the results of a query?",
        answers: [
            { text: "LIMIT", correct: true },
            { text: "GROUP BY", correct: false },
            { text: "WHERE", correct: false },
            { text: "FROM", correct: false },
        ]
    },
    {
        question: "Create an SQL statement to select all columns from a table named 'employees'.",
        answers: [
            { text: "SELECT * FROM employees;", correct: true },
            { text: "SELECT all FROM employees;", correct: false },
            { text: "SHOW * FROM employees;", correct: false },
            { text: "DISPLAY all FROM employees;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to retrieve only the 'name' and 'salary' columns from the 'employees' table.",
        answers: [
            { text: "SELECT name, salary FROM employees;", correct: true },
            { text: "SHOW name, salary FROM employees;", correct: false },
            { text: "DISPLAY name, salary FROM employees;", correct: false },
            { text: "SELECT columns name, salary FROM employees;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to insert a new record into the 'products' table with 'name' as 'Laptop' and 'price' as 1000.",
        answers: [
            { text: "INSERT INTO products (name, price) VALUES ('Laptop', 1000);", correct: true },
            { text: "INSERT INTO products VALUES ('Laptop', 1000);", correct: false },
            { text: "ADD INTO products (name, price) VALUES ('Laptop', 1000);", correct: false },
            { text: "INSERT INTO products (Laptop, 1000);", correct: false },
        ]
    },
    {
        question: "Write an SQL query to update the 'salary' of an employee with 'id' 5 to 70000 in the 'employees' table.",
        answers: [
            { text: "UPDATE employees SET salary = 70000 WHERE id = 5;", correct: true },
            { text: "SET salary = 70000 WHERE id = 5 FROM employees;", correct: false },
            { text: "UPDATE salary = 70000 WHERE id = 5;", correct: false },
            { text: "MODIFY salary SET 70000 WHERE id = 5;", correct: false },
        ]
    },
    {
        question: "Write an SQL statement to delete all rows from the 'orders' table where the 'status' is 'canceled'.",
        answers: [
            { text: "DELETE FROM orders WHERE status = 'canceled';", correct: true },
            { text: "REMOVE FROM orders WHERE status = 'canceled';", correct: false },
            { text: "DELETE status = 'canceled' FROM orders;", correct: false },
            { text: "DELETE ROWS FROM orders WHERE status = 'canceled';", correct: false },
        ]
    },
    {
        question: "Create an SQL query to get the total number of records in the 'customers' table.",
        answers: [
            { text: "SELECT COUNT(*) FROM customers;", correct: true },
            { text: "SHOW COUNT FROM customers;", correct: false },
            { text: "SELECT total FROM customers;", correct: false },
            { text: "COUNT records FROM customers;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to find all orders from the 'orders' table that have a total greater than 500.",
        answers: [
            { text: "SELECT * FROM orders WHERE total > 500;", correct: true },
            { text: "SHOW * FROM orders WHERE total > 500;", correct: false },
            { text: "SELECT all FROM orders WHERE total = 500;", correct: false },
            { text: "SHOW * FROM orders total > 500;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to find the average salary of employees from the 'employees' table.",
        answers: [
            { text: "SELECT AVG(salary) FROM employees;", correct: true },
            { text: "SELECT AVERAGE(salary) FROM employees;", correct: false },
            { text: "SELECT salary FROM employees AVG();", correct: false },
            { text: "SELECT AVG FROM employees(salary);", correct: false },
        ]
    },
    {
        question: "Write an SQL query to rename the 'customers' table to 'clients'.",
        answers: [
            { text: "ALTER TABLE customers RENAME TO clients;", correct: true },
            { text: "RENAME customers TO clients;", correct: false },
            { text: "MODIFY TABLE customers NAME clients;", correct: false },
            { text: "CHANGE customers TO clients;", correct: false },
        ]
    },
    {
        question: "Write an SQL statement to retrieve only unique values in the 'city' column from the 'customers' table.",
        answers: [
            { text: "SELECT DISTINCT city FROM customers;", correct: true },
            { text: "SELECT UNIQUE city FROM customers;", correct: false },
            { text: "SELECT city FROM customers GROUP BY city;", correct: false },
            { text: "SHOW DISTINCT city FROM customers;", correct: false },
        ]
    },
    {
        question: "Create an SQL statement to join 'orders' and 'customers' tables on 'customer_id' and select all columns.",
        answers: [
            { text: "SELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.id;", correct: true },
            { text: "JOIN orders.customers ON customer_id;", correct: false },
            { text: "SELECT * FROM orders CUSTOMERS JOIN customers;", correct: false },
            { text: "SELECT orders.customer_id FROM customers JOIN orders;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to get all records from 'employees' ordered by 'salary' in descending order.",
        answers: [
            { text: "SELECT * FROM employees ORDER BY salary DESC;", correct: true },
            { text: "SELECT * FROM employees ORDER BY salary;", correct: false },
            { text: "SELECT * FROM employees ORDER DESC salary;", correct: false },
            { text: "ORDER employees BY salary DESC;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to find the minimum price from the 'products' table.",
        answers: [
            { text: "SELECT MIN(price) FROM products;", correct: true },
            { text: "SELECT MINIMUM(price) FROM products;", correct: false },
            { text: "SELECT MINIMUM price FROM products;", correct: false },
            { text: "SELECT price FROM products MIN();", correct: false },
        ]
    },
    {
        question: "Write an SQL query to create a new table 'students' with columns 'id' (integer), 'name' (text), and 'age' (integer).",
        answers: [
            { text: "CREATE TABLE students (id INTEGER, name TEXT, age INTEGER);", correct: true },
            { text: "NEW TABLE students (id INT, name TEXT, age INT);", correct: false },
            { text: "MAKE TABLE students (id INTEGER, name CHAR, age NUMBER);", correct: false },
            { text: "CREATE students (id INTEGER, name TEXT, age INTEGER);", correct: false },
        ]
    },
    {
        question: "Write an SQL query to add a new column 'email' (text) to the 'users' table.",
        answers: [
            { text: "ALTER TABLE users ADD COLUMN email TEXT;", correct: true },
            { text: "ADD COLUMN email TO users;", correct: false },
            { text: "UPDATE users SET COLUMN email;", correct: false },
            { text: "MODIFY users ADD email TEXT;", correct: false },
        ]
    },
    {
        question: "Create an SQL query to delete the 'price' column from the 'products' table.",
        answers: [
            { text: "ALTER TABLE products DROP COLUMN price;", correct: true },
            { text: "DELETE COLUMN price FROM products;", correct: false },
            { text: "REMOVE price FROM products;", correct: false },
            { text: "ALTER products DELETE COLUMN price;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to set the 'status' column to 'active' for all records in the 'users' table.",
        answers: [
            { text: "UPDATE users SET status = 'active';", correct: true },
            { text: "SET status = 'active' ON users;", correct: false },
            { text: "UPDATE status TO 'active' IN users;", correct: false },
            { text: "SET users.status = 'active';", correct: false },
        ]
    },
    {
        question: "Create an SQL query to find the highest 'age' value in the 'students' table.",
        answers: [
            { text: "SELECT MAX(age) FROM students;", correct: true },
            { text: "SELECT age MAX FROM students;", correct: false },
            { text: "SHOW age FROM students MAX();", correct: false },
            { text: "SELECT HIGHEST(age) FROM students;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to calculate the total sum of the 'amount' column from the 'sales' table.",
        answers: [
            { text: "SELECT SUM(amount) FROM sales;", correct: true },
            { text: "SELECT amount SUM FROM sales;", correct: false },
            { text: "SHOW TOTAL(amount) FROM sales;", correct: false },
            { text: "SELECT TOTAL(amount) sales;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to get all records where the 'email' field in 'users' table is not NULL.",
        answers: [
            { text: "SELECT * FROM users WHERE email IS NOT NULL;", correct: true },
            { text: "SELECT * FROM users WHERE email != NULL;", correct: false },
            { text: "SELECT all FROM users email NOT NULL;", correct: false },
            { text: "SHOW * FROM users NOT NULL email;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to rename the column 'username' to 'user_name' in the 'accounts' table.",
        answers: [
            { text: "ALTER TABLE accounts RENAME COLUMN username TO user_name;", correct: true },
            { text: "RENAME username TO user_name IN accounts;", correct: false },
            { text: "UPDATE accounts SET username TO user_name;", correct: false },
            { text: "ALTER accounts CHANGE username TO user_name;", correct: false },
        ]
    },
    {
        question: "Create an SQL query to list unique values from 'category' in the 'products' table.",
        answers: [
            { text: "SELECT DISTINCT category FROM products;", correct: true },
            { text: "SELECT category FROM products DISTINCT;", correct: false },
            { text: "SHOW UNIQUE category IN products;", correct: false },
            { text: "DISTINCT category SELECT FROM products;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to get the count of orders with 'status' equal to 'completed' in the 'orders' table.",
        answers: [
            { text: "SELECT COUNT(*) FROM orders WHERE status = 'completed';", correct: true },
            { text: "SELECT total COUNT status = 'completed' FROM orders;", correct: false },
            { text: "COUNT all FROM orders WHERE status = 'completed';", correct: false },
            { text: "SELECT COUNT orders 'completed' status;", correct: false },
        ]
    },
    {
        question: "Write an SQL query to retrieve the earliest date from 'order_date' in the 'orders' table.",
        answers: [
            { text: "SELECT MIN(order_date) FROM orders;", correct: true },
            { text: "SELECT EARLIEST(order_date) FROM orders;", correct: false },
            { text: "SHOW DATE MIN FROM orders;", correct: false },
            { text: "SELECT FIRST(order_date) FROM orders;", correct: false },
        ]
    }
    
    




     // ... Other questions
];

const questions = defaultQuestions;

// Fisher-Yates shuffle function to randomize array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    // Shuffle questions and answers
    shuffleArray(questions);
    questions.forEach(question => shuffleArray(question.answers));

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";

   
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)";
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)";
}

document.addEventListener("DOMContentLoaded", function() {
    startQuiz();
});
// export { startQuiz };






