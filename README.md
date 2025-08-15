Investment Calculator (React.js)

A simple investment calculator built with React.js that demonstrates core React concepts such as lifting state up, code splitting, and passing props. The app allows users to input investment parameters and displays results for each year of the investment period.

Features

✅ Built using functional components and hooks

✅ Lifting state up to manage input and results in a single parent component

✅ Code splitting using React.lazy() and Suspense to load large components on demand

✅ Passing props down to reusable child components for display and formatting

✅ Clean UI and modular component structure

Key Concepts Used

🔼 Lifting State Up

All input values are stored in the App.jsx component and passed down to InvestmentForm and Result as props. This allows the entire app to share a single source of truth for investment data.

🔼 Code Splitting

The Result component is lazy-loaded using React.lazy() to improve initial load time.

Getting Started

1. Clone the Repository

git clone https://github.com/your-username/investment-calculator-react.git cd Calc

2. Install Dependencies

npm install

3. Start the Development Server

npm run dev

Open your browser and navigate to http://localhost:5173 to view the app.

Usage

Enter the initial investment, annual contribution, expected return rate, and investment duration.

Give the input and check the result for different years.

The results will display a table of values for each year, showing the growth of the investment.

Contributing

Pull requests are welcome! Feel free to open an issue for suggestions or improvements.