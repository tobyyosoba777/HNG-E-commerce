import { FaCheckCircle } from 'react-icons/fa';
import checkedImage from '../assets/CheckedVideo.mp4'

const PaymentConfirmation = () => {
  return (
    <div className="flex items-start mt-10 justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg text-center">
        {/* <FaCheckCircle className="text-green-500 mx-auto mb-4 text-4xl" size={50} /> */}
        <div className="flex items-center justify-center">
        <video width="320" height="320" autoPlay playsInline>
            <source src={checkedImage} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="mb-4 text-4xl font-bold">Payment Successful</h2>
        <p className="text-lg">Thank you for Purchasing!</p>
      </div>
    </div>
  )
}

export default PaymentConfirmation;
