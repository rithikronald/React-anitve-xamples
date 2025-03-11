import React, {useEffect, useState} from 'react';

const MultiStepForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Navigation state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Handle input changes
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Mark field as touched for validation
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));
  };

  // Mark field as touched on blur
  const handleBlur = e => {
    const {name} = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));
  };

  // Validate form data
  useEffect(() => {
    const newErrors = {};

    // Step 1 validations
    if (touched.firstName && !formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (touched.lastName && !formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    if (touched.email && !formData.email) {
      newErrors.email = 'Email is required';
    } else if (
      touched.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    // Step 2 validations
    if (touched.street && !formData.street) {
      newErrors.street = 'Street address is required';
    }

    if (touched.city && !formData.city) {
      newErrors.city = 'City is required';
    }

    if (touched.state && !formData.state) {
      newErrors.state = 'State is required';
    }

    if (touched.zipCode && !formData.zipCode) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (touched.zipCode && !/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Invalid ZIP code';
    }

    setErrors(newErrors);
  }, [formData, touched]);

  // Check if current step is valid
  const isStepValid = step => {
    if (step === 1) {
      return (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        !errors.firstName &&
        !errors.lastName &&
        !errors.email
      );
    } else if (step === 2) {
      return (
        formData.street &&
        formData.city &&
        formData.state &&
        formData.zipCode &&
        !errors.street &&
        !errors.city &&
        !errors.state &&
        !errors.zipCode
      );
    }
    return true;
  };

  // Navigate to next step
  const nextStep = () => {
    if (currentStep < totalSteps && isStepValid(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  // Navigate to previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Mark all fields as touched for final validation
    const allFields = Object.keys(formData);
    const allTouched = allFields.reduce((acc, field) => {
      acc[field] = true;
      return acc;
    }, {});

    setTouched(allTouched);

    // Check if the form is valid
    if (isStepValid(1) && isStepValid(2)) {
      // In a real app, you would send the data to a server here
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  // Calculate progress percentage
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  // Render step content
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border rounded ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border rounded ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border rounded ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Address Information</h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Street Address
              </label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border rounded ${
                  errors.street ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your street address"
              />
              {errors.street && (
                <p className="text-red-500 text-sm mt-1">{errors.street}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 border rounded ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-2 border rounded ${
                    errors.state ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your state"
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-2 border rounded ${
                    errors.zipCode ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your ZIP code"
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="text-sm text-gray-600 mb-4">
              Please review your information before submitting.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Personal Information</h3>
              <p>
                <span className="font-medium">Name:</span> {formData.firstName}{' '}
                {formData.lastName}
              </p>
              <p>
                <span className="font-medium">Email:</span> {formData.email}
              </p>

              <h3 className="font-medium mt-4 mb-2">Address</h3>
              <p>
                <span className="font-medium">Street:</span> {formData.street}
              </p>
              <p>
                <span className="font-medium">City:</span> {formData.city}
              </p>
              <p>
                <span className="font-medium">State:</span> {formData.state}
              </p>
              <p>
                <span className="font-medium">ZIP Code:</span>{' '}
                {formData.zipCode}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{width: `${progress}%`}}></div>
        </div>
      </div>

      {/* Step content */}
      <form onSubmit={handleSubmit}>
        {renderStep()}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              Previous
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid(currentStep)}
              className={`px-4 py-2 rounded transition-colors ${
                isStepValid(currentStep)
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-300 text-white cursor-not-allowed'
              }`}>
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
