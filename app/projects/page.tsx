import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 justify-evenly">
      <h1 className="fixed top-10 font-bold">Projects</h1>
      <Link href="/" className="fixed bottom-10 font-bold">back</Link>
      <div className="flex flex-col justify-center">
        <p className="text-sm font-bold">Gazer</p>
        <h1 className="text-xl mb-3 font-bold">Autonomous Drone Tracking</h1>
        <div className="flex flex-col gap-4 max-w-50">
          <div>
            <p className="">Built full-stack drone monitoring web application</p>
          </div>
          <div>
            <p className="">Implemented YOLO11n autonomous person tracking system</p>
          </div>
          <div>
            <p className="">Integrated LLM voice commands for flight</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm font-bold">Sensor Fusion</p>
        <h1 className="text-xl mb-3 font-bold">Error State Kalman Filter</h1>
        <div className="flex flex-col gap-4 max-w-50">
          <div>
            <p className="">Implemented quaternion-based sensor fusion filter</p>
          </div>
          <div>
            <p className="">Derived Jacobian matrices for covariance propagation</p>
          </div>
          <div>
            <p className="">Built asynchronous IMU and GPS pipeline</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm font-bold">LSTM</p>
        <h1 className="text-xl mb-3 font-bold">Fake News Detector</h1>
        <div className="flex flex-col gap-4 max-w-50">
          <div>
            <p className="">Built stacked LSTM binary classification model</p>
          </div>
          <div>
            <p className="">Implemented dropout regularization and sequence padding</p>
          </div>
          <div>
            <p className="">Optimized accuracy through custom threshold tuning</p>
          </div>
        </div>
      </div>
    </div>
  );
}