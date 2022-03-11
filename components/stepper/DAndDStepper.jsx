import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import placeholder from '../../images/SM-placeholder.png'
import { useState, useEffect } from 'react'
import DnDDrawer from '../../components/drawer/DnDDrawer'
import AddTitle from '../../components/AddTitle'

import PageContent from '../pageContent/PageContent'

const steps = ['Add title', 'Select template', 'Add backround', 'Add thumb']

export default function DAndDStepper() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  const [selectedThumb, setSelectedThumb] = useState(placeholder)
  const [selectedBackground, setSelectedBackground] = useState()
  const [selectedTemplate, setSelectedTemplate] = useState(placeholder)
  const [placeholder1, setPlaceholder1] = useState(placeholder)
  const [placeholder2, setPlaceholder2] = useState(placeholder)
  const [placeholder3, setPlaceholder3] = useState(placeholder)
  const [placeholderNumber, setPlaceholderNumber] = useState()
  const [title, setTitle] = useState('')
  let type = 'template'

  useEffect(() => {
    if (placeholderNumber === 1) {
      setPlaceholder1(selectedThumb)
    }
    if (placeholderNumber === 2) {
      setPlaceholder2(selectedThumb)
    }
    if (placeholderNumber === 3) {
      setPlaceholder2(selectedThumb)
    }
  }, [selectedThumb, placeholderNumber])

  const handleImageClick = () => {
    if (placeholderNumber === 1) {
      setPlaceholder1(placeholder)
    }
    if (placeholderNumber === 2) {
      setPlaceholder2(placeholder)
    }
    if (placeholderNumber === 3) {
      setPlaceholder2(placeholder)
    }
  }

  const isStepOptional = (step) => {
    return step === 2
  }

  const isStepSkipped = (step) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }
  return (
    <Box sx={{ width: '100%', paddingTop: '80px' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />

            <PageContent
              selectedTemplate={selectedTemplate}
              selectedBackground={selectedBackground}
              setPlaceholderNumber={setPlaceholderNumber}
              placeholder1={placeholder1}
              placeholder2={placeholder2}
              placeholder3={placeholder3}
              handleImageClick={handleImageClick}
              title={title}
              type="thumb"
            />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && <AddTitle title={title} setTitle={setTitle} />}
          {activeStep !== 0 && (
            <DnDDrawer
              selectedThumb={selectedThumb}
              setSelectedThumb={setSelectedThumb}
              selectedBackground={selectedBackground}
              setSelectedBackground={setSelectedBackground}
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
              placeholder1={placeholder1}
              setPlaceholder1={setPlaceholder1}
              placeholder2={placeholder2}
              setPlaceholder2={setPlaceholder2}
              placeholder3={placeholder3}
              setPlaceholder3={setPlaceholder3}
              placeholderNumber={placeholderNumber}
              setPlaceholderNumber={setPlaceholderNumber}
              activeStep={activeStep}
              handleImageClick={handleImageClick}
              title={title}
              setTitle={setTitle}
              type="normal"
            />
          )}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}
