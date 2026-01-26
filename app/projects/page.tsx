import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <Link href="/" className="fixed top-10 left-1/2 font-medium text-sm hover:underline underline-offset-4 transition-all">
        ← back
      </Link>
      
      <div className="max-w-7xl mx-auto py-20 flex flex-col gap-32">
        <div className="flex gap-20 items-center group">
          <div className="flex flex-col space-y-1 w-[480px]">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Gazer</p>
            <h2 className="text-4xl mb-8 font-bold leading-tight tracking-tight text-gray-900">
              Autonomous Drone Tracking
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-3 border-l-2 border-gray-200 pl-5 group-hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Computer Vision Pipeline</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Developed an autonomous tracking system leveraging <span className="text-gray-900 font-medium">YOLO11n object detection</span> to identify and localize human faces in real-time video streams. The system calculates precise error vectors between detected face coordinates and frame center, feeding these measurements into a custom-tuned <span className="text-gray-900 font-medium">PID control algorithm</span> that generates smooth, cinematic camera movements.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-gray-200 pl-5 group-hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Concurrent Architecture</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Engineered a multi-threaded Python backend managing <span className="text-gray-900 font-medium">9 concurrent execution threads</span> for real-time vision processing, UDP command transmission to the DJI Tello drone, and state management. Implemented thread-safe locking mechanisms and dead-zone tolerance logic to eliminate micro-adjustments and jitter, ensuring professional-grade tracking stability.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-gray-200 pl-5 group-hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Voice Intelligence</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Integrated a voice-controlled LLM interface combining <span className="text-gray-900 font-medium">OpenAI Whisper</span> for speech recognition and <span className="text-gray-900 font-medium">Google Gemini</span> for natural language understanding. Users can adjust PID coefficients (Kp, Ki, Kd) and distance thresholds (50-250px) through conversational commands, with <span className="text-gray-900 font-medium">ElevenLabs TTS</span> providing real-time audio feedback.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[500px]">
            <video 
              className="w-full h-125 object-cover"
              autoPlay 
              loop 
              muted
              playsInline
            >
              <source src="/drone_demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="flex gap-20 items-start group">
          <div className="flex flex-col space-y-1 w-[520px]">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Sensor Fusion</p>
            <h2 className="text-4xl mb-8 font-bold leading-tight tracking-tight text-gray-900">
              Error State Kalman Filter
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-3 border-l-2 border-gray-200 pl-5 group-hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Mathematical Framework</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Implemented an Error-State Kalman Filter utilizing <span className="text-gray-900 font-medium">quaternion representation</span> to avoid the singularities and gimbal lock inherent in Euler angle parameterizations. The filter maintains a <span className="text-gray-900 font-medium">16-dimensional nominal state</span> and a separate <span className="text-gray-900 font-medium">15-dimensional error state</span>, fusing measurements from 6-DOF IMU sensors and GPS receivers to produce optimal orientation and position estimates.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-gray-200 pl-5 group-hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Numerical Stability</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Derived complete <span className="text-gray-900 font-medium">Jacobian matrices</span> for both prediction and update steps, enabling accurate covariance propagation through nonlinear system dynamics. Applied the <span className="text-gray-900 font-medium">Joseph form</span> for covariance updates to guarantee positive semi-definiteness, while implementing multiplicative quaternion error injection to maintain unit norm constraints throughout the estimation cycle.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-gray-200 pl-5 group-hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Asynchronous Processing</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Architected a sensor fusion pipeline capable of processing <span className="text-gray-900 font-medium">asynchronous IMU measurements at 100Hz</span> alongside lower-rate GPS updates. Noise parameters were characterized using <span className="text-gray-900 font-medium">Allan variance analysis</span>, while coordinate transformations between body and navigation frames ensure geometrically consistent state estimates across all sensor modalities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <Link href="https://arxiv.org/pdf/1711.02508" className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <img 
                  src="/ESKF1.png" 
                  alt="ESKF Analysis 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <img 
                  src="/ESKF2.png" 
                  alt="ESKF Analysis 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <img 
                  src="/ESKF3.png" 
                  alt="ESKF Analysis 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <img 
                  src="/ESKF4.png" 
                  alt="ESKF Analysis 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <img 
                  src="/ESKF5.png" 
                  alt="ESKF Analysis 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-20 items-start group">
          <div className="flex flex-col space-y-1 w-[420px]">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">LSTM</p>
            <h2 className="text-4xl mb-8 font-bold leading-tight tracking-tight text-gray-900">
              Fake News Detector
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-3 border-l-2 border-gray-200 pl-5 group-hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Architecture Design</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Constructed a binary classification model using <span className="text-gray-900 font-medium">stacked LSTM layers</span> with 40-dimensional word embeddings to process variable-length news articles. The architecture incorporates <span className="text-gray-900 font-medium">dropout regularization</span> between recurrent layers and sequence padding to handle texts of arbitrary length while preventing overfitting on the training distribution.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-gray-200 pl-5 group-hover:border-gray-900 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Threshold Optimization</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Developed a <span className="text-gray-900 font-medium">custom threshold tuning algorithm</span> that systematically evaluates classification decision boundaries across the continuous probability space. This approach identifies optimal cutoff points beyond the standard 0.5 threshold, significantly improving model accuracy by accounting for class imbalance and asymmetric misclassification costs.
                </p>
              </div>
            </div>
          </div>
          
          <Link  href="https://arxiv.org/pdf/1909.09586" className="flex space-y-4 gap-5">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white max-w-100">
              <img 
                src="/LSTM1.png" 
                alt="LSTM Training Metrics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white max-w-90">
              <img 
                src="/LSTM2.png" 
                alt="LSTM Performance Analysis"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}