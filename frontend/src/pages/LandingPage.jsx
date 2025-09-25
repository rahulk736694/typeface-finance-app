import { Link } from 'react-router-dom';
import { 
  FiDollarSign, 
  FiPieChart, 
  FiCamera, 
  FiUpload 
} from 'react-icons/fi';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Personal Finance Assistant</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Take Control of Your <span className="text-red-500">Finances</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track income and expenses, categorize transactions, and get insights into your spending habits. 
            Upload receipts and analyze your financial data with powerful visualizations.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/register" 
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg"
            >
              Start Tracking Now
            </Link>
            <Link 
              to="/login" 
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Income & Expenses</h3>
              <p className="text-gray-600">
                Create and manage income and expense entries through an intuitive web interface.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FiPieChart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Analytics</h3>
              <p className="text-gray-600">
                View expenses by category and date with interactive charts and graphs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FiCamera className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Receipt Scanning</h3>
              <p className="text-gray-600">
                Extract expense data from uploaded receipts (images and PDFs) automatically.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FiUpload className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transaction History</h3>
              <p className="text-gray-600">
                List and filter all transactions within specific time ranges with pagination support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Managing Your Finances?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of users who have taken control of their financial future.
          </p>
          <Link 
            to="/register" 
            className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg inline-block"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;