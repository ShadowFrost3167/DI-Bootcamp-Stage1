// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

// typeof("potato")
// // Prediction: Vegetable
// // Actual: String


// What is the output of each of the expressions below?


typeof(15)
// Prediction: integer
// Actual: number

typeof(5.5)
// Prediction: decimal
// Actual: number

typeof(NaN)
// Prediction: a message reading not a number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean 1 does not equal 2 making it a true of false statement
// Actual: boolean

"hamburger" + "s"
// Prediction: string saying hamburgers
// Actual:

"hamburgers" - "s"
// Prediction: string saying hamburgers
// Actual: hamburgers

"1" + "3"
// Prediction: string saying 13
// Actual: 13

"1" - "3"
// Prediction: js might automatically change them to integers so outputting -2
// Actual: says -2 but i'm not entirely sure why still even though my prediction was correct the concept is very hazy I will probably ask for a refresher on why in a private meeting for review with my instructor

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: Nan
// Actual: NaN

99 * "hello"
// Prediction: hello 99 times?
// Actual: NaN

1 != 1
// Prediction: False 1 is equal to 1
// Actual: false

1 == "1"
// Prediction: True, while 1 is an integer and "1" is a string the output is the same via the console.
// Actual: true

1 === "1"
// Prediction: true
// Actual: false, i didn't understand at first why this returned false but after looking up what === meant in js with google and seeing it checks if the two operators are equal i realized that 1 is a number and "1" is a string so they wouldn't be equal within JS.