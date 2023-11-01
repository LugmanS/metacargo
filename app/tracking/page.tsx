"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackingConfig } from "@/utils/tracking.config"
import { useEffect, useState } from "react"

type TrackingConfig = {
  label: string
  slug: "container" | "bol" | "awb"
  placeholder: string
}

type ModeOfTrackingConfig = {
  container: TrackingConfig
  bol: TrackingConfig
  awb: TrackingConfig
}

export default function Page() {
  const [modeOfTracking, setModeOfTracking] = useState<
    "container" | "bol" | "awb"
  >("container")

  const modeOfTrackingConfig: ModeOfTrackingConfig = {
    container: {
      label: "Container",
      slug: "container",
      placeholder: "Enter your container number",
    },
    bol: {
      label: "Bill of Lading",
      slug: "bol",
      placeholder: "Enter your bill of lading number",
    },
    awb: {
      label: "Air Cargo",
      slug: "awb",
      placeholder: "Enter your AWB number",
    },
  }

  useEffect(() => {
    setTrackingNumber("")
  }, [modeOfTracking])

  const [isTrackingError, setTrackingError] = useState(false)

  const [trackingNumber, setTrackingNumber] = useState("")

  function handleTracking() {
    const isValidTrackingNumber = trackingNumber.length > 4
    if (!isValidTrackingNumber) return
    const trackingSlug =
      modeOfTracking === "awb"
        ? trackingNumber.slice(0, 3).concat("-")
        : trackingNumber.slice(0, 4)
    const trackingData = trackingConfig[modeOfTracking][trackingSlug]
    if (!trackingData || trackingData.type === "API") {
      setTrackingError(true)
      return
    }
    trackingData.getTrackingInfo(trackingNumber)
  }

  function handleTrackingNumberChange(input: string) {
    if (modeOfTracking === "awb" && input.length > 3 && !input.includes("-")) {
      return setTrackingNumber(
        input.slice(0, 3).concat("-").concat(input.slice(3)).trim()
      )
    }
    setTrackingNumber(input.toUpperCase().trim())
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-6xl font-bold leading-[64px] text-center">
        Unified solution for all your <br /> shipment tracking needs.
      </h1>
      <p className="text-lg text-center">
        Track your shipments with the most convenient tool. <br /> Just enter
        the tracking number, we take it forward.
      </p>

      <div className="w-full max-w-2xl flex flex-col items-start gap-3">
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="">Mode of tracking</label>
          <div className="w-full flex items-start gap-2">
            {Object.values(modeOfTrackingConfig).map((modeCofnig) => (
              <Button
                key={modeCofnig.slug}
                variant={
                  modeCofnig.slug === modeOfTracking ? "default" : "outline"
                }
                onClick={() =>
                  modeCofnig.slug !== modeOfTracking &&
                  setModeOfTracking(modeCofnig.slug)
                }
              >
                {modeCofnig.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center w-full gap-2">
          <Input
            type="text"
            title={modeOfTrackingConfig[modeOfTracking].placeholder}
            maxLength={modeOfTracking === "awb" ? 12 : 10}
            autoFocus={true}
            placeholder={modeOfTrackingConfig[modeOfTracking].placeholder}
            value={trackingNumber}
            onChange={(e) => handleTrackingNumberChange(e.target.value)}
          />
          <Button onClick={handleTracking}>Track Shipment</Button>
        </div>
        {isTrackingError && (
          <Alert className="mt-4">
            <AlertTitle>
              {`Sorry, Currently we couldn't find shipment's tracking information`}
            </AlertTitle>
            <AlertDescription>
              Please check the entered tracking number or try another number.
            </AlertDescription>
          </Alert>
        )}
      </div>
      <div id="form-container"></div>
    </div>
  )
}
