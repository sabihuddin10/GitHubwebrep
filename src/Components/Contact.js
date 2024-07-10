import React, { useState, useEffect } from 'react';
import { Steps } from 'antd';
import 'antd/dist/antd';  // Correct CSS file import

const { Step } = Steps;

export default function DynamicStepsWithKeyPress() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' && currentStep < 2) {
        setCurrentStep(currentStep + 1);
      } else if (event.key === 'ArrowLeft' && currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
      else if(currentStep==2){
        window.location.href = "/";
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentStep]);

  return (
    <div>
      <h1>Dynamic Steps with Key Press</h1>
      <Steps current={currentStep} size="large" direction="vertical" onChange={setCurrentStep} >
        <Step title="Input" description="Taking input" />
        <Step title="Output" description="Showing output" />
        <Step title="Result" description="Showing result" />
      </Steps>
    </div>
  );
}
