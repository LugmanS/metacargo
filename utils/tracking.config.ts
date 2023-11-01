import axios from "axios"

export const trackingTypes = {
  pathParam: "PATH-PARAM",
  api: "API",
  formSubmit: "FORM-SUBMIT",
  manual: "MANUAL",
}

export type TrackingConfig = {
  container: {
    [key: string]: {
      type: string
      providerName: string
      getTrackingInfo: (trackingNumber: string) => void
    }
  }
  bol: {
    [key: string]: {
      type: string
      providerName: string
      getTrackingInfo: (trackingNumber: string) => void
    }
  }
  awb: {
    [key: string]: {
      type: string
      providerName: string
      getTrackingInfo: (trackingNumber: string) => void
    }
  }
}

export const trackingConfig: TrackingConfig = {
  container: {
    ZWFU: {
      type: trackingTypes.pathParam,
      providerName: "Zim World Freight",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.zline.in/ContainerTracking/ContainerTracking.aspx?TrackBy=CONTAINER_NO&TrackingText=${trackingNumber}`,
          "_blank"
        )
      },
    },
    WECU: {
      type: trackingTypes.pathParam,
      providerName: "W.E.C. Lines",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://weclines.locussoftware.com/customer-portal/#/cover-page/container-tracking;values=${trackingNumber};option=container`,
          "_blank"
        )
      },
    },
    HMKU: {
      type: trackingTypes.pathParam,
      providerName: "W.E.C. Lines",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://weclines.locussoftware.com/customer-portal/#/cover-page/container-tracking;values=${trackingNumber};option=container`,
          "_blank"
        )
      },
    },
    TRHU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TDRU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TCLU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TCKU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TCNU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TTNU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TRLU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    ICSU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TPHU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TOLU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TRDU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TRIU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    IKSU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MTRU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TIIU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TLLU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    HNSU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TDTU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    YOIU: {
      type: trackingTypes.pathParam,
      providerName: "Triton",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TLXU: {
      type: trackingTypes.pathParam,
      providerName: "Trans Asia",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://182.72.192.230/TASFREIGHT/AppTasnet/ContainerTracking.aspx?&containerno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    STRU: {
      type: trackingTypes.pathParam,
      providerName: "TOTE Maritime",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://portal.totemaritime.com/Track/TrackDetails?trackportalid=0&searchNum=${trackingNumber}&trackType=1`,
          "_blank"
        )
      },
    },
    JSSU: {
      type: trackingTypes.pathParam,
      providerName: "Swire Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.swireshipping.com/requestTrackShipment/CN/${trackingNumber}`,
          "_blank"
        )
      },
    },
    BAXU: {
      type: trackingTypes.pathParam,
      providerName: "Sunmarine",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.sunmarine.com/trackntrace.aspx?Type=CO&blno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    ARCU: {
      type: trackingTypes.pathParam,
      providerName: "Sunmarine",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.sunmarine.com/trackntrace.aspx?Type=CO&blno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    STBU: {
      type: trackingTypes.pathParam,
      providerName: "Stolt Tank Containers",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SNIU: {
      type: trackingTypes.pathParam,
      providerName: "Stolt Tank Containers",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`,
          "_blank"
        )
      },
    },
    TAIU: {
      type: trackingTypes.pathParam,
      providerName: "Stolt Tank Containers",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`,
          "_blank"
        )
      },
    },
    UTCU: {
      type: trackingTypes.pathParam,
      providerName: "Stolt Tank Containers",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`,
          "_blank"
        )
      },
    },
    TABU: {
      type: trackingTypes.pathParam,
      providerName: "Stolt Tank Containers",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SWTU: {
      type: trackingTypes.pathParam,
      providerName: "Stolt Tank Containers",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`,
          "_blank"
        )
      },
    },
    BVIU: {
      type: trackingTypes.pathParam,
      providerName: "Stolt Tank Containers",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SNTU: {
      type: trackingTypes.pathParam,
      providerName: "Stolt Tank Containers",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SNBU: {
      type: trackingTypes.pathParam,
      providerName: "Sinotrans",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ebusiness.sinolines.com.cn/snlebusiness/EQUERY/TrackingCargoE.aspx?subject=cntrno&item=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SNHU: {
      type: trackingTypes.pathParam,
      providerName: "Sinotrans",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ebusiness.sinolines.com.cn/snlebusiness/EQUERY/TrackingCargoE.aspx?subject=cntrno&item=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SNCU: {
      type: trackingTypes.pathParam,
      providerName: "Sinotrans",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ebusiness.sinolines.com.cn/snlebusiness/EQUERY/TrackingCargoE.aspx?subject=cntrno&item=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SKLU: {
      type: trackingTypes.pathParam,
      providerName: "Sinokor Merchant Marine",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.sinokor.co.kr/Tracking?cntrno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SKRU: {
      type: trackingTypes.pathParam,
      providerName: "Sinokor Merchant Marine",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.sinokor.co.kr/Tracking?cntrno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SKHU: {
      type: trackingTypes.pathParam,
      providerName: "Sinokor Merchant Marine",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.sinokor.co.kr/Tracking?cntrno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MCPU: {
      type: trackingTypes.pathParam,
      providerName: "Sealand",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.sealandmaersk.com/tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    PCIU: {
      type: trackingTypes.pathParam,
      providerName: "PIL",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.pilship.com/--/120.html?option_tr=container&refnumbers=${trackingNumber}`,
          "_blank"
        )
      },
    },
    PIDU: {
      type: trackingTypes.pathParam,
      providerName: "PIL",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.pilship.com/--/120.html?option_tr=container&refnumbers=${trackingNumber}`,
          "_blank"
        )
      },
    },
    PILU: {
      type: trackingTypes.pathParam,
      providerName: "PIL",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.pilship.com/--/120.html?option_tr=container&refnumbers=${trackingNumber}`,
          "_blank"
        )
      },
    },
    ONEU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MOEU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MOSU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MOLU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    PXCU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    NYKU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MOTU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MORU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MOGU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MOFU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MOAU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    KKLU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    AKLU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    ESSU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    KLTU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    KLFU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    KKTU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    KKFU: {
      type: trackingTypes.pathParam,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`,
          "_blank"
        )
      },
    },
    OASU: {
      type: trackingTypes.pathParam,
      providerName: "Ocean Axis",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://dxb.fresaxpress.com:7001/apex/fresaxp/f?p=202:3:0::NO:3:P0_COMPANY_ID,P3_CONTAINER_NO:1002,${trackingNumber}`,
          "_blank"
        )
      },
    },
    MRTU: {
      type: trackingTypes.pathParam,
      providerName: "Meratus Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.meratus.com/en/guest/quick-tracking?query=${trackingNumber}`,
          "_blank"
        )
      },
    },
    SKNU: {
      type: trackingTypes.pathParam,
      providerName: "Kuehne + Nagel",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://mykn.kuehne-nagel.com/public-tracking/shipments?query=${trackingNumber}`,
          "_blank"
        )
      },
    },
    IAAU: {
      type: trackingTypes.pathParam,
      providerName: "Interasia Lines",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.interasia.cc/Service/ContainerList?cargoVanNo=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HSLU: {
      type: trackingTypes.pathParam,
      providerName: "HS Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.hsln.co.kr/Tracking?blno=&cntrno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HDMU: {
      type: trackingTypes.pathParam,
      providerName: "HMM",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do?cntrNo=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HMMU: {
      type: trackingTypes.pathParam,
      providerName: "HMM",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do?cntrNo=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HGLU: {
      type: trackingTypes.pathParam,
      providerName: "Hillebrand Gori",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://my.hillebrandgori.com/public-tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    BPTU: {
      type: trackingTypes.pathParam,
      providerName: "Hillebrand Gori",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://my.hillebrandgori.com/public-tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    HALU: {
      type: trackingTypes.pathParam,
      providerName: "Heung-A Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.heung-a.com/Tracking?blno=&cntrno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HLHU: {
      type: trackingTypes.pathParam,
      providerName: "Heung-A Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.heung-a.com/Tracking?blno=&cntrno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HLCU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    LNXU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    DAYU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    CSVU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HLXU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    CPSU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    CSQU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    CMUU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    TMMU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    FANU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    ITAU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    CASU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    IVLU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HAMU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    UACU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    QNNU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    QIBU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    UAEU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    TLEU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    NIDU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    NDSU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    HLBU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    UASU: {
      type: trackingTypes.pathParam,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MSKU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    SUDU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    CNIU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    KHLU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    ENAU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MWCU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MWMU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MAEU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    SEAU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    APMU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MHHU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MSFU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    PONU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    POCU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    KNLU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    OCLU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    FRLU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MCAU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MCHU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MSAU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MWSU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    FAAU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    TORU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    LOTU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MIEU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    SCMU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MRKU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MSWU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    CADU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    GRIU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MVIU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MNBU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MCRU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MMAU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    COZU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    HASU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MALU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MRSU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    MRFU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    KHJU: {
      type: trackingTypes.pathParam,
      providerName: "Hamburg Sud",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    GSLU: {
      type: trackingTypes.pathParam,
      providerName: "Gold start Lines",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.goldstarline.com/#/track_shipment/${trackingNumber}`,
          "_blank"
        )
      },
    },
    JXLU: {
      type: trackingTypes.pathParam,
      providerName: "Gold start Lines",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.goldstarline.com/#/track_shipment/${trackingNumber}`,
          "_blank"
        )
      },
    },
    JXJU: {
      type: trackingTypes.pathParam,
      providerName: "Gold start Lines",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.goldstarline.com/#/track_shipment/${trackingNumber}`,
          "_blank"
        )
      },
    },
    GMOU: {
      type: trackingTypes.pathParam,
      providerName: "Gold start Lines",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.goldstarline.com/#/track_shipment/${trackingNumber}`,
          "_blank"
        )
      },
    },
    EMKU: {
      type: trackingTypes.pathParam,
      providerName: "Emkay Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.emkayline.com/trackbycno.php?txt_container_no=${trackingNumber}`,
          "_blank"
        )
      },
    },
    ECNU: {
      type: trackingTypes.pathParam,
      providerName: "Econ Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://tracer.econshipping.com/TracerERP/track-your-shipment/${trackingNumber}`,
          "_blank"
        )
      },
    },
    STJU: {
      type: trackingTypes.pathParam,
      providerName: "DHL",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.dbschenker.com/app/tracking-public/?refNumber=${trackingNumber}&language_region=en-US_US`,
          "_blank"
        )
      },
    },
    DGFU: {
      type: trackingTypes.pathParam,
      providerName: "DHL",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.dhl.com/in-en/home/tracking/tracking-express.html?locale=true&submit=1&tracking-id=${trackingNumber}`,
          "_blank"
        )
      },
    },
    DHZU: {
      type: trackingTypes.pathParam,
      providerName: "DHL",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.dhl.com/in-en/home/tracking/tracking-express.html?locale=true&submit=1&tracking-id=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MSLU: {
      type: trackingTypes.pathParam,
      providerName: "Minsheng Ocean Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.mssco.net/Eip/Svc/wfCargoTracking.aspx?BL=&CN=${trackingNumber}&BK=`,
          "_blank"
        )
      },
    },
    UESU: {
      type: trackingTypes.pathParam,
      providerName: "UES International",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`,
          "_blank"
        )
      },
    },
    GVDU: {
      type: trackingTypes.pathParam,
      providerName: "UES International",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`,
          "_blank"
        )
      },
    },
    GVCU: {
      type: trackingTypes.pathParam,
      providerName: "UES International",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`,
          "_blank"
        )
      },
    },
    UETU: {
      type: trackingTypes.pathParam,
      providerName: "UES International",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`,
          "_blank"
        )
      },
    },
    UXXU: {
      type: trackingTypes.pathParam,
      providerName: "UES International",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`,
          "_blank"
        )
      },
    },
    WHLU: {
      type: trackingTypes.manual,
      providerName: "Wan Hai Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml"
        )
      },
    },
    WHSU: {
      type: trackingTypes.manual,
      providerName: "Wan Hai Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml"
        )
      },
    },
    TPCU: {
      type: trackingTypes.manual,
      providerName: "Wan Hai Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml"
        )
      },
    },
    TRKU: {
      type: trackingTypes.manual,
      providerName: "Turkon Line",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://my.turkon.com/container-tracking")
      },
    },
    TVSU: {
      type: trackingTypes.manual,
      providerName: "Transvision Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("http://portal.transvisionshipping.com:9999/ContTrack/")
      },
    },
    TKRU: {
      type: trackingTypes.manual,
      providerName: "TransContainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://isales.trcont.com/?tab=tracking")
      },
    },
    RZDU: {
      type: trackingTypes.manual,
      providerName: "TransContainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://isales.trcont.com/?tab=tracking")
      },
    },
    TRBU: {
      type: trackingTypes.manual,
      providerName: "Trailer Bridge",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("http://legacy.trailerbridge.com/CustomerInquiry/CI.aspx")
      },
    },
    GLDU: {
      type: trackingTypes.manual,
      providerName: "Touax",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.touax-container.com/unit-inquiry")
      },
    },
    TGCU: {
      type: trackingTypes.manual,
      providerName: "Touax",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.touax-container.com/unit-inquiry")
      },
    },
    PGTU: {
      type: trackingTypes.manual,
      providerName: "Touax",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.touax-container.com/unit-inquiry")
      },
    },
    TGSU: {
      type: trackingTypes.manual,
      providerName: "Touax",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.touax-container.com/unit-inquiry")
      },
    },
    GRDU: {
      type: trackingTypes.manual,
      providerName: "Touax",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.touax-container.com/unit-inquiry")
      },
    },
    TEXU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    MAXU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    AXIU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    CHIU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    TGBU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    TENU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    TXGU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    OCGU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    RFSU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    MGLU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    MAGU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    CEOU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    LLTU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    TEMU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    XINU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    HCIU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    AMZU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    AMFU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    GAZU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    CLHU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    GAEU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    GATU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    WCIU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    MLCU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    PRSU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    TGHU: {
      type: trackingTypes.manual,
      providerName: "Textainer",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx"
        )
      },
    },
    GETU: {
      type: trackingTypes.manual,
      providerName: "Tarros",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.tarros.it/utilities/container-tracking/")
      },
    },
    OWNU: {
      type: trackingTypes.manual,
      providerName: "Tarros",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.tarros.it/utilities/container-tracking/")
      },
    },
    TARU: {
      type: trackingTypes.manual,
      providerName: "Tarros",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.tarros.it/utilities/container-tracking/")
      },
    },
    TAKU: {
      type: trackingTypes.manual,
      providerName: "Tanto",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.tantonet.com/")
      },
    },
    TAWU: {
      type: trackingTypes.manual,
      providerName: "TAILWIND Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://erp.tailwind-shipping.com/ecomonline/")
      },
    },
    TSLU: {
      type: trackingTypes.manual,
      providerName: "T.S. Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.tslines.com/en/tracking?nowmenu=Search%20by%20Container%20number"
        )
      },
    },
    TSTU: {
      type: trackingTypes.manual,
      providerName: "T.S. Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.tslines.com/en/tracking?nowmenu=Search%20by%20Container%20number"
        )
      },
    },
    TSSU: {
      type: trackingTypes.manual,
      providerName: "T.S. Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.tslines.com/en/tracking?nowmenu=Search%20by%20Container%20number"
        )
      },
    },
    SITU: {
      type: trackingTypes.manual,
      providerName: "SITC",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://api.sitcline.com/sitcline/wel?name=cargoTrack")
      },
    },
    CWFU: {
      type: trackingTypes.manual,
      providerName: "SITC",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://api.sitcline.com/sitcline/wel?name=cargoTrack")
      },
    },
    OOLU: {
      type: trackingTypes.manual,
      providerName: "OOCL",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.oocl.com/eng/Pages/default.aspx")
      },
    },
    OOCU: {
      type: trackingTypes.manual,
      providerName: "OOCL",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.oocl.com/eng/Pages/default.aspx")
      },
    },
    NSSU: {
      type: trackingTypes.manual,
      providerName: "Namsung",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://ebiz.namsung.co.kr/")
      },
    },
    NSRU: {
      type: trackingTypes.manual,
      providerName: "Namsung",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://ebiz.namsung.co.kr/")
      },
    },
    NSJU: {
      type: trackingTypes.manual,
      providerName: "Namsung",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://ebiz.namsung.co.kr/")
      },
    },
    NSDU: {
      type: trackingTypes.manual,
      providerName: "Namsung",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://ebiz.namsung.co.kr/")
      },
    },
    LMCU: {
      type: trackingTypes.manual,
      providerName: "Messina Line",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.messinaline.it/wps/wcm/connect/internet/messina_en/operativo/cntr_tracking/#tf-cntr_tracking"
        )
      },
    },
    CHLU: {
      type: trackingTypes.manual,
      providerName: "Marguisa",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://tracking.marguisa.com/")
      },
    },
    OEXU: {
      type: trackingTypes.manual,
      providerName: "Marguisa",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://tracking.marguisa.com/")
      },
    },
    MUOU: {
      type: trackingTypes.manual,
      providerName: "Marguisa",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://tracking.marguisa.com/")
      },
    },
    MFTU: {
      type: trackingTypes.manual,
      providerName: "Marfret",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.marfret.fr/suivre-mon-container/")
      },
    },
    ICUU: {
      type: trackingTypes.manual,
      providerName: "Independent Container Line",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://eservices.icl-ltd.com/app#/containerLocation")
      },
    },
    PCSU: {
      type: trackingTypes.manual,
      providerName: "Dong Young Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://ebiz.pcsline.co.kr/")
      },
    },
    DYLU: {
      type: trackingTypes.manual,
      providerName: "Dong Young Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://ebiz.pcsline.co.kr/")
      },
    },
    MSMU: {
      type: trackingTypes.manual,
      providerName: "MSC",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.msc.com/en/track-a-shipment")
      },
    },
    MEDU: {
      type: trackingTypes.manual,
      providerName: "MSC",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.msc.com/en/track-a-shipment")
      },
    },
    NIRU: {
      type: trackingTypes.manual,
      providerName: "Nirint Shipping ",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://containercontrol.nirint.com/scripts/cgiip.exe/WService=Nirint/system/web/sp-web-menu.r?program=CA.WEB-FASTTRACK2&clearsearch=yes&setting=web2014"
        )
      },
    },
    REGU: {
      type: trackingTypes.manual,
      providerName: "RCL",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.rclgroup.com/Home#cargo")
      },
    },
    SJKU: {
      type: trackingTypes.manual,
      providerName: "Sarjak Container Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://sarjak.com/tracking.aspx")
      },
    },
    SIKU: {
      type: trackingTypes.api,
      providerName: "Samudera Shipping",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.post(
            `https://ssl-cts.samudera.id:9600/cts_web/applicationMssqlServer/script/dataapi.php`,
            { container_no: trackingNumber, type_search: "Container" },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    NAIU: {
      type: trackingTypes.api,
      providerName: "PSL Navegação",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://tracking.pslnavegacao.com:8081/tracking_resposta.asp?contrNumber=${trackingNumber}`,
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    LOVU: {
      type: trackingTypes.api,
      providerName: "NCL",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://nclweb-prod.appresso.no/_api/trackntrace?search=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FFAU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FSCU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    CBHU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FBLU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FCIU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FBIU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    DFSU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    DFOU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    JTMU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    PGXU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FJKU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FCGU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FCLU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FTAU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FCXU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FDCU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FNGU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FNTU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FNBU: {
      type: trackingTypes.api,
      providerName: "Florens",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    YMMU: {
      type: trackingTypes.formSubmit,
      providerName: "Yang Ming",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.yangming.com/e-service/Track_Trace/track_trace_cargo_tracking.aspx" method="get" target="_blank"><input name="str" type="hidden" value=${trackingNumber}><input name="rdolType" type="hidden" value="CT"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    YMLU: {
      type: trackingTypes.formSubmit,
      providerName: "Yang Ming",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.yangming.com/e-service/Track_Trace/track_trace_cargo_tracking.aspx" method="get" target="_blank"><input name="str" type="hidden" value=${trackingNumber}><input name="rdolType" type="hidden" value="CT"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    WSLU: {
      type: trackingTypes.formSubmit,
      providerName: "Westwood Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://wsl.com/Tracking/QuickAccess" method="post" target="_blank"><input name="containerNumbers" type="hidden" value=${trackingNumber}><input name="bkNumbers" type="hidden"><input name="__RequestVerificationToken" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    VLLU: {
      type: trackingTypes.formSubmit,
      providerName: "VL Logistic",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://vl-logistic.ru/tracking/index.php" method="post" target="frame-805"><input name="q" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    VOLU: {
      type: trackingTypes.formSubmit,
      providerName: "Volta",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://voltacontainerline.com/track-shipment-result/" method="get" target="frame-843"><input name="bill_id" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    VOTU: {
      type: trackingTypes.formSubmit,
      providerName: "Volta",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://voltacontainerline.com/track-shipment-result/" method="get" target="frame-843"><input name="bill_id" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    BLJU: {
      type: trackingTypes.formSubmit,
      providerName: "Unifeeder",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.unifeeder.cargoes.com/tracking" method="get" target="frame-113"><input name="ID" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    PMLU: {
      type: trackingTypes.formSubmit,
      providerName: "Unifeeder",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.unifeeder.cargoes.com/tracking" method="get" target="frame-113"><input name="ID" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SMCU: {
      type: trackingTypes.formSubmit,
      providerName: "SM Line",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://esvc.smlines.com/smline/CUP_HOM_3301.do" method="post" target="frame-163"><input name="f_cmd" type="hidden"><input name="pagerows" type="hidden"><input name="sessLocale" type="hidden" value="en"><input name="ctgId" type="hidden"><input name="prntMnuId" type="hidden"><input name="mnuId" type="hidden"><input name="brdSeq" type="hidden"><input name="hpgLangTpCd" type="hidden"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value="SMCU9437328"><input name="vslEngNmParam" type="hidden"><input name="vslCdParam" type="hidden"><input name="oriLocNmParam" type="hidden"><input name="modeFlgParam" type="hidden"><input name="cargoTrackingNo" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SMLU: {
      type: trackingTypes.formSubmit,
      providerName: "Seaboard Marine",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.seaboardmarine.com/smb-equipment-track-result/" method="post" target="frame-157"><input name="eq_no" type="hidden" value=${`${trackingNumber.slice(
          0,
          4
        )} ${trackingNumber.slice(
          4
        )}`}><input name="vin_no" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SLVU: {
      type: trackingTypes.formSubmit,
      providerName: "Sea-Lead",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.sea-lead.com/track-shipment/" method="post" target="frame-323"><input name="bl_number" type="hidden"><input name="container_id" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SIIU: {
      type: trackingTypes.formSubmit,
      providerName: "SCI",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.shipindia.com/frontcontroller/track_trace1" method="post" target="_blank"><input name="type" type="hidden" value="CT"><input name="container_no" type="hidden" value=${trackingNumber}><input name="go" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ROBU: {
      type: trackingTypes.formSubmit,
      providerName: "Roberto Bucci",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://tfg.bucci.it/saracgi/eloq.cgi/WW_CNT" method="post" target="frame-770"><input name="modo" type="hidden" value="2"><input name="cntr" type="hidden" value=${trackingNumber}><input name="modo" type="hidden" value="2"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    PGHU: {
      type: trackingTypes.formSubmit,
      providerName: "Pasha Hawaii",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://web01.pashahawaii.com/PHLiner/Tracking" method="post" target="frame-722"><input name="SearchTerm" type="hidden" value=${trackingNumber}><input name="SearchType" type="hidden" value="2"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    PCLU: {
      type: trackingTypes.formSubmit,
      providerName: "Pan Continental Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http://www.pancon.co.kr/pan/pageLink.pcl" method="post" target="_blank"><input name="link" type="hidden" value="COM/WEB_212"><input name="I_AS_KIND" type="hidden" value="CT"><input name="BKG_NO" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    NOKU: {
      type: trackingTypes.formSubmit,
      providerName: "Nauka Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http://www.naukalines.com/track/index.php/welcome/search_container_no" method="post" target="_blank"><input name="container_number" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    MATU: {
      type: trackingTypes.formSubmit,
      providerName: "Matson",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    RSLU: {
      type: trackingTypes.formSubmit,
      providerName: "Matson",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CXCU: {
      type: trackingTypes.formSubmit,
      providerName: "Matson",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    HRZU: {
      type: trackingTypes.formSubmit,
      providerName: "Matson",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    MLHU: {
      type: trackingTypes.formSubmit,
      providerName: "Matson",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    MERU: {
      type: trackingTypes.formSubmit,
      providerName: "Mariana Express Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.mellship.com/Track" method="get" target="frame-680"><input name="type" type="hidden" value="container"><input name="text" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    MEXU: {
      type: trackingTypes.formSubmit,
      providerName: "Mariana Express Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.mellship.com/Track" method="get" target="frame-680"><input name="type" type="hidden" value="container"><input name="text" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    MCTU: {
      type: trackingTypes.formSubmit,
      providerName: "Mariana Express Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.mellship.com/Track" method="get" target="frame-680"><input name="type" type="hidden" value="container"><input name="text" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    LCUU: {
      type: trackingTypes.formSubmit,
      providerName: "Lancer Container lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://lancerline.com/statustracking" method="post" target="frame-782"><input name="track-input" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    KMBU: {
      type: trackingTypes.formSubmit,
      providerName: "Kambara Kisen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://esvc.kambara-kisen.co.jp/clt/CUP_HOM_3301.do" method="get" target="frame-327"><input name="redir" type="hidden" value="Y"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value=${trackingNumber}><input name="sessLocale" type="hidden" value="en"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    KCDU: {
      type: trackingTypes.formSubmit,
      providerName: "Kalypso",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://kcnshipping.com/en/tracking-2/" method="get" target="frame-904"><input name="container" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    IMTU: {
      type: trackingTypes.formSubmit,
      providerName: "Italia Marittima",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="IMTU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    LTIU: {
      type: trackingTypes.formSubmit,
      providerName: "Italia Marittima",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="IMTU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ITXU: {
      type: trackingTypes.formSubmit,
      providerName: "Interport",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://idsng.iport.com/public/equipment_inquiry" method="get" target="_blank"><input name="utf8" type="hidden" value="✓"><input name="inquiry[equipment_numbers]" type="hidden" value=${trackingNumber}><input name="commit" type="hidden" value="Look+up+units"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    HACU: {
      type: trackingTypes.formSubmit,
      providerName: "Haian",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http://113.160.100.137:8008/Search/SearchCont" method="post" target="_blank"><input name="Searchtxt" type="hidden" value=${trackingNumber}><input name="checkbutton" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    GLUU: {
      type: trackingTypes.formSubmit,
      providerName: "Globelink Unimar",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://globelink-unimar.com/online-yuk-takibi/" method="get" target="frame-154"><input name="trackId" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    EMCU: {
      type: trackingTypes.formSubmit,
      providerName: "Evergreen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    HMCU: {
      type: trackingTypes.formSubmit,
      providerName: "Evergreen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    EGHU: {
      type: trackingTypes.formSubmit,
      providerName: "Evergreen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    EGSU: {
      type: trackingTypes.formSubmit,
      providerName: "Evergreen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    EITU: {
      type: trackingTypes.formSubmit,
      providerName: "Evergreen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    EISU: {
      type: trackingTypes.formSubmit,
      providerName: "Evergreen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    UGMU: {
      type: trackingTypes.formSubmit,
      providerName: "Evergreen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ESLU: {
      type: trackingTypes.formSubmit,
      providerName: "ESL",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.eslse.et/index.php#Track" method="post" target="frame-500"><input name="type" type="hidden" value="Container"><input name="selection" type="hidden" value="All"><input name="input_value" type="hidden" value=${trackingNumber}><input name="search" type="hidden" value="Search"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ESPU: {
      type: trackingTypes.formSubmit,
      providerName: "Emirates Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.emiratesline.com/cargotrracking" method="post" target="_blank"><input name="ctid" type="hidden" value=${trackingNumber}><input name="scode" type="hidden" value="tgCQK3v3QbHHzFs6"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ESDU: {
      type: trackingTypes.formSubmit,
      providerName: "Emirates Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.emiratesline.com/cargotrracking" method="post" target="_blank"><input name="ctid" type="hidden" value=${trackingNumber}><input name="scode" type="hidden" value="tgCQK3v3QbHHzFs6"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    DJLU: {
      type: trackingTypes.formSubmit,
      providerName: "Dongjin Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http://esvc.djship.co.kr/gnoss/CUP_HOM_3301.do" method="post" target="_blank"><input name="f_cmd" type="hidden"><input name="pagerows" type="hidden"><input name="sessLocale" type="hidden" value="en"><input name="ctgId" type="hidden"><input name="prntMnuId" type="hidden"><input name="mnuId" type="hidden"><input name="brdSeq" type="hidden"><input name="hpgLangTpCd" type="hidden"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value="DJLU9437328"><input name="vslEngNmParam" type="hidden"><input name="vslCdParam" type="hidden"><input name="oriLocNmParam" type="hidden"><input name="modeFlgParam" type="hidden"><input name="cargoTrackingNo" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    DLTU: {
      type: trackingTypes.formSubmit,
      providerName: "Dalreftrans",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form action="https://www.fesco.ru/en/clients/tracking/" method="get" target="_blank"><input name="codes" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CULU: {
      type: trackingTypes.formSubmit,
      providerName: "CULines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.culines.com/en/site/bill" method="get" target="_blank"><input name="reg" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CCLU: {
      type: trackingTypes.formSubmit,
      providerName: "COSCO Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CSLU: {
      type: trackingTypes.formSubmit,
      providerName: "COSCO Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CSNU: {
      type: trackingTypes.formSubmit,
      providerName: "COSCO Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CVTU: {
      type: trackingTypes.formSubmit,
      providerName: "COSCO Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    OERU: {
      type: trackingTypes.formSubmit,
      providerName: "COSCO Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CMAU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CGMU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ECMU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    MMCU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    AMCU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    DVRU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    OTAU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CMNU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    STMU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    OPDU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SMUU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CNCU: {
      type: trackingTypes.formSubmit,
      providerName: "CNC",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.cnc-line.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    PRGU: {
      type: trackingTypes.formSubmit,
      providerName: "CCIS",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    CINU: {
      type: trackingTypes.formSubmit,
      providerName: "CCIS",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    FFLU: {
      type: trackingTypes.api,
      providerName: "Fair freight",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.post(
            `https://www.fairfreight.com/tracking_service.php`,
            {
              trackingNumber: trackingNumber,
            }
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    ACLU: {
      type: trackingTypes.api,
      providerName: "ACL",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.post(
            `https://www.aclcargo.com/content/themes/acl/library/parse-cargo-track.php`,
            {
              "data[request]": `SA-${trackingNumber}`,
              nonce: "b24deffb2e",
            }
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    ARKU: {
      type: trackingTypes.api,
      providerName: "Arkas",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://webtracking.arkasline.com.tr/api/request/Get?controllerMethod=webtracking%2api%2shipmenttracking%2GetDocumentationAsync&prms=%7B%22key%22:%22${trackingNumber}%22%7D`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FCCU: {
      type: trackingTypes.formSubmit,
      providerName: "FESCO",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.fesco.ru/en/clients/tracking/" method="get" target="_blank"><input name="codes" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    FESU: {
      type: trackingTypes.formSubmit,
      providerName: "FESCO",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.fesco.ru/en/clients/tracking/" method="get" target="_blank"><input name="codes" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CSFU: {
      type: trackingTypes.formSubmit,
      providerName: "Containerships",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CSOU: {
      type: trackingTypes.formSubmit,
      providerName: "Containerships",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CZLU: {
      type: trackingTypes.formSubmit,
      providerName: "Containerships",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    KLCU: {
      type: trackingTypes.formSubmit,
      providerName: "Containerships",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    ANNU: {
      type: trackingTypes.formSubmit,
      providerName: "ANL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.anl.com.au/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CMLU: {
      type: trackingTypes.formSubmit,
      providerName: "Camellia Line",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http://183.111.65.71/clt/CUP_HOM_3301.do" method="post" target="_blank"><input name="sessLocale" type="hidden" value="en"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CAKU: {
      type: trackingTypes.formSubmit,
      providerName: "Camellia Line",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http://183.111.65.71/clt/CUP_HOM_3301.do" method="post" target="_blank"><input name="sessLocale" type="hidden" value="en"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    APLU: {
      type: trackingTypes.formSubmit,
      providerName: "APL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    NEPU: {
      type: trackingTypes.formSubmit,
      providerName: "APL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    NOSU: {
      type: trackingTypes.formSubmit,
      providerName: "APL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    NOLU: {
      type: trackingTypes.formSubmit,
      providerName: "APL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    APZU: {
      type: trackingTypes.formSubmit,
      providerName: "APL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    APRU: {
      type: trackingTypes.formSubmit,
      providerName: "APL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    APHU: {
      type: trackingTypes.formSubmit,
      providerName: "APL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CPOU: {
      type: trackingTypes.formSubmit,
      providerName: "Cargo Partner",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://public-tracking.cargo-partner.com/" method="get" target="_blank"><input name="search" type="hidden" value=${trackingNumber}></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    BWLU: {
      type: trackingTypes.formSubmit,
      providerName: "Blue Water Lines",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.bluewaterlines.net/Login/BLCntrTracking" method="get" target="frame-834"><input name="RefType" type="hidden" value="Container"><input name="RefID" type="hidden" value=${trackingNumber}><input name="AL" type="hidden" value="0"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CSYU: {
      type: trackingTypes.api,
      providerName: "Cordelia Container Shipping Line",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://www.cordelialine.com/container-tracking/?contno=${trackingNumber}`,
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    BURU: {
      type: trackingTypes.api,
      providerName: "BAL",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `http://lcec.lclog.cn/cargo/NewCargotracking?blno=${trackingNumber}&selectstate=CNTRNO`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    BSRU: {
      type: trackingTypes.api,
      providerName: "BAL",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `http://lcec.lclog.cn/cargo/NewCargotracking?blno=${trackingNumber}&selectstate=CNTRNO`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    BLLU: {
      type: trackingTypes.api,
      providerName: "Blue Lines",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.options(
            `https://dolphin-app-88elw.ondigitalocean.app/api/v1.0/container-track/${trackingNumber}`
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    BMSU: {
      type: trackingTypes.api,
      providerName: "BMC Lines",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const postData = new URLSearchParams()
          postData.append("container", trackingNumber)
          postData.append("blno", "")

          const axiosConfig = {
            headers: {
              accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
              "accept-language": "en-US,en;q=0.8",
              "cache-control": "max-age=0",
              "content-type": "application/x-www-form-urlencoded",
              "sec-gpc": "1",
              "upgrade-insecure-requests": "1",
            },
          }
          const response = await axios.post(
            `http://www.whizecargo.com/clientbmc/viewtracking.php`,
            postData,
            axiosConfig
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    BHCU: {
      type: trackingTypes.api,
      providerName: "Bridgehead",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const postData = new URLSearchParams()
          postData.append("contNO", trackingNumber)
          postData.append("Submit", "Search")
          postData.append("FindCont", "1")

          const axiosConfig = {
            headers: {
              accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
              "accept-language": "en-US,en;q=0.5",
              "cache-control": "max-age=0",
              "content-type": "application/x-www-form-urlencoded",
              "sec-ch-ua":
                '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"Windows"',
              "sec-fetch-dest": "iframe",
              "sec-fetch-mode": "navigate",
              "sec-fetch-site": "same-origin",
              "sec-fetch-user": "?1",
              "sec-gpc": "1",
              "upgrade-insecure-requests": "1",
            },
          }
          const response = await axios.post(
            `http://www.whizecargo.com/clientbmc/viewtracking.php`,
            postData,
            axiosConfig
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    MBIU: {
      type: trackingTypes.api,
      providerName: "Bridgehead",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const postData = new URLSearchParams()
          postData.append("contNO", trackingNumber)
          postData.append("Submit", "Search")
          postData.append("FindCont", "1")

          const axiosConfig = {
            headers: {
              accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
              "accept-language": "en-US,en;q=0.5",
              "cache-control": "max-age=0",
              "content-type": "application/x-www-form-urlencoded",
              "sec-ch-ua":
                '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"Windows"',
              "sec-fetch-dest": "iframe",
              "sec-fetch-mode": "navigate",
              "sec-fetch-site": "same-origin",
              "sec-fetch-user": "?1",
              "sec-gpc": "1",
              "upgrade-insecure-requests": "1",
            },
          }
          const response = await axios.post(
            `http://www.whizecargo.com/clientbmc/viewtracking.php`,
            postData,
            axiosConfig
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    WDSU: {
      type: trackingTypes.manual,
      providerName: "World Direct Shipping ",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.worlddirectshipping.com/container-tracking.php"
        )
      },
    },
    WTLU: {
      type: trackingTypes.manual,
      providerName: "White Line",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("http://www.wll.ae/ecomonline/")
      },
    },
    VASU: {
      type: trackingTypes.manual,
      providerName: "VASI Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.vasishipping.com/tracking.html")
      },
    },
    CRLU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    INNU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    GIPU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    GAOU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    SDDU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    MTSU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    OTPU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    GSPU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    CTWU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    WBPU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    SZLU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    MGNU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    IRNU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    INKU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    INBU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    IPXU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    DRYU: {
      type: trackingTypes.manual,
      providerName: "SeaCube",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://seacube.intermodalportal.com/")
      },
    },
    GESU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    HNPU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CXDU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CXRU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    GCEU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    XTRU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    SPLU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    EMAU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    SEKU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    DNAU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    SBOU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    HJMU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    SCEU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    SCXU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    ITLU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CLOU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    SEGU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CXTU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CXSU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CUCU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CRTU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    GSTU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    SCZU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CRSU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    IEAU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    CRXU: {
      type: trackingTypes.manual,
      providerName: "Seaco",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://newseaweb.seacoglobal.com/unitenq")
      },
    },
    SHKU: {
      type: trackingTypes.manual,
      providerName: "Sea Hawk Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("http://online.shal.asia/")
      },
    },
    SHAU: {
      type: trackingTypes.manual,
      providerName: "Sea Hawk Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("http://online.shal.asia/")
      },
    },
    SANU: {
      type: trackingTypes.manual,
      providerName: "Samskip",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://my.samskip.com/")
      },
    },
    COCU: {
      type: trackingTypes.manual,
      providerName: "Samskip",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://my.samskip.com/")
      },
    },
    GNSU: {
      type: trackingTypes.manual,
      providerName: "Samskip",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://my.samskip.com/")
      },
    },
    SWLU: {
      type: trackingTypes.manual,
      providerName: "Samskip",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://my.samskip.com/")
      },
    },
    VDMU: {
      type: trackingTypes.manual,
      providerName: "Samskip",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://my.samskip.com/")
      },
    },
    NPLU: {
      type: trackingTypes.manual,
      providerName: "Saigon Newport Corporation",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://eport.saigonnewport.com.vn/ContainerInformation")
      },
    },
    RCOU: {
      type: trackingTypes.manual,
      providerName: "Royal Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://rocmnl.webtracker.wisegrid.net/")
      },
    },
    STXU: {
      type: trackingTypes.manual,
      providerName: "Pan Ocean",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://container.panocean.com/")
      },
    },
    POLU: {
      type: trackingTypes.manual,
      providerName: "Pan Ocean",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://container.panocean.com/")
      },
    },
    PDLU: {
      type: trackingTypes.manual,
      providerName: "NPDL",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://nepprd.webtracker.wisegrid.net/")
      },
    },
    NLHU: {
      type: trackingTypes.manual,
      providerName: "NPDL",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://nepprd.webtracker.wisegrid.net/")
      },
    },
    PPSU: {
      type: trackingTypes.manual,
      providerName: "NPDL",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://nepprd.webtracker.wisegrid.net/")
      },
    },
    NPDU: {
      type: trackingTypes.manual,
      providerName: "NPDL",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://nepprd.webtracker.wisegrid.net/")
      },
    },
    MKLU: {
      type: trackingTypes.manual,
      providerName: "MEDKON LINES",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://tracking.medkonlines.com/")
      },
    },
    GTIU: {
      type: trackingTypes.manual,
      providerName: "Mediterranean Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.msc.com/en/track-a-shipment")
      },
    },
    MSYU: {
      type: trackingTypes.manual,
      providerName: "Mediterranean Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.msc.com/en/track-a-shipment")
      },
    },
    MSDU: {
      type: trackingTypes.manual,
      providerName: "Mediterranean Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.msc.com/en/track-a-shipment")
      },
    },
    MSNU: {
      type: trackingTypes.manual,
      providerName: "Mediterranean Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.msc.com/en/track-a-shipment")
      },
    },
    MSZU: {
      type: trackingTypes.manual,
      providerName: "Mediterranean Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.msc.com/en/track-a-shipment")
      },
    },
    MSPU: {
      type: trackingTypes.manual,
      providerName: "Mediterranean Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.msc.com/en/track-a-shipment")
      },
    },
    MXCU: {
      type: trackingTypes.manual,
      providerName: "Maxicon Container Line",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://maxerp.ramcoes.com/maxiconline_live/hub/index.html?RVWRTQS_REQID=0a15d52f-8559-42a6-828d-475efbc9dc71&bl=en-us&_dc=1698386695529"
        )
      },
    },
    MOCU: {
      type: trackingTypes.manual,
      providerName: "MACS",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.macship.com/E-BUSINESS/Tracking-And-Tracing")
      },
    },
    KMTU: {
      type: trackingTypes.manual,
      providerName: "Korea Marine Transport",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.ekmtc.com/index.html#/cargo-tracking")
      },
    },
    IPIU: {
      type: trackingTypes.manual,
      providerName: "Iris Logistics",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://rocmnl.webtracker.wisegrid.net/")
      },
    },
    GCXU: {
      type: trackingTypes.manual,
      providerName: "Global Container International",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://gcx.intermodalportal.com/")
      },
    },
    GLLU: {
      type: trackingTypes.manual,
      providerName: "GCL",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("http://www.containers.ru/en/node/272")
      },
    },
    FOCU: {
      type: trackingTypes.manual,
      providerName: "Focus Trucking",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://focustrucking.com/trace/")
      },
    },
    FLXU: {
      type: trackingTypes.manual,
      providerName: "FlexiVan",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://flexivan.com/chassis-lookup/")
      },
    },
    FLCU: {
      type: trackingTypes.manual,
      providerName: "Finnlines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.gnet.grimaldi-eservice.com/GNET/Pages_GAtlas/WFContainerTracking"
        )
      },
    },
    FLRU: {
      type: trackingTypes.manual,
      providerName: "Finnlines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.gnet.grimaldi-eservice.com/GNET/Pages_GAtlas/WFContainerTracking"
        )
      },
    },
    GCNU: {
      type: trackingTypes.manual,
      providerName: "Grimaldi",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.gnet.grimaldi-eservice.com/GNET/Pages_GAtlas/WFContainerTracking"
        )
      },
    },
    SLZU: {
      type: trackingTypes.manual,
      providerName: "CS Leasing",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.cslintermodal.com/containerlookup/")
      },
    },
    CMCU: {
      type: trackingTypes.manual,
      providerName: "Crowley",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.crowley.com/liner-shipment-tracking/")
      },
    },
    SEFU: {
      type: trackingTypes.manual,
      providerName: "Crowley",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.crowley.com/liner-shipment-tracking/")
      },
    },
    CNRU: {
      type: trackingTypes.manual,
      providerName: "Canadian National Railway",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.cn.ca/en/")
      },
    },
    CPPU: {
      type: trackingTypes.manual,
      providerName: "Canadian Pacific Railway",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www8.cpr.ca/cpcustomerstation")
      },
    },
    BMOU: {
      type: trackingTypes.manual,
      providerName: "Beacon Intermodal",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://beacon.intermodalportal.com/")
      },
    },
    BENU: {
      type: trackingTypes.manual,
      providerName: "Beacon Intermodal",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://beacon.intermodalportal.com/")
      },
    },
    BEAU: {
      type: trackingTypes.manual,
      providerName: "Beacon Intermodal",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://beacon.intermodalportal.com/")
      },
    },
    BSIU: {
      type: trackingTypes.manual,
      providerName: "Blue Sky",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://bluesky.intermodalportal.com/")
      },
    },
    SKIU: {
      type: trackingTypes.manual,
      providerName: "Blue Sky",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://bluesky.intermodalportal.com/")
      },
    },
    MBFU: {
      type: trackingTypes.manual,
      providerName: "Carpenters Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://csl.quantumbso.com/TRACKSHIPMENT/")
      },
    },
    CARU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    CATU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    ARDU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    ARTU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    CORU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    LGRU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    LGEU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    MANU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    MARU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    PSCU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    SCSU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    TRTU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    WSCU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    WEDU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    CUBU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    CAEU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    HAKU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    ALNU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    CAGU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    RLXU: {
      type: trackingTypes.manual,
      providerName: "CARU containers",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes"
        )
      },
    },
    DAHU: {
      type: trackingTypes.manual,
      providerName: "DahNay Logistics",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://d36prd.webtracker.wisegrid.net/")
      },
    },
  },
  bol: {
    GOSU: {
      type: trackingTypes.pathParam,
      providerName: "Gold Star Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.goldstarline.com/#/track_shipment/${trackingNumber}`,
          "_blank"
        )
      },
    },
    SNKO: {
      type: trackingTypes.pathParam,
      providerName: "Sinokor Merchant Marine",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.sinokor.co.kr/Tracking?blno=${trackingNumber}`,
          "_blank"
        )
      },
    },
    MCPU: {
      type: trackingTypes.pathParam,
      providerName: "Sealand",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.sealandmaersk.com/tracking/${trackingNumber.slice(4)}`,
          "_blank"
        )
      },
    },
    SEJJ: {
      type: trackingTypes.pathParam,
      providerName: "Sealand",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.sealandmaersk.com/tracking/${trackingNumber.slice(4)}`,
          "_blank"
        )
      },
    },
    MAEU: {
      type: trackingTypes.pathParam,
      providerName: "Maersk Line",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.maersk.com/tracking/#tracking/${trackingNumber.slice(
            4
          )}`,
          "_blank"
        )
      },
    },
    HOEG: {
      type: trackingTypes.pathParam,
      providerName: "Höegh Autoliners",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.hoeghautoliners.com/my-cargo/${trackingNumber}`,
          "_blank"
        )
      },
    },
    HSLI: {
      type: trackingTypes.pathParam,
      providerName: "HS LINE",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.hsln.co.kr/Tracking?blno=${trackingNumber}&cntrno=`,
          "_blank"
        )
      },
    },
    HASL: {
      type: trackingTypes.pathParam,
      providerName: "Heung-A Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://ebiz.heung-a.com/Tracking?blno=${trackingNumber}&cntrno=`,
          "_blank"
        )
      },
    },
    ACLU: {
      type: trackingTypes.api,
      providerName: "ACL",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.post(
            `https://www.aclcargo.com/content/themes/acl/library/parse-cargo-track.php`,
            {
              "data[request]": `SA-${trackingNumber}`,
              nonce: "b24deffb2e",
            }
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    OPDR: {
      type: trackingTypes.api,
      providerName: "MacAndrews",
      getTrackingInfo: async (trackingNumber: string) => {
        try {
          const response = await axios.get(
            `https://service.opdr.com/node/trackntrace_iis_iframe/api/getBuBlContainers/${trackingNumber}`,
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          return response.data
        } catch (error) {
          console.log("Error while loading", error)
        }
      },
    },
    FEGJ: {
      type: trackingTypes.formSubmit,
      providerName: "4 ELEPHANTS GROUP",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cenowegypt.com/track-form/" method="post" target="frame-861"><input name="track_shipment_nonce" type="hidden" value="d13f0f5c34"><input name="_wp_http_referer" type="hidden" value="%2Ftrack-form%2F"><input name="wpcargo_tracking_number" type="hidden" value=${trackingNumber}><input name="wpcargo-submit" type="hidden" value="TRACK+RESULT"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SJBV: {
      type: trackingTypes.formSubmit,
      providerName: "Jinjiang Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://ejj.jjshipping.cn/cargosearch\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"billnbr\" id=\"billnbr\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    PCLU: {
      type: trackingTypes.formSubmit,
      providerName: "Pan Continental Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"http://www.pancon.co.kr/pan/pageLink.pcl\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"link\" id=\"link\" value=\"COM/WEB_212\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"I_AS_KIND\" id=\"I_AS_KIND\" value=\"BL\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"BKG_NO\" id=\"BKG_NO\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SSPH: {
      type: trackingTypes.formSubmit,
      providerName: "SETH Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.sethshipping.com/tracking_shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"id\" id=\"id\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    YMLU: {
      type: trackingTypes.formSubmit,
      providerName: "Yang Ming",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.yangming.com/e-service/Track_Trace/track_trace_cargo_tracking.aspx\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"str\" id=\"str\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"rdolType\" id=\"rdolType\" value=\"BL\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ZIMU: {
      type: trackingTypes.formSubmit,
      providerName: "ZIM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.zim.com/tools/track-a-shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"consnumber\" id=\"consnumber\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    YMPR: {
      type: trackingTypes.formSubmit,
      providerName: "Yang Ming",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.yangming.com/e-service/Track_Trace/track_trace_cargo_tracking.aspx\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"str\" id=\"str\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"rdolType\" id=\"rdolType\" value=\"BL\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    WWSU: {
      type: trackingTypes.formSubmit,
      providerName: "Westwood Shipping Lines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://wsl.com/Tracking/Public\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"sortOrder\" id=\"sortOrder\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"containerNumbers\" id=\"containerNumbers\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"pageSize\" id=\"pageSize\" value=\"20\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"bkNumbers\" id=\"bkNumbers\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"blNumbers\" id=\"blNumbers\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"pageSize\" id=\"pageSize\" value=\"20\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    TSCW: {
      type: trackingTypes.formSubmit,
      providerName: "Tropical Shipping",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.tropical.com/track-shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"SearchValue\" id=\"SearchValue\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Type\" id=\"Type\" value=\"job\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    TJFH: {
      type: trackingTypes.formSubmit,
      providerName: "Transfar",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.transfarshipping.com/tracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"blNo\" id=\"blNo\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SMLM: {
      type: trackingTypes.formSubmit,
      providerName: "SM Line",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://esvc.smlines.com/smline/CUP_HOM_3301.do\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"f_cmd\" id=\"f_cmd\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"pagerows\" id=\"pagerows\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"sessLocale\" id=\"sessLocale\" value=\"en\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"ctgId\" id=\"ctgId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"prntMnuId\" id=\"prntMnuId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"mnuId\" id=\"mnuId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"brdSeq\" id=\"brdSeq\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"hpgLangTpCd\" id=\"hpgLangTpCd\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoTpCdParam\" id=\"trakNoTpCdParam\" value=\"B\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"12345678\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"vslEngNmParam\" id=\"vslEngNmParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"vslCdParam\" id=\"vslCdParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"oriLocNmParam\" id=\"oriLocNmParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"modeFlgParam\" id=\"modeFlgParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"cargoTrackingNo\" id=\"cargoTrackingNo\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    PABV: {
      type: trackingTypes.formSubmit,
      providerName: "PIL",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.pilship.com/--/120.html\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"option_tr\" id=\"option_tr\" value=\"bl\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"refnumbers\" id=\"refnumbers\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    SCJU: {
      type: trackingTypes.formSubmit,
      providerName: "SCI",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.shipindia.com/frontcontroller/track_trace1\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"type\" id=\"type\" value=\"BL\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"container_no\" id=\"container_no\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"go\" id=\"go\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    MATS: {
      type: trackingTypes.formSubmit,
      providerName: "Matson",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.matson.com/shipment-tracking.html\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"tracking\" id=\"tracking\" value=\"billNumber\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"billNumber\" id=\"billNumber\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ONEY: {
      type: trackingTypes.formSubmit,
      providerName: "ONE",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    KKCL: {
      type: trackingTypes.formSubmit,
      providerName: "Kambara Kisen",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://esvc.kambara-kisen.co.jp/clt/CUP_HOM_3301.do\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"redir\" id=\"redir\" value=\"Y\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoTpCdParam\" id=\"trakNoTpCdParam\" value=\"B\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"sessLocale\" id=\"sessLocale\" value=\"en\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    LNLU: {
      type: trackingTypes.formSubmit,
      providerName: "Laurel Navigation",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.lnl.com.hk/tracking_shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"id\" id=\"id\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    HDMU: {
      type: trackingTypes.formSubmit,
      providerName: "HMM",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"blNo\" id=\"blNo\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    HLCU: {
      type: trackingTypes.formSubmit,
      providerName: "Hapag-Lloyd",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.hapag-lloyd.com/en/online-business/track/track-by-booking-solution.html\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"blno\" id=\"blno\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    ANLC: {
      type: trackingTypes.formSubmit,
      providerName: "ANL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.anl.com.au/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber.slice(
          4
        )}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    APLU: {
      type: trackingTypes.formSubmit,
      providerName: "APL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber.slice(
          4
        )}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    BANR: {
      type: trackingTypes.formSubmit,
      providerName: "BAL",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"http://lcec.lclog.cn/cargo/NewCargotracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"blno\" id=\"blno\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"selectstate\" id=\"selectstate\" value=\"BLNO\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CLCL: {
      type: trackingTypes.formSubmit,
      providerName: "Camellia Line",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"http://183.111.65.71/clt/CUP_HOM_3301.do\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"sessLocale\" id=\"sessLocale\" value=\"en\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoTpCdParam\" id=\"trakNoTpCdParam\" value=\"B\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CMDU: {
      type: trackingTypes.formSubmit,
      providerName: "CMA CGM",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.apl.com/ebusiness/tracking/search\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"SearchViewModel.Reference\" id=\"SearchViewModel.Reference\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"SearchViewModel.FromHome\" id=\"SearchViewModel.FromHome\" value=\"true\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"SearchViewModel.SearchBy\" id=\"SearchViewModel.SearchBy\" value=\"Container\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"g-recaptcha-response\" id=\"g-recaptcha-response\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    COSU: {
      type: trackingTypes.formSubmit,
      providerName: "COSCO SHIPPING Lines",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://elines.coscoshipping.com/ebusiness/cargoTracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"trackingType\" id=\"trackingType\" value=\"BILLOFLADING\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"number\" id=\"number\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    COEU: {
      type: trackingTypes.formSubmit,
      providerName: "COSCO SHIPPING Lines",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://elines.coscoshipping.com/ebusiness/cargoTracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"trackingType\" id=\"trackingType\" value=\"BILLOFLADING\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"number\" id=\"number\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    CULV: {
      type: trackingTypes.formSubmit,
      providerName: "CULines",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.culines.com/en/site/bill\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"reg\" id=\"reg\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    DJSC: {
      type: trackingTypes.formSubmit,
      providerName: "Dongjin Shipping",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"http://esvc.djship.co.kr/gnoss/CUP_HOM_3301.do\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"f_cmd\" id=\"f_cmd\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"pagerows\" id=\"pagerows\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"sessLocale\" id=\"sessLocale\" value=\"en\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"ctgId\" id=\"ctgId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"prntMnuId\" id=\"prntMnuId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"mnuId\" id=\"mnuId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"brdSeq\" id=\"brdSeq\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"hpgLangTpCd\" id=\"hpgLangTpCd\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoTpCdParam\" id=\"trakNoTpCdParam\" value=\"B\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"DJSC12345678\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"vslEngNmParam\" id=\"vslEngNmParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"vslCdParam\" id=\"vslCdParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"oriLocNmParam\" id=\"oriLocNmParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"modeFlgParam\" id=\"modeFlgParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"cargoTrackingNo\" id=\"cargoTrackingNo\" value=\"${trackingNumber}\t\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    EIMU: {
      type: trackingTypes.formSubmit,
      providerName: "Eimskip",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.eimskip.com/find-shipment/\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"cid\" id=\"cid\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    EPIR: {
      type: trackingTypes.formSubmit,
      providerName: "Emirates Shipping Line",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.emiratesline.com/cargotrracking\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"ctid\" id=\"ctid\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"scode\" id=\"scode\" value=\"tgCQK3v3QbHHzFs6\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    EGLV: {
      type: trackingTypes.formSubmit,
      providerName: "Evergreen",
      getTrackingInfo: async (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"BL\" id=\"BL\" value=\"12345678\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"CNTR\" id=\"CNTR\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"chgSearch\" id=\"chgSearch\" value=\"Cargo\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"TYPE\" id=\"TYPE\" value=\"BL\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"CargoNO\" id=\"CargoNO\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Area_vessel\" id=\"Area_vessel\" value=\"Area\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"view\" id=\"view\" value=\"2\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"email\" id=\"email\" value=\"Email+address\" autocomplete=\"off\">\n</form>`

        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    WHLU: {
      type: trackingTypes.manual,
      providerName: "Wan Hai Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml"
        )
      },
    },
    WHLC: {
      type: trackingTypes.manual,
      providerName: "Wan Hai Lines",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml"
        )
      },
    },
  },
  awb: {
    "390-": {
      type: trackingTypes.formSubmit,
      providerName: "Aegean Airlines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://en.about.aegeanair.com/sys/System/CargoTrack" method="get" target="_blank"><input name="prefix" type="hidden" value="390"><input name="number" type="hidden" value=${trackingNumber.slice(
          4
        )}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "543-": {
      type: trackingTypes.pathParam,
      providerName: "Aercaribe Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "044-": {
      type: trackingTypes.formSubmit,
      providerName: "Aerolineas Argentinas",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://aerolineas.smartkargo.com/FrmAWBTracking.aspx" method="get" target="_blank"><input name="AWBPrefix" type="hidden" value="044"><input name="AWBNo" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "976-": {
      type: trackingTypes.formSubmit,
      providerName: "Aeroméxico Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://amcargo.aeromexico.com/en/rastrear" method="post" target="_blank"><input name="tracking" type="hidden" value="true"><input name="prefix" type="hidden" value="976"><input name="number" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "139-": {
      type: trackingTypes.formSubmit,
      providerName: "Aeroméxico Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://amcargo.aeromexico.com/en/rastrear" method="post" target="_blank"><input name="tracking" type="hidden" value="true"><input name="prefix" type="hidden" value="976"><input name="number" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "873-": {
      type: trackingTypes.formSubmit,
      providerName: "AeroUnion",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://aerounion-icargo.ibsplc.aero/icargoauportal/portal/trackshipments?" method="get" target="_blank"><input name="" type="hidden"><input name="trkTxnValue" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "057-": {
      type: trackingTypes.pathParam,
      providerName: "AF-KL-MP Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.afklcargo.com/mycargo/shipment/detail/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "074-": {
      type: trackingTypes.pathParam,
      providerName: "AF-KL-MP Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.afklcargo.com/mycargo/shipment/detail/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "124-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Algerie",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" target="_blank"><input name="Carrier" type="hidden" value="AH"><input name="Shipment_text" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "843-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Asia",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://airasia.smartkargo.com/FrmAWBTracking.aspx" method="get" target="_blank"><input name="AWBPrefix" type="hidden" value="843"><input name="AWBNo" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "807-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Asia",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://airasia.smartkargo.com/FrmAWBTracking.aspx" method="get" target="_blank"><input name="AWBPrefix" type="hidden" value="843"><input name="AWBNo" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "975-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Asia",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://airasia.smartkargo.com/FrmAWBTracking.aspx" method="get" target="_blank"><input name="AWBPrefix" type="hidden" value="843"><input name="AWBNo" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "940-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Asia",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://airasia.smartkargo.com/FrmAWBTracking.aspx" method="get" target="_blank"><input name="AWBPrefix" type="hidden" value="843"><input name="AWBNo" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "900-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Asia",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://airasia.smartkargo.com/FrmAWBTracking.aspx" method="get" target="_blank"><input name="AWBPrefix" type="hidden" value="843"><input name="AWBNo" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "457-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Asia",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://airasia.smartkargo.com/FrmAWBTracking.aspx" method="get" target="_blank"><input name="AWBPrefix" type="hidden" value="843"><input name="AWBNo" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "091-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Asia",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://airasia.smartkargo.com/FrmAWBTracking.aspx" method="get" target="_blank"><input name="AWBPrefix" type="hidden" value="843"><input name="AWBNo" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "465-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Astana",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.freight.aero/tracking.asp" method="post" target="frame-820"><input name="carrier_dropdown_1" type="hidden" value="KC-465"><input name="prefix_1" type="hidden" value="465"><input name="awb_1" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "657-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Baltic",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.freight.aero/tracking.asp" method="post" target="frame-820"><input name="carrier_dropdown_1" type="hidden" value="KC-465"><input name="prefix_1" type="hidden" value="465"><input name="awb_1" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "142-": {
      type: trackingTypes.pathParam,
      providerName: "Air Belgium",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "636-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Botswana",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" target="_blank"><input name="Carrier" type="hidden" value="BP"><input name="Shipment_text" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "014-": {
      type: trackingTypes.manual,
      providerName: "Air Canada Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.aircanada.com/cargo/tracking")
      },
    },
    "856-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Changan",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hnacargo.com/Portal2/AwbSearch.aspx" method="post" target="_blank"><input name="hdAwbCode" type="hidden" value=${trackingNumber}><input name="hdVerifyCode" type="hidden"></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "999-": {
      type: trackingTypes.formSubmit,
      providerName: "Air China",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.airchinacargo.com/cargo_en/gzcx/hkyd/list/index_pc.html" method="get" target="_blank"><input name="waybillPrefix" type="hidden" value="999"><input name="waybillContent" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "510-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Class",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.freight.aero/tracking.asp" method="get" target="frame-840"><input name="carrier_dropdown_1" type="hidden" value="VZ-510"><input name="prefix_1" type="hidden" value="510"><input name="awb_1" type="hidden" value=${trackingNumber}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "146-": {
      type: trackingTypes.pathParam,
      providerName: "Air Corsica",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.wfs.aero/tracking-page/?trackingID=146-${trackingNumber}#tracking`,
          "_blank"
        )
      },
    },
    "996-": {
      type: trackingTypes.pathParam,
      providerName: "Air Europa",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.aireuropacargo.com/index.asp?prefix=996&Serial=${trackingNumber}`,
          "_blank"
        )
      },
    },
    "730-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Guilin(GT)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.hnacargo.com/Portal2/AwbSearch.aspx\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"hdAwbCode\" id=\"hdAwbCode\" value=\"${trackingNumber},\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"hdVerifyCode\" id=\"hdVerifyCode\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "288-": {
      type: trackingTypes.pathParam,
      providerName: "Air Hong Kong(LD)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.cathaycargo.com/ManageYourShipment/TrackYourShipment/tabid/108/SingleAWBNo/${trackingNumber}/language/en-US/Default.aspx`,
          "_blank"
        )
      },
    },
    "098-": {
      type: trackingTypes.formSubmit,
      providerName: "Air India(AI)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargotracking.airindia.in/cargo-tracking.aspx" method="post" target="_blank"><input name="txtairlinecode" type="hidden" value="098"><input name="txtairwaybillno" type="hidden" value=${trackingNumber.slice(
          4
        )}><input name="acde" type="hidden" value="098"><input name="pno" type="hidden" value=${trackingNumber.slice(
          4
        )}></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "466-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Inuit(3H)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.airinuit.com/en/cargo/follow-up/shipment-tracking/your-shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"id\" id=\"id\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "675-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Macau Cargo(NX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.infoccsp.com/iportal/servicecenter/cargotracking.aspx\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"ID\" id=\"ID\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "258-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Madagascar(MD)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://md.margo.aero/MargoAWB/awb/tracking/mainPage?locale=en\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"issuingAirline\" id=\"issuingAirline\" value=\"258\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"airwaybillNo\" id=\"airwaybillNo\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "643-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Malta Cargo(KM)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://ebooking.champ.aero/trace/trace.asp\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"Carrier\" id=\"Carrier\" value=\"KM\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Shipment_text\" id=\"Shipment_text\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "239-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Mauritius(MK)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.freight.aero/tracking.asp\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"Carrier\" id=\"Carrier\" value=\"MK\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Pfx\" id=\"Pfx\" value=\"239\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Shipment\" id=\"Shipment\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Site\" id=\"Site\" value=\"CargoWeb\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Portlet\" id=\"Portlet\" value=\"yes\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"userID\" id=\"userID\" value=\"89df17cc1f9d\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "572-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Moldova(9U)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.airmoldova.md/cargo-check-en/\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"prefix\" id=\"prefix\" value=\"572\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"number\" id=\"number\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "086-": {
      type: trackingTypes.formSubmit,
      providerName: "Air New Zealand(NZ)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://parse.track-trace.com/" method="post" target="frame-194"><input name="p_action" type="hidden" value="https%3A%2F%2Fwww.airnewzealandcargo.com%2Ffeeds%2Fcargo-status"><input name="p_method" type="hidden" value="get"><input name="p_input" type="hidden" value="awb%3D086-${trackingNumber.slice(
          4
        )}"><input name="p_parser" type="hidden" value="airnewzealand¤https://www.airnewzealandcargo.com/cargo-track-and-trace"><input name="p_token" type="hidden" value="3ff7a36fe12dfac48762c89b31db7c36de5005399204db17bb45e961791370bb"></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "656-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Niugini(PX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://prdcgopx.mercator.com/skychain/app" method="post" target="_blank"><input name="service" type="hidden" value="direct/1/nwp:Trackshipmt/trackForm"><input name="sp" type="hidden" value="S1"><input name="Form1" type="hidden" value="selectDoctype,txtPrefix,txtNumber,txtJrn,txtAWBPrefix,txtAWBNumber,txtAWBPrefix$0,txtAWBNumber$0,txtAWBPrefix$1,txtAWBNumber$1,txtAWBPrefix$2,txtAWBNumber$2,txtAWBPrefix$3,txtAWBNumber$3,txtAWBPrefix$4,txtAWBNumber$4,txtAWBPrefix$5,txtAWBNumber$5,txtAWBPrefix$6,txtAWBNumber$6,txtAWBPrefix$7,txtAWBNumber$7,$JSubmit,$JSubmit$0,$JSubmit$1,$JSubmit$2,$FormConditional,$FormConditional$0,pageSize,listSize,advSearch,trackViewHdn"><input name="trackForm_hdnLastPermissionCheck" type="hidden" value="Y"><input name="trackForm_hdnLastPermissionCode" type="hidden"><input name="hdnFormID" type="hidden" value="trackForm"><input name="excludeServerValidation" type="hidden" value="true"><input name="$FormConditional" type="hidden" value="F"><input name="$FormConditional$0" type="hidden" value="F"><input name="pageSize" type="hidden" value="10"><input name="listSize" type="hidden" value="0"><input name="advSearch" type="hidden" value="F"><input name="trackViewHdn" type="hidden" value="tableRadio"><input name="selectDoctype" type="hidden" value="AWB"><input name="txtPrefix" type="hidden" value="656"><input name="txtNumber" type="hidden" value="${trackingNumber.slice(
          0
        )}"><input name="txtJrn" type="hidden"><input name="txtAWBPrefix" type="hidden" value="105"><input name="txtAWBNumber" type="hidden"><input name="txtAWBPrefix$0" type="hidden" value="105"><input name="txtAWBNumber$0" type="hidden"><input name="txtAWBPrefix$1" type="hidden" value="105"><input name="txtAWBNumber$1" type="hidden"><input name="txtAWBPrefix$2" type="hidden" value="105"><input name="txtAWBNumber$2" type="hidden"><input name="txtAWBPrefix$3" type="hidden" value="105"><input name="txtAWBNumber$3" type="hidden"><input name="txtAWBPrefix$4" type="hidden" value="105"><input name="txtAWBNumber$4" type="hidden"><input name="txtAWBPrefix$5" type="hidden" value="105"><input name="txtAWBNumber$5" type="hidden"><input name="txtAWBPrefix$6" type="hidden" value="105"><input name="txtAWBNumber$6" type="hidden"><input name="txtAWBPrefix$7" type="hidden" value="105"><input name="txtAWBNumber$7" type="hidden"><input name="trackView" type="hidden" value="tableRadio"><input name="$JSubmit$0" type="hidden" value="Track"></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "350-": {
      type: trackingTypes.pathParam,
      providerName: "Air Premia(YP)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "490-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Senegal(HC)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://airsenegal.smartkargo.com/FrmAWBTracking.aspx\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"__EVENTTARGET\" id=\"__EVENTTARGET\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"__EVENTARGUMENT\" id=\"__EVENTARGUMENT\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"__VIEWSTATE\" id=\"__VIEWSTATE\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"txtPrefix\" id=\"txtPrefix\" value=\"490\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"TextBoxAWBno\" id=\"TextBoxAWBno\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"ButtonGO\" id=\"ButtonGO\" value=\"Track\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "115-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Serbia(JU)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://ebooking.champ.aero/trace/trace.asp\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"Carrier\" id=\"Carrier\" value=\"JU\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Shipment_text\" id=\"Shipment_text\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "061-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Seychelles(HM)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.airseychelles.com/portals/cargotracker/\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"action\" id=\"action\" value=\"track\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"awb\" id=\"awb\" value=\"${trackingNumber.replace(
          "-",
          ""
        )}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"UCCargoTracker1:btnTrace\" id=\"UCCargoTracker1:btnTrace\" value=\"Track\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "244-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Tahiti Nui(TN)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://us.airtahitinui.com/tracking-results\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"awbs\" id=\"awbs\" value=\"${trackingNumber.replace(
          "-",
          ""
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "197-": {
      type: trackingTypes.formSubmit,
      providerName: "Air Tanzania(TC)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://cargocustomerportal.swissport.com/AgentAwbTracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"awb\" id=\"awb\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "649-": {
      type: trackingTypes.pathParam,
      providerName: "Air Transat(TS)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "027-": {
      type: trackingTypes.pathParam,
      providerName: "Alaska Air Cargo(AS)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://alaska-icargo.ibsplc.aero/icargoportal/portal/trackshipments?&trkTxnValue=${trackingNumber}`,
          "_blank"
        )
      },
    },
    "574-": {
      type: trackingTypes.formSubmit,
      providerName: "AlliedAir(4W)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://network-airline.com/track-and-trace/\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"consignment-number\" id=\"consignment-number\" value=\"${trackingNumber.replace(
          "-",
          ""
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "687-": {
      type: trackingTypes.formSubmit,
      providerName: "Aloha Air Cargo(KH)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.alohaaircargo.com/wp-content/themes/avantage-aac/awb.php\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"s\" id=\"s\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"airwaybillnumber\" id=\"airwaybillnumber\" value=\"${trackingNumber.replace(
          "-",
          ""
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "001-": {
      type: trackingTypes.formSubmit,
      providerName: "American Airlines(AA)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.aacargo.com/mobile/tracking-details.html\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"awb\" id=\"awb\" value=\"${trackingNumber?.replace(
          "-",
          ""
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "810-": {
      type: trackingTypes.formSubmit,
      providerName: "Amerijet International(M6)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://mycargo.amerijet.com/View_AirTrackDetails\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"tracking_number\" id=\"tracking_number\" value=\"${trackingNumber.replace(
          "-",
          ""
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "485-": {
      type: trackingTypes.pathParam,
      providerName: "Astral Aviation(8V)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://astral.fr8booking.com/#/trackAndTrace?awbno=${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "474-": {
      type: trackingTypes.formSubmit,
      providerName: "Atlantis Cargo(NT)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://tracking.atlantiscargo.es/User/TrackView\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"AWB1\" id=\"AWB1\" value=\"474\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"AWB\" id=\"AWB\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "369-": {
      type: trackingTypes.formSubmit,
      providerName: "Atlas Air(5Y)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://jumpseat.atlasair.com/aa/tracktracehtml/TrackTrace.html\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"pe\" id=\"pe\" value=\"369\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"se\" id=\"se\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "202-": {
      type: trackingTypes.formSubmit,
      providerName: "Avianca Cargo(AV)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://avianca-icargo.ibsplc.aero/icargoportal/portal/trackshipments\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" id=\"\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trkTxnValue\" id=\"trkTxnValue\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "729-": {
      type: trackingTypes.formSubmit,
      providerName: "Avianca Cargo(AV)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://avianca-icargo.ibsplc.aero/icargoportal/portal/trackshipments\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" id=\"\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trkTxnValue\" id=\"trkTxnValue\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "133-": {
      type: trackingTypes.formSubmit,
      providerName: "Avianca Cargo(AV)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://avianca-icargo.ibsplc.aero/icargoportal/portal/trackshipments\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" id=\"\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trkTxnValue\" id=\"trkTxnValue\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "134-": {
      type: trackingTypes.formSubmit,
      providerName: "Avianca Cargo(AV)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://avianca-icargo.ibsplc.aero/icargoportal/portal/trackshipments\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" id=\"\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trkTxnValue\" id=\"trkTxnValue\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "577-": {
      type: trackingTypes.formSubmit,
      providerName: "Azul Cargo(AD)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://azulcargoexpress.smartkargo.com/FrmAWBTracking.aspx\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"AWBPrefix\" id=\"AWBPrefix\" value=\"577\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"AWBno\" id=\"AWBno\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "829-": {
      type: trackingTypes.formSubmit,
      providerName: "Bangkok Airways(PG)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://pg-icargo.ibsplc.aero/icargoportal/portal/trackshipments\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"trkTxnValue\" id=\"trkTxnValue\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "628-": {
      type: trackingTypes.formSubmit,
      providerName: "Belavia(B2)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form"  action=\"https://en.belavia.by/carriage_of_cargo/tracking/\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"siteid\" id=\"siteid\" value=\"12467\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"p_ac\" id=\"p_ac\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "161-": {
      type: trackingTypes.formSubmit,
      providerName: "Belavia(B2)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://bidaircargo.co.za/tracking/\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"subject\" id=\"subject\" value=\"${trackingNumber.replace(
          "-",
          ""
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "997-": {
      type: trackingTypes.formSubmit,
      providerName: "Biman Bangladesh(BG)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://ebooking.champ.aero/trace/trace.asp\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"Carrier\" id=\"Carrier\" value=\"BG\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Shipment_text\" id=\"Shipment_text\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "417-": {
      type: trackingTypes.formSubmit,
      providerName: "Bringer Air Cargo(E6)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://trackwaybill.com/tracking/\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"prefix\" id=\"prefix\" value=\"417\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"number\" id=\"number\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "245-": {
      type: trackingTypes.formSubmit,
      providerName: "Canadian North",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form"   action=\"https://canadiannorth.com/cargo/track-and-trace#track-and-trace\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"awb\" id=\"awb\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"skipcaptcha\" id=\"skipcaptcha\" value=\"yes\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "518-": {
      type: trackingTypes.formSubmit,
      providerName: "Canadian North",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form"  action=\"https://canadiannorth.com/cargo/track-and-trace#track-and-trace\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"awb\" id=\"awb\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"skipcaptcha\" id=\"skipcaptcha\" value=\"yes\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "898-": {
      type: trackingTypes.formSubmit,
      providerName: "Capital Airlines(JD)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://www.hnacargo.com/Portal2/AwbSearch.aspx\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"hdAwbCode\" id=\"hdAwbCode\" value=\"${trackingNumber},\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"hdVerifyCode\" id=\"hdVerifyCode\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "356-": {
      type: trackingTypes.formSubmit,
      providerName: "Cargolux Italia(C8)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://cvtnt.champ.aero/trackntrace\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"awbnumber\" id=\"awbnumber\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "172-": {
      type: trackingTypes.formSubmit,
      providerName: "Cargolux(CV)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://cvtnt.champ.aero/trackntrace\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"awbnumber\" id=\"awbnumber\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "106-": {
      type: trackingTypes.formSubmit,
      providerName: "Caribbean Airlines(BW)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action=\"https://ebooking.champ.aero/trace/trace.asp\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"Carrier\" id=\"Carrier\" value=\"BW\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Shipment_text\" id=\"Shipment_text\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "160-": {
      type: trackingTypes.pathParam,
      providerName: "Cathay Cargo(CX)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.cathaycargo.com/ManageYourShipment/TrackYourShipment/tabid/108/SingleAWBNo/${trackingNumber}/language/en-US/Default.aspx`,
          "_blank"
        )
      },
    },
    "378-": {
      type: trackingTypes.formSubmit,
      providerName: "Cayman Airways(KX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form"  action=\"https://caymancargo.cargovision.ca//Tracking.aspx\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"cco\" id=\"cco\" value=\"378\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"awb\" id=\"awb\" value=\"${trackingNumber.slice(
          4
        )}\" autocomplete=\"off\">\n</form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement
          form && form.submit()
        }
      },
    },
    "105-": {
      type: trackingTypes.pathParam,
      providerName: "Finnair Cargo(AY)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://cargo.finnair.com/api/offerandorder/#/shipments/list?type=D&values=${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "112-": {
      type: trackingTypes.pathParam,
      providerName: "China Cargo Airlines(CK)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.eal-ceair.com/cargo-tracking.html?waybillNum=${trackingNumber}`,
          "_blank"
        )
      },
    },
    "114-": {
      type: trackingTypes.pathParam,
      providerName: "El Al Israel Airlines(LY)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.elalextra.net/info/awb.asp?aid=114&awb=${trackingNumber.slice(
            4
          )}`,
          "_blank"
        )
      },
    },
    "128-": {
      type: trackingTypes.pathParam,
      providerName: "HK Express(UO)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.cathaycargo.com/ManageYourShipment/TrackYourShipment/tabid/108/SingleAWBNo/${trackingNumber}/language/en-US/Default.aspx`,
          "_blank"
        )
      },
    },
    "130-": {
      type: trackingTypes.pathParam,
      providerName: "FLYONE(5F)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "144-": {
      type: trackingTypes.pathParam,
      providerName: "DHL Aviation(ES/QY/L3/7T/D0)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://aviationcargo.dhl.com/track/${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "155-": {
      type: trackingTypes.pathParam,
      providerName: "DHL Aviation(ES/QY/L3/7T/D0)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://aviationcargo.dhl.com/track/${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "176-": {
      type: trackingTypes.pathParam,
      providerName: "Emirates(EK)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://eskycargo.emirates.com/app/offerandorder/#/shipments/list?type=D&values=${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "199-": {
      type: trackingTypes.pathParam,
      providerName: "Tunisair Cargo(TU)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://prdcgotu.mercator.com/skychain/app?PID=WEB01-10&doc_typ=AWB&awb_pre=199&awb_no=${trackingNumber.slice(
            4
          )}`,
          "_blank"
        )
      },
    },
    "301-": {
      type: trackingTypes.pathParam,
      providerName: "Global Air(5S)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://qlatracking.awery.aero/frame#${trackingNumber}`,
          "_blank"
        )
      },
    },
    "345-": {
      type: trackingTypes.pathParam,
      providerName: "Northern Air Cargo(NC)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://tracking.stratair.net/Tools/Tracking.aspx?awb=${trackingNumber}`,
          "_blank"
        )
      },
    },
    "501-": {
      type: trackingTypes.pathParam,
      providerName: "Silk Way West Airlines(7L)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://sww.enxt.solutions/enxt/iframe/track-and-trace/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "506-": {
      type: trackingTypes.pathParam,
      providerName: "Norse Cargo(N0)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://norsetracking.awery.com/#${trackingNumber}`,
          "_blank"
        )
      },
    },
    "514-": {
      type: trackingTypes.pathParam,
      providerName: "Air Arabia(G9/3L/E5)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://cargomgmt.airarabia.com/Tracking/AWB/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "539-": {
      type: trackingTypes.pathParam,
      providerName: "Raya Airways(TH)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://cargo.rayaairways.com/Tracking/AWB/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "576-": {
      type: trackingTypes.pathParam,
      providerName: "Sky Lease Cargo(GG)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://skylease.cargolink.aero/tracking/index.asp?awbno=${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "612-": {
      type: trackingTypes.pathParam,
      providerName: "TUI(TB)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "615-": {
      type: trackingTypes.pathParam,
      providerName: "DHL Aviation(ES/QY/L3/7T/D0)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://aviationcargo.dhl.com/track/${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "630-": {
      type: trackingTypes.pathParam,
      providerName: "Sunclass Airlines(DK)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },

    "783-": {
      type: trackingTypes.pathParam,
      providerName: "Iberojet(E9)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://www.aireuropacargo.com/index.asp?prefix=783&Serial=${trackingNumber.slice(
            4
          )}`,
          "_blank"
        )
      },
    },
    "840-": {
      type: trackingTypes.pathParam,
      providerName: "Everts Air(5V)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://apps1.tflite.com/Public/EVT/Freight/Tracking/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "844-": {
      type: trackingTypes.pathParam,
      providerName: "Air Arabia(G9/3L/E5)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://cargomgmt.airarabia.com/Tracking/AWB/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "881-": {
      type: trackingTypes.pathParam,
      providerName: "Condor(DE)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "923-": {
      type: trackingTypes.pathParam,
      providerName: "Corsair(SS)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "932-": {
      type: trackingTypes.pathParam,
      providerName: "Virgin Atlantic(VS)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://myvs.virginatlanticcargo.com/app/offerandorder/#/shipments/list?type=D&values=${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "936-": {
      type: trackingTypes.pathParam,
      providerName: "DHL Aviation(ES/QY/L3/7T/D0)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://aviationcargo.dhl.com/track/${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "947-": {
      type: trackingTypes.pathParam,
      providerName: "DHL Aviation(ES/QY/L3/7T/D0)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://aviationcargo.dhl.com/track/${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "992-": {
      type: trackingTypes.pathParam,
      providerName: "DHL Aviation(ES/QY/L3/7T/D0)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://aviationcargo.dhl.com/track/${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },

    "049-": {
      type: trackingTypes.pathParam,
      providerName: "Air Arabia(G9/3L/E5)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://cargomgmt.airarabia.com/Tracking/AWB/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "003-": {
      type: trackingTypes.pathParam,
      providerName: "CMA CGM AIR CARGO(2C)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://pathfinder.digitalfactory.aero/${trackingNumber}`,
          "_blank"
        )
      },
    },
    "006-": {
      type: trackingTypes.pathParam,
      providerName: "Delta Cargo(DL)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.deltacargo.com/Cargo/#/trackShipment?awbNumber=${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "018-": {
      type: trackingTypes.pathParam,
      providerName: "Juneyao Airlines(HO)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `http://cargo.juneyaoair.com/NewWeb/NQueryFrameAwben.aspx?Billid=${trackingNumber.replace(
            "-",
            ""
          )}`,
          "_blank"
        )
      },
    },
    "002-": {
      type: trackingTypes.pathParam,
      providerName: "La Compagnie(B0)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.wfs.aero/tracking-page/?trackingID=${trackingNumber}#tracking`,
          "_blank"
        )
      },
    },
    "020-": {
      type: trackingTypes.pathParam,
      providerName: "Lufthansa Cargo(LH)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.lufthansa-cargo.com/eservices/etracking/awb-details/-/awb/020/${trackingNumber.slice(
            4
          )}?searchFilter=awb`,
          "_blank"
        )
      },
    },
    "016-": {
      type: trackingTypes.pathParam,
      providerName: "United Cargo(UA)",
      getTrackingInfo: (trackingNumber: string) => {
        window.open(
          `https://www.unitedcargo.com/en/us/track/awb/${trackingNumber}`,
          "_blank"
        )
      },
    },

    /* ***************************************  end  // the copied from function pathParam scrape   //          ******************************************************/

    /* ***************************************  strart  // the copied from function formData scrape   //          ******************************************************/

    "108-": {
      type: trackingTypes.formSubmit,
      providerName: "Icelandair(FI)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.icelandaircargo.is/en/services/track-and-trace/" method="get" name="trackform" target="_top"> <input type="hidden" name="trackingNumber" id="trackingNumber" value="${trackingNumber.slice(
          4
        )}" autocomplete="off"> <input type="hidden" name="prefix" id="prefix" value="108" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "117-": {
      type: trackingTypes.formSubmit,
      providerName: "SAS Cargo(SK)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.sascargo.com/shippingdetails.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="source" id="source" value="sitecore" autocomplete="off"> <input type="hidden" name="prefix" id="prefix" value="117" autocomplete="off"> <input type="hidden" name="awb" id="awb" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="url" id="url" value="http://www.sascargo.com/" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "118-": {
      type: trackingTypes.formSubmit,
      providerName: "TAAG Angola Airlines(DT)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="DT" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value="${trackingNumber}" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "123-": {
      type: trackingTypes.formSubmit,
      providerName: "Nauru Airlines(ON)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://nauruair.margo.aero/MargoAWB/awb/tracking/mainPage?locale=en" method="post" name="trackform" target="_top"> <input type="hidden" name="issuingAirline" id="issuingAirline" value="123" autocomplete="off"> <input type="hidden" name="airwaybillNo" id="airwaybillNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "125-": {
      type: trackingTypes.formSubmit,
      providerName: "IAG Cargo(IB/BA/EI)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.iagcargo.com/iagcargo/portlet/en/html/601/main/search" method="get" name="trackform" target="_top"> <input type="hidden" name="awb.cia" id="awb.cia" value="125" autocomplete="off"> <input type="hidden" name="awb.cod" id="awb.cod" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "126-": {
      type: trackingTypes.formSubmit,
      providerName: "Garuda Indonesia(GA)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://icms.garuda-indonesia.com/HtmlFiles/AWBTracking/AWBTracking.html" method="get" name="trackform" target="_top"> <input type="hidden" name="BasedOn" id="BasedOn" value="0" autocomplete="off"> <input type="hidden" name="CarrierCode" id="CarrierCode" value="126" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "131-": {
      type: trackingTypes.formSubmit,
      providerName: "Japan Airlines(JL)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.cargoweb.jal.co.jp/JalCargoWeb/en/intlTracingResult.do" method="post" name="trackform" target="_top"> <input type="hidden" name="searchType" id="searchType" value="00" autocomplete="off"> <input type="hidden" name="awbNoPrefix1" id="awbNoPrefix1" value="131" autocomplete="off"> <input type="hidden" name="awbNoSuffix1" id="awbNoSuffix1" value=${trackingNumber} autocomplete="off"> <input type="hidden" name="houseNo" id="houseNo" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "141-": {
      type: trackingTypes.formSubmit,
      providerName: "flydubai Cargo(FZ)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://prdcgofz.mercator.com/skychain/app" method="post" name="trackform" target="_top"> <input type="hidden" name="service" id="service" value="direct/1/nwp:Trackshipmt/trackForm" autocomplete="off"> <input type="hidden" name="sp" id="sp" value="S1" autocomplete="off"> <input type="hidden" name="Form1" id="Form1" value="selectDoctype,txtPrefix,txtNumber,txtJrn,txtAWBPrefix,txtAWBNumber,txtAWBPrefix$0,txtAWBNumber$0,txtAWBPrefix$1,txtAWBNumber$1,txtAWBPrefix$2,txtAWBNumber$2,txtAWBPrefix$3,txtAWBNumber$3,txtAWBPrefix$4,txtAWBNumber$4,txtAWBPrefix$5,txtAWBNumber$5,txtAWBPrefix$6,txtAWBNumber$6,txtAWBPrefix$7,txtAWBNumber$7,$JSubmit,$JSubmit$0,$JSubmit$1,$JSubmit$2,$FormConditional,$FormConditional$0,pageSize,listSize,advSearch,trackViewHdn" autocomplete="off"> <input type="hidden" name="trackForm_hdnLastPermissionCheck" id="trackForm_hdnLastPermissionCheck" value="Y" autocomplete="off"> <input type="hidden" name="trackForm_hdnLastPermissionCode" id="trackForm_hdnLastPermissionCode" autocomplete="off"> <input type="hidden" name="hdnFormID" id="hdnFormID" value="trackForm" autocomplete="off"> <input type="hidden" name="excludeServerValidation" id="excludeServerValidation" value="true" autocomplete="off"> <input type="hidden" name="$FormConditional" id="_FormConditional" value="F" autocomplete="off"> <input type="hidden" name="$FormConditional$0" id="_FormConditional_0" value="F" autocomplete="off"> <input type="hidden" name="pageSize" id="pageSize" value="10" autocomplete="off"> <input type="hidden" name="listSize" id="listSize" value="0" autocomplete="off"> <input type="hidden" name="advSearch" id="advSearch" value="F" autocomplete="off"> <input type="hidden" name="trackViewHdn" id="trackViewHdn" value="tableRadio" autocomplete="off"> <input type="hidden" name="selectDoctype" id="selectDoctype" value="AWB" autocomplete="off"> <input type="hidden" name="txtPrefix" id="txtPrefix" value="141" autocomplete="off"> <input type="hidden" name="txtNumber" id="txtNumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="txtJrn" id="txtJrn" autocomplete="off"> <input type="hidden" name="txtAWBPrefix" id="txtAWBPrefix" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber" id="txtAWBNumber" autocomplete="off"> <input type="hidden" name="txtAWBPrefix$0" id="txtAWBPrefix_0" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber$0" id="txtAWBNumber_0" autocomplete="off"> <input type="hidden" name="txtAWBPrefix$1" id="txtAWBPrefix_1" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber$1" id="txtAWBNumber_1" autocomplete="off"> <input type="hidden" name="txtAWBPrefix$2" id="txtAWBPrefix_2" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber$2" id="txtAWBNumber_2" autocomplete="off"> <input type="hidden" name="txtAWBPrefix$3" id="txtAWBPrefix_3" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber$3" id="txtAWBNumber_3" autocomplete="off"> <input type="hidden" name="txtAWBPrefix$4" id="txtAWBPrefix_4" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber$4" id="txtAWBNumber_4" autocomplete="off"> <input type="hidden" name="txtAWBPrefix$5" id="txtAWBPrefix_5" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber$5" id="txtAWBNumber_5" autocomplete="off"> <input type="hidden" name="txtAWBPrefix$6" id="txtAWBPrefix_6" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber$6" id="txtAWBNumber_6" autocomplete="off"> <input type="hidden" name="txtAWBPrefix$7" id="txtAWBPrefix_7" value="141" autocomplete="off"> <input type="hidden" name="txtAWBNumber$7" id="txtAWBNumber_7" autocomplete="off"> <input type="hidden" name="trackView" id="trackView" value="tableRadio" autocomplete="off"> <input type="hidden" name="$JSubmit$0" id="_JSubmit_0" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "145-": {
      type: trackingTypes.formSubmit,
      providerName: "LATAM Cargo(LA/L7/JJ/M3/UC)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.latamcargo.com/en/trackshipment" method="get" name="trackform" target="_top"> <input type="hidden" name="docNumber" id="docNumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="docPrefix" id="docPrefix" value="145" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "147-": {
      type: trackingTypes.formSubmit,
      providerName: "Royal Air Maroc(AT)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="AT" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "149-": {
      type: trackingTypes.formSubmit,
      providerName: "LuxairCARGO(LG)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://webtrack.luxaircargo.lu/details" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="149" autocomplete="off"> <input type="hidden" name="AWBNr" id="AWBNr" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "154-": {
      type: trackingTypes.formSubmit,
      providerName: "Trust Forwarding",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://gfx.gln.com/tru-cph/ShipmentDetailPublic.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="OrgId" id="OrgId" value="306928859" autocomplete="off"> <input type="hidden" name="AWN" id="AWN" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "157-": {
      type: trackingTypes.formSubmit,
      providerName: "Qatar Airways(QR)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.qrcargo.com/s/track-your-shipment" method="get" name="trackform" target="_top"> <input type="hidden" name="documentType" id="documentType" value="MAWB" autocomplete="off"> <input type="hidden" name="documentPrefix" id="documentPrefix" value="157" autocomplete="off"> <input type="hidden" name="documentNumber" id="documentNumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "173-": {
      type: trackingTypes.formSubmit,
      providerName: "Hawaiian Airlines(HA)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://hawaiian.smartkargo.com/FrmAWBTracking.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" autocomplete="off"> <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" autocomplete="off"> <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" autocomplete="off"> <input type="hidden" name="txtPrefix" id="txtPrefix" value="173" autocomplete="off"> <input type="hidden" name="TextBoxAWBno" id="TextBoxAWBno" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="ButtonGO" id="ButtonGO" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "174-": {
      type: trackingTypes.formSubmit,
      providerName: "LAS Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://lascargo.com/wp-content/themes/dt-the7/tracking/tracking.php" method="post" name="trackform" target="_top"> <input type="hidden" name="prefix" id="prefix" value="174" autocomplete="off"> <input type="hidden" name="number" id="number" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "175-": {
      type: trackingTypes.formSubmit,
      providerName: "IBC Airways(II)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http: //transtrackingsetup.magaya.net/AppServerSource/GetTransactionByNumber.ashx" method="post" name="trackform" target="_top"> <input type="hidden" name="NetworkId" id="NetworkId" value="14534" autocomplete="off"> <input type="hidden" name=type id=type value="SHS" autocomplete="off"> <input type="hidden" name="Number" id="Number" value=${trackingNumber} autocomplete="off"> <input type="hidden" name="Username" id="Username" value="null" autocomplete="off"> <input type="hidden" name="Password" id="Password" value="null" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "189-": {
      type: trackingTypes.formSubmit,
      providerName: "STARLUX(JX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://jx-icargo.ibsplc.aero/icargoportal/portal/trackshipments" method="get" name="trackform" target="_top"> <input type="hidden" name="trkTxnValue" id="trkTxnValue" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "203-": {
      type: trackingTypes.formSubmit,
      providerName: "Cebu Pacific Air(5J)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cebu.smartkargo.com/FrmAWBTracking.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" autocomplete="off"> <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" autocomplete="off"> <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" autocomplete="off"> <input type="hidden" name="txtPrefix" id="txtPrefix" value="203" autocomplete="off"> <input type="hidden" name="TextBoxAWBno" id="TextBoxAWBno" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="ButtonGO" id="ButtonGO" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "214-": {
      type: trackingTypes.formSubmit,
      providerName: "Pakistan International(PK)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="PK" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "217-": {
      type: trackingTypes.formSubmit,
      providerName: "Thai Cargo(TG)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://chorus.thaicargo.com/skychain/app" method="get" name="trackform" target="_top"> <input type="hidden" name="PID" id="PID" value="WEB01-10" autocomplete="off"> <input type="hidden" name="doc_typ" id="doc_typ" value="AWB" autocomplete="off"> <input type="hidden" name="awb_pre" id="awb_pre" value="217" autocomplete="off"> <input type="hidden" name="awb_no" id="awb_no" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "228-": {
      type: trackingTypes.formSubmit,
      providerName: "Vistara(UK)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ukcargo.airvistara.com/FrmAWBTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="228" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "229-": {
      type: trackingTypes.formSubmit,
      providerName: "Kuwait Airways(KU)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="KU" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "230-": {
      type: trackingTypes.formSubmit,
      providerName: "COPA(CM)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://copa.smartkargo.com/FrmAWBTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="230" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "232-": {
      type: trackingTypes.formSubmit,
      providerName: "MASkargo(MH)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.maskargo.com/online_awb_info/index.php" method="post" name="trackform" target="_top"> <input type="hidden" name="Process" id="Process" value="Yes" autocomplete="off"> <input type="hidden" name="code" id="code" value="232" autocomplete="off"> <input type="hidden" name="awb" id="awb" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "235-": {
      type: trackingTypes.formSubmit,
      providerName: "Turkish Airlines(TK)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.turkishcargo.com/en/online-services/shipment-tracking" method="get" name="trackform" target="_top"> <input type="hidden" name="quick" id="quick" value="True" autocomplete="off"> <input type="hidden" name="awbInput" id="awbInput" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "242-": {
      type: trackingTypes.formSubmit,
      providerName: "Stabo Air(4E)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.freight.aero/tracking.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Shipment" id="Shipment" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="Carrier" id="Carrier" value="4E" autocomplete="off"> <input type="hidden" name="Pfx" id="Pfx" value="242" autocomplete="off"> <input type="hidden" name="Site" id="Site" value="CargoWeb" autocomplete="off"> <input type="hidden" name="Portlet" id="Portlet" value="yes" autocomplete="off"> <input type="hidden" name="userID" id="userID" value="7f789e1f" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "250-": {
      type: trackingTypes.formSubmit,
      providerName: "Uzbekistan Airways(HY)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="HY" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "272-": {
      type: trackingTypes.formSubmit,
      providerName: "Kalitta Air",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://kalitta-cnm.com/tracktrace/" method="post" name="trackform" target="_top"> <input type="hidden" name="txtAWB" id="txtAWB" value=${trackingNumber} autocomplete="off"> <input type="hidden" name="cmdSubmit" id="cmdSubmit" value="Search" autocomplete="off"> <input type="hidden" name="txtSupportsdst" id="txtSupportsdst" value="true" autocomplete="off"> <input type="hidden" name="txtHemisphere" id="txtHemisphere" value="n" autocomplete="off"> <input type="hidden" name="txtOffset" id="txtOffset" value="60" autocomplete="off"> <input type="hidden" name="txtDstoffset" id="txtDstoffset" value="120" autocomplete="off"> <input type="hidden" name="txtTZName" id="txtTZName" value="Europe%2FBerlin" autocomplete="off"> <input type="hidden" name="action" id="action" autocomplete="off"> <input type="hidden" name="data" id="data" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "279-": {
      type: trackingTypes.formSubmit,
      providerName: "JetBlue(B6)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://b6-icargo.ibsplc.aero/icargoportal/portal/trackshipments" method="get" name="trackform" target="_top"> <input type="hidden" name="trkTxnValue" id="trkTxnValue" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "281-": {
      type: trackingTypes.formSubmit,
      providerName: "Tarom(RO)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="RO" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "284-": {
      type: trackingTypes.formSubmit,
      providerName: "Wizz Air(W6)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http: //www.utl-log.com/waybill" method="get" name="trackform" target="_top"> <input type="hidden" name="reqData" id="reqData" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "297-": {
      type: trackingTypes.formSubmit,
      providerName: "China Airlines(CI)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargo.china-airlines.com/CCNetv2/content/manage/ShipmentTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AwbPfx" id="AwbPfx" value="297" autocomplete="off"> <input type="hidden" name="AwbNum" id="AwbNum" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="checkcode" id="checkcode" value="*7*upHGj" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "312-": {
      type: trackingTypes.formSubmit,
      providerName: "IndiGo CarGo(6E)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://6ecargo.goindigo.in/FrmAWBTracking.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" autocomplete="off"> <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" autocomplete="off"> <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" autocomplete="off"> <input type="hidden" name="txtPrefix" id="txtPrefix" value="312" autocomplete="off"> <input type="hidden" name="TextBoxAWBno" id="TextBoxAWBno" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="ButtonGO" id="ButtonGO" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "328-": {
      type: trackingTypes.formSubmit,
      providerName: "Norwegian(DY/D8)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://dy.smartkargo.com/FrmAWBTracking.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" autocomplete="off"> <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" autocomplete="off"> <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" autocomplete="off"> <input type="hidden" name="txtPrefix" id="txtPrefix" value="328" autocomplete="off"> <input type="hidden" name="TextBoxAWBno" id="TextBoxAWBno" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="ButtonGO" id="ButtonGO" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "331-": {
      type: trackingTypes.formSubmit,
      providerName: "SATA(S4/SP)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="SP" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "337-": {
      type: trackingTypes.formSubmit,
      providerName: "Sun Country Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http: //www.cargoservicesintl.com/sun/trackprcSA.asp?cssfile=csisun.css&station=MCO&carrier=SY%20&coname=CSISUN" method="post" name="trackform" target="_top"> <input type="hidden" name="required" id="required" value="awbc0%2Cawbk0" autocomplete="off"> <input type="hidden" name="awbc0" id="awbc0" value="337" autocomplete="off"> <input type="hidden" name="awbk0" id="awbk0" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="awbc1" id="awbc1" value="337" autocomplete="off"> <input type="hidden" name="awbk1" id="awbk1" autocomplete="off"> <input type="hidden" name="awbc2" id="awbc2" value="337" autocomplete="off"> <input type="hidden" name="awbk2" id="awbk2" autocomplete="off"> <input type="hidden" name="awbc3" id="awbc3" value="337" autocomplete="off"> <input type="hidden" name="awbk3" id="awbk3" autocomplete="off"> <input type="hidden" name="awbc4" id="awbc4" value="337" autocomplete="off"> <input type="hidden" name="awbk4" id="awbk4" autocomplete="off"> <input type="hidden" name="submit1" id="submit1" value="Track+Bookings" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "355-": {
      type: trackingTypes.formSubmit,
      providerName: "Estafeta(E7)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargaareasitecorecms.azurewebsites.net/Rastreo-carga-aerea/" method="post" name="trackform" target="_top"> <input type="hidden" name="__RequestVerificationToken" id="__RequestVerificationToken" autocomplete="off"> <input type="hidden" name="prefixAirTracking" id="prefixAirTracking" value="355" autocomplete="off"> <input type="hidden" name="serialAirTracking" id="serialAirTracking" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "370-": {
      type: trackingTypes.formSubmit,
      providerName: "Volaris(Y4/N3)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://volarisy4.smartkargo.com/FrmAWBTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="036" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "375-": {
      type: trackingTypes.formSubmit,
      providerName: "Jetstar Asia(3K)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://freight.qantas.com/online-tracking.html" method="get" name="trackform" target="_top"> <input type="hidden" name="airWaybills" id="airWaybills" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "403-": {
      type: trackingTypes.formSubmit,
      providerName: "Polar Air Cargo(PO)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.polaraircargo.com/track-and-trace/" method="get" name="trackform" target="_top"> <input type="hidden" name="pe" id="pe" value="403" autocomplete="off"> <input type="hidden" name="se" id="se" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "406-": {
      type: trackingTypes.formSubmit,
      providerName: "UPS Air Cargo(5X)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.aircargo.ups.com/en-US/Tracking" method="get" name="trackform" target="_top"> <input type="hidden" name="awbPrefix" id="awbPrefix" value="406" autocomplete="off"> <input type="hidden" name="awbNumber" id="awbNumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "459-": {
      type: trackingTypes.formSubmit,
      providerName: "RwandAir(WB)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.rwandair.com/cargotracking/cargo.php" method="post" name="trackform" target="_top"> <input type="hidden" name="awb_code" id="awb_code" value="459" autocomplete="off"> <input type="hidden" name="awb_number" id="awb_number" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="btncargosubmit" id="btncargosubmit" value="1" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "463-": {
      type: trackingTypes.formSubmit,
      providerName: "Silk Way Airlines(ZP)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="ZP" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "479-": {
      type: trackingTypes.formSubmit,
      providerName: "Shenzhen Airlines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargo.shenzhenair.com/Query/AwbSearch.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="awblist" id="awblist" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "526-": {
      type: trackingTypes.formSubmit,
      providerName: "Southwest Airlines(WN)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.swacargo.com/swacargo_com_ui/tracking-details" method="get" name="trackform" target="_top"> <input type="hidden" name="trackingId" id="trackingId" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "549-": {
      type: trackingTypes.formSubmit,
      providerName: "LATAM Cargo(LA/L7/JJ/M3/UC)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.latamcargo.com/en/trackshipment" method="get" name="trackform" target="_top"> <input type="hidden" name="docNumber" id="docNumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="docPrefix" id="docPrefix" value="145" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "575-": {
      type: trackingTypes.formSubmit,
      providerName: "Coyne Airways",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http: //www.coyneair.info/newesttrackandtrace/index.asp" method="post" name="trackform" target="_top"> <input type="hidden" name="v" id="v" value="Link1" autocomplete="off"> <input type="hidden" name="act" id="act" value="process" autocomplete="off"> <input type="hidden" name="AWBShort" id="AWBShort" value="575" autocomplete="off"> <input type="hidden" name="AWB" id="AWB" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "603-": {
      type: trackingTypes.formSubmit,
      providerName: "SriLankan Cargo(UL)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http: //www.srilankanskychain.aero/skychain/app?PID=WEB01-10" method="post" name="trackform" target="_top"> <input type="hidden" name="awb_pre" id="awb_pre" value="603" autocomplete="off"> <input type="hidden" name="awb_no" id="awb_no" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="job_no" id="job_no" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "605-": {
      type: trackingTypes.formSubmit,
      providerName: "SKY Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://sky.icargotrk.com/iCargo/SKY/Core/WebPages/Tracking/UI_TrackingClient.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="awbnumber" id="awbnumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="airlineprefix" id="airlineprefix" value="605" autocomplete="off"> <input type="hidden" name="lang" id="lang" value="es" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "607-": {
      type: trackingTypes.formSubmit,
      providerName: "Etihad Cargo(EY)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.etihadcargo.com/en/e-services/shipment-tracking" method="get" name="trackform" target="_top"> <input type="hidden" name="awb" id="awb" value=${trackingNumber.replace(
          "-",
          ""
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "635-": {
      type: trackingTypes.formSubmit,
      providerName: "Yemenia Cargo(IY)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="IY" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "666-": {
      type: trackingTypes.formSubmit,
      providerName: "Fuzhou Airlines(FU)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hnacargo.com/Portal2/AwbSearch.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="hdAwbCode" id="hdAwbCode" value=${trackingNumber}, autocomplete="off"> <input type="hidden" name="hdVerifyCode" id="hdVerifyCode" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "672-": {
      type: trackingTypes.formSubmit,
      providerName: "Royal Brunei(BI)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.flyroyalbrunei.com/rba/cargospot/index.php" method="post" name="trackform" target="_top"> <input type="hidden" name="awb" id="awb" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="button" id="button" value="Search" autocomplete="off"> <input type="hidden" name="cd" id="cd" value="672" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "695-": {
      type: trackingTypes.formSubmit,
      providerName: "EVA Air(BR)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.brcargo.com/NEC_WEB/Tracking/QuickTracking/IndexJump" method="get" name="trackform" target="_top"> <input type="hidden" name="Prefix" id="Prefix" value="695" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "700-": {
      type: trackingTypes.formSubmit,
      providerName: "Challenge Airlines IL(5C)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.challenge-group.com/tracking/" method="post" name="trackform" target="_top"> <input type="hidden" name="id[1][Pre]" id="id_1_Pre" value="700" autocomplete="off"> <input type="hidden" name="id[1][AWB]" id="id_1_AWB" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="send-tracking" id="send-tracking" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "701-": {
      type: trackingTypes.formSubmit,
      providerName: "Widerøe(WF)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://wf.smartkargo.com/FrmAWBTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="701" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "706-": {
      type: trackingTypes.formSubmit,
      providerName: "Kenya Airways Cargo(KQ)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.kqcargo.com/en/track-and-trace/" method="get" name="trackform" target="_top"> <input type="hidden" name="awb" id="awb" value=${trackingNumber.replace(
          "-",
          ""
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "724-": {
      type: trackingTypes.formSubmit,
      providerName: "Swiss WorldCargo(LX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.swissworldcargo.com/track_n_trace?p_p_id=swcportaltrackandtrace_WAR_swcportaltrackandtraceportlet&p_p_lifecycle=1&p_p_state=normal&_swcportaltrackandtrace_WAR_swcportaltrackandtraceportlet_javax.portlet.action=awbMultiSearchAction" method="post" name="trackform" target="_top"> <input type="hidden" name="awbPrefix" id="awbPrefix" value="724" autocomplete="off"> <input type="hidden" name="awbNumber" id="awbNumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="fromHome" id="fromHome" value="true" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "731-": {
      type: trackingTypes.formSubmit,
      providerName: "Xiamen Airlines(MF)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargo.xiamenair.com/Cargo/English/Search.html" method="get" name="trackform" target="_top"> <input type="hidden" name="status" id="status" value="1" autocomplete="off"> <input type="hidden" id="" autocomplete="off"> <input type="hidden" name="Ids" id="Ids" value=${trackingNumber.replace(
          "-",
          ""
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "737-": {
      type: trackingTypes.formSubmit,
      providerName: "SATA(S4/SP)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="SP" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "738-": {
      type: trackingTypes.formSubmit,
      providerName: "Vietnam Airlines(VN)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="VN" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "744-": {
      type: trackingTypes.formSubmit,
      providerName: "Challenge Airlines BE(X7)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.challenge-group.com/tracking/" method="post" name="trackform" target="_top"> <input type="hidden" name="id[1][Pre]" id="id_1_Pre" value="744" autocomplete="off"> <input type="hidden" name="id[1][AWB]" id="id_1_AWB" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="send-tracking" id="send-tracking" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "759-": {
      type: trackingTypes.formSubmit,
      providerName: "Vietravel Airlines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargo.vietravelairlines.vn/trackawb" method="get" name="trackform" target="_top"> <input type="hidden" name="billno" id="billno" value=${trackingNumber.replace(
          "-",
          ""
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "775-": {
      type: trackingTypes.formSubmit,
      providerName: "SpiceJet Cargo(SG)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://spicejet.smartkargo.com/FrmAWBTracking.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" autocomplete="off"> <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" autocomplete="off"> <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" autocomplete="off"> <input type="hidden" name="txtPrefix" id="txtPrefix" value="775" autocomplete="off"> <input type="hidden" name="TextBoxAWBno" id="TextBoxAWBno" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="ButtonGO" id="ButtonGO" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "784-": {
      type: trackingTypes.formSubmit,
      providerName: "China Southern Airlines(CZ)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://tang.csair.com/EN/WebFace/Tang.WebFace.Cargo/AgentAwbBrower.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AwbPrefix" id="AwbPrefix" value="784" autocomplete="off"> <input type="hidden" name="AwbNo" id="AwbNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="menuID" id="menuID" value="1" autocomplete="off"> <input type="hidden" name="imgid" id="imgid" value="4708f7bd8ac94dec8993132f7903845" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "795-": {
      type: trackingTypes.formSubmit,
      providerName: "Virgin Australia Cargo(VA)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://va-icargo.ibsplc.aero/icargoportal/portal/trackshipments" method="get" name="trackform" target="_top"> <input type="hidden" name="trkTxnValue" id="trkTxnValue" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "805-": {
      type: trackingTypes.formSubmit,
      providerName: "Mercury Americas",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://popwebserver03.com/devteam/gsaforce/tracking/" method="get" name="trackform" target="_top"> <input type="hidden" name="awbprefix" id="awbprefix" value="805" autocomplete="off"> <input type="hidden" name="awbnumber" id="awbnumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "806-": {
      type: trackingTypes.formSubmit,
      providerName: "Jeju Air Cargo(7C)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargo.jejuair.net/cargo/rsvflight/newTrackFlightList.do" method="get" name="trackform" target="_top"> <input type="hidden" name="routeType" id="routeType" value="I" autocomplete="off"> <input type="hidden" name="airlinePfx" id="airlinePfx" value="806" autocomplete="off"> <input type="hidden" name="awbSn" id="awbSn" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "817-": {
      type: trackingTypes.formSubmit,
      providerName: "South American Airw.",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="http: //tracker.southamericanairways.com/process/track.php" method="post" name="trackform" target="_top"> <input type="hidden" name="mawb1" id="mawb1" value="817" autocomplete="off"> <input type="hidden" name="mawb2" id="mawb2" value="1234" autocomplete="off"> <input type="hidden" name="mawb3" id="mawb3" value="5678" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "826-": {
      type: trackingTypes.formSubmit,
      providerName: "Tianjin Airlines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hnacargo.com/Portal2/AwbSearch.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="hdAwbCode" id="hdAwbCode" value=${trackingNumber}, autocomplete="off"> <input type="hidden" name="hdVerifyCode" id="hdVerifyCode" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "828-": {
      type: trackingTypes.formSubmit,
      providerName: "Hong Kong Air Cargo(RH/HX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hkaircargo.com/track-your-shipment/" method="get" name="trackform" target="_top"> <input type="hidden" name="Code" id="Code" value="851" autocomplete="off"> <input type="hidden" name="WaybillNo" id="WaybillNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "831-": {
      type: trackingTypes.formSubmit,
      providerName: "Croatia Airlines(OU)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="OU" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "838-": {
      type: trackingTypes.formSubmit,
      providerName: "WestJet Cargo(WS)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://westjet.smartkargo.com/FrmAWBTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="838" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "847-": {
      type: trackingTypes.formSubmit,
      providerName: "West Air(PN)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hnacargo.com/Portal2/AwbSearch.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="hdAwbCode" id="hdAwbCode" value=${trackingNumber}, autocomplete="off"> <input type="hidden" name="hdVerifyCode" id="hdVerifyCode" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "851-": {
      type: trackingTypes.formSubmit,
      providerName: "Hong Kong Air Cargo(RH/HX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hkaircargo.com/track-your-shipment/" method="get" name="trackform" target="_top"> <input type="hidden" name="Code" id="Code" value="851" autocomplete="off"> <input type="hidden" name="WaybillNo" id="WaybillNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },

    "859-": {
      type: trackingTypes.formSubmit,
      providerName: "Lucky Air(8L)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hnacargo.com/Portal2/AwbSearch.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="hdAwbCode" id="hdAwbCode" value=${trackingNumber}, autocomplete="off"> <input type="hidden" name="hdVerifyCode" id="hdVerifyCode" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "865-": {
      type: trackingTypes.formSubmit,
      providerName: "MasAir(M7)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://masair.smartkargo.com/FrmAWBTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="865" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "871-": {
      type: trackingTypes.formSubmit,
      providerName: "Suparna Airlines(Y8)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hnacargo.com/Portal2/AwbSearch.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="hdAwbCode" id="hdAwbCode" value=${trackingNumber}, autocomplete="off"> <input type="hidden" name="hdVerifyCode" id="hdVerifyCode" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "872-": {
      type: trackingTypes.formSubmit,
      providerName: "GX Airlines(GX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hnacargo.com/Portal2/AwbSearch.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="hdAwbCode" id="hdAwbCode" value=${trackingNumber}, autocomplete="off"> <input type="hidden" name="hdVerifyCode" id="hdVerifyCode" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "880-": {
      type: trackingTypes.formSubmit,
      providerName: "Hainan Airlines Cargo(HU)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.hnacargo.com/Portal2/AwbSearch.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="hdAwbCode" id="hdAwbCode" value=${trackingNumber}, autocomplete="off"> <input type="hidden" name="hdVerifyCode" id="hdVerifyCode" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "901-": {
      type: trackingTypes.formSubmit,
      providerName: "TAB Cargo(TB)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.tabairlines.com/track.php" method="post" name="trackform" target="_top"> <input type="hidden" name="awb" id="awb" value=${trackingNumber.replace(
          "-",
          ""
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "909-": {
      type: trackingTypes.formSubmit,
      providerName: "Thai Smile Airways(WE)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://chorus.thaicargo.com/skychain/app" method="get" name="trackform" target="_top"> <input type="hidden" name="PID" id="PID" value="WEB01-10" autocomplete="off"> <input type="hidden" name="doc_typ" id="doc_typ" value="AWB" autocomplete="off"> <input type="hidden" name="awb_pre" id="awb_pre" value="909" autocomplete="off"> <input type="hidden" name="awb_no" id="awb_no" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "910-": {
      type: trackingTypes.formSubmit,
      providerName: "Oman Air Cargo(WY)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://omanair.smartkargo.com/FrmAWBTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="910" autocomplete="off"> <input type="hidden" name="AWBno" id="AWBno" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "933-": {
      type: trackingTypes.formSubmit,
      providerName: "Nippon Cargo Airlines(KZ)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.nca.aero/icargoportal/portal/trackshipments" method="get" name="trackform" target="_top"> <input type="hidden" name="trkTxnValue" id="trkTxnValue" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "959-": {
      type: trackingTypes.formSubmit,
      providerName: "Central Airlines(I9)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.yunfreight.com/shipment-tracking" method="get" name="trackform" target="_top"> <input type="hidden" name="id" id="id" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "967-": {
      type: trackingTypes.formSubmit,
      providerName: "PAL Airlines",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.palairlines.ca/flypalca/cargotracking.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="awb_no" id="awb_no" value=${trackingNumber} autocomplete="off"> <input type="hidden" name="Lang" id="Lang" value="en" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "978-": {
      type: trackingTypes.formSubmit,
      providerName: "VietJet Cargo(VJ)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargo.vietjetair.com/FrmAWBTracking.aspx" method="post" name="trackform" target="_top"> <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" autocomplete="off"> <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" autocomplete="off"> <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" autocomplete="off"> <input type="hidden" name="txtPrefix" id="txtPrefix" value="978" autocomplete="off"> <input type="hidden" name="TextBoxAWBno" id="TextBoxAWBno" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="ButtonGO" id="ButtonGO" value="Track" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "985-": {
      type: trackingTypes.formSubmit,
      providerName: "LATAM Cargo(LA/L7/JJ/M3/UC)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.latamcargo.com/en/trackshipment" method="get" name="trackform" target="_top"> <input type="hidden" name="docNumber" id="docNumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="docPrefix" id="docPrefix" value="145" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "077-": {
      type: trackingTypes.formSubmit,
      providerName: "Egypt Air(MS)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.freight.aero/tracking.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="MS" autocomplete="off"> <input type="hidden" name="Pfx" id="Pfx" value="077" autocomplete="off"> <input type="hidden" name="Shipment" id="Shipment" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="Site" id="Site" value="CargoWeb" autocomplete="off"> <input type="hidden" name="Portlet" id="Portlet" value="yes" autocomplete="off"> <input type="hidden" name="userID" id="userID" value="067f0ead" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "071-": {
      type: trackingTypes.formSubmit,
      providerName: "Ethiopian Airlines(ET)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargo.ethiopianairlines.com/e-cargo/cargotrack" method="get" name="trackform" target="_top"> <input type="hidden" name="awbnumber" id="awbnumber" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "023-": {
      type: trackingTypes.formSubmit,
      providerName: "Fedex Freight Cargo(FX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.fedex.com/fedextrack/" method="get" name="trackform" target="_top"> <input type="hidden" name="tracknumbers" id="tracknumbers" value=${trackingNumber.replace(
          "-",
          ""
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "072-": {
      type: trackingTypes.formSubmit,
      providerName: "Gulf Air Falcon Cargo(GF)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/webtracking/gf/tracking.asp" method="post" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="GF" autocomplete="off"> <input type="hidden" name="Pfx" id="Pfx" value="072" autocomplete="off"> <input type="hidden" name="Shipment" id="Shipment" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "075-": {
      type: trackingTypes.formSubmit,
      providerName: "IAG Cargo(IB/BA/EI)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.iagcargo.com/iagcargo/portlet/en/html/601/main/search" method="get" name="trackform" target="_top"> <input type="hidden" name="awb.cia" id="awb.cia" value="125" autocomplete="off"> <input type="hidden" name="awb.cod" id="awb.cod" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "073-": {
      type: trackingTypes.formSubmit,
      providerName: "Iraqi Airways",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.ia-cargo.com/track.php" method="post" name="trackform" target="_top"> <input type="hidden" name="track-input" id="track-input" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "045-": {
      type: trackingTypes.formSubmit,
      providerName: "LATAM Cargo(LA/L7/JJ/M3/UC)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.latamcargo.com/en/trackshipment" method="get" name="trackform" target="_top"> <input type="hidden" name="docNumber" id="docNumber" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="docPrefix" id="docPrefix" value="145" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "080-": {
      type: trackingTypes.formSubmit,
      providerName: "LOT Cargo(LO)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="LO" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "076-": {
      type: trackingTypes.formSubmit,
      providerName: "Middle East Airlines(ME)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://mea-icargo.ibsplc.aero:8443/meaportal/portal/trackshipments" method="get" name="trackform" target="_top"> <input type="hidden" name="trkTxnValue" id="trkTxnValue" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "079-": {
      type: trackingTypes.formSubmit,
      providerName: "Philippine Airlines(PR/2P)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://cargo.pal.com.ph/HtmlFiles/AWBTracking/AWBTracking.html" method="get" name="trackform" target="_top"> <input type="hidden" name="BasedOn" id="BasedOn" value="0" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="CarrierCode" id="CarrierCode" value="079" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "081-": {
      type: trackingTypes.formSubmit,
      providerName: "Qantas(QF)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://freight.qantas.com/online-tracking.html" method="get" name="trackform" target="_top"> <input type="hidden" name="airWaybills" id="airWaybills" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "065-": {
      type: trackingTypes.formSubmit,
      providerName: "Saudia Cargo(SV)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://ebooking.champ.aero/trace/trace.asp" method="get" name="trackform" target="_top"> <input type="hidden" name="Carrier" id="Carrier" value="SV" autocomplete="off"> <input type="hidden" name="Shipment_text" id="Shipment_text" value=${trackingNumber} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "083-": {
      type: trackingTypes.formSubmit,
      providerName: "South African Airw.(SA)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.flysaa.com/za/en/cargoService!getAWBDetails.action" method="post" name="trackform" target="_top"> <input type="hidden" name="forgotPwdLoginId" id="forgotPwdLoginId" autocomplete="off"> <input type="hidden" name="forgotPwdEmailId" id="forgotPwdEmailId" autocomplete="off"> <input type="hidden" name="searchInput" id="searchInput" value="Search" autocomplete="off"> <input type="hidden" name="selectedProductIs" id="selectedProductIs" value="FTS" autocomplete="off"> <input type="hidden" name="awbCode" id="awbCode" value="083" autocomplete="off"> <input type="hidden" name="awbNum" id="awbNum" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> <input type="hidden" name="transCode" id="transCode" value="web" autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "047-": {
      type: trackingTypes.formSubmit,
      providerName: "TAP Air Cargo(TP)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://www.tapcargo.com/en/Tracking-Results" method="get" name="trackform" target="_top"> <input type="hidden" name="countryCode" id="countryCode" value="047" autocomplete="off"> <input type="hidden" name="consignmentNote" id="consignmentNote" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "036-": {
      type: trackingTypes.formSubmit,
      providerName: "Volaris(Y4/N3)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://volarisy4.smartkargo.com/FrmAWBTracking.aspx" method="get" name="trackform" target="_top"> <input type="hidden" name="AWBPrefix" id="AWBPrefix" value="036" autocomplete="off"> <input type="hidden" name="AWBNo" id="AWBNo" value=${trackingNumber.slice(
          4
        )} autocomplete="off"> </form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
    "127-": {
      type: trackingTypes.manual,
      providerName: "Gollog(G3)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://servicos.gollog.com.br/app/main/tracking")
      },
    },
    "180-": {
      type: trackingTypes.manual,
      providerName: "Korean Air Cargo(KE)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://cargo.koreanair.com/en/tracking")
      },
    },
    "205-": {
      type: trackingTypes.manual,
      providerName: "ANA Cargo(NH)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://prd.intcgo.ana.co.jp/icargoneoportal/app/#/app")
      },
    },
    "262-": {
      type: trackingTypes.manual,
      providerName: "Ural Airlines(U6)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://cargo.uralairlines.ru/en/services/tracking/")
      },
    },
    "310-": {
      type: trackingTypes.manual,
      providerName: "Thai Lion Air(SL)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://book.aircargolion.com/Tracking/AWB")
      },
    },
    "325-": {
      type: trackingTypes.manual,
      providerName: "Nile Air(NP)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://world-cs.com/en#tracking-form")
      },
    },
    "395-": {
      type: trackingTypes.manual,
      providerName: "Corendon Cargo(XC)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://world-cs.com/en#tracking-form")
      },
    },
    "421-": {
      type: trackingTypes.manual,
      providerName: "S7 Cargo(S7)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://s7.cargoline.aero/")
      },
    },
    "486-": {
      type: trackingTypes.manual,
      providerName: "Jazeera Air Cargo(J9)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://world-cs.com/en#tracking-form")
      },
    },
    "489-": {
      type: trackingTypes.manual,
      providerName: "Cargojet(W8)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://km.cargojet.com/ords/f?p=102:857:0:&tz=5:30")
      },
    },
    "512-": {
      type: trackingTypes.manual,
      providerName: "Royal Jordanian(RJ)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://rjresprd.cargoflash.com/Tracking/AWB")
      },
    },
    "537-": {
      type: trackingTypes.manual,
      providerName: "Mahan World Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://ic.mahan-cargo.com/tracking")
      },
    },
    "542-": {
      type: trackingTypes.manual,
      providerName: "Turkmenistan Airlines(T5)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://tua-cargo.crane.aero/cargo-tracking")
      },
    },
    "593-": {
      type: trackingTypes.manual,
      providerName: "flynas(XY)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://world-cs.com/en#tracking-form")
      },
    },
    "618-": {
      type: trackingTypes.manual,
      providerName: "Singapore Airlines(SQ)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.siacargo.com/e-services/quicksearch_public/")
      },
    },
    "622-": {
      type: trackingTypes.manual,
      providerName: "Calm Air(MO)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://cargo.calmair.com/WebContent/EN/CargoTracking")
      },
    },
    "624-": {
      type: trackingTypes.manual,
      providerName: "Pegasus Cargo(PC)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://world-cs.com/en#tracking-form")
      },
    },
    "626-": {
      type: trackingTypes.manual,
      providerName: "PNG Air(CG)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://cargo.pngair.com.pg/WebContent/EN/CargoTracking")
      },
    },
    "632-": {
      type: trackingTypes.manual,
      providerName: "Perimeter",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://cargo.perimeter.ca/WebContent/EN/CargoTracking")
      },
    },
    "658-": {
      type: trackingTypes.manual,
      providerName: "Airmax Cargo(M8)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.airmaxcargo.com.pe/AirsisWeb/tracking.xhtml")
      },
    },
    "703-": {
      type: trackingTypes.manual,
      providerName: "Neos(NO)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://world-cs.com/en#tracking-form")
      },
    },
    "716-": {
      type: trackingTypes.manual,
      providerName: "MNG Airlines(MB)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.mngairlines.com/")
      },
    },
    "718-": {
      type: trackingTypes.manual,
      providerName: "Jin Air(LJ)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://cargo.koreanair.com/en/tracking")
      },
    },
    "749-": {
      type: trackingTypes.manual,
      providerName: "Airlink Cargo",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.ivs-online.co.za/pls/ivs/f?p=400:29")
      },
    },
    "756-": {
      type: trackingTypes.manual,
      providerName: "ASL Airlines Belgium(3V)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.aslairlines.be/")
      },
    },
    "767-": {
      type: trackingTypes.manual,
      providerName: "Atlantic Airways(RC)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.spiritaircargohandling.com/Tracking#")
      },
    },
    "816-": {
      type: trackingTypes.manual,
      providerName: "Malindo Air(OD)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://book.aircargolion.com/Tracking/AWB/")
      },
    },
    "876-": {
      type: trackingTypes.manual,
      providerName: "Sichuan Airlines(3U)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://cargonest.sal-sichuanair.com/login")
      },
    },
    "905-": {
      type: trackingTypes.manual,
      providerName: "Pacific Coastal Airlines(8P)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open(
          "https://cargo.pacificcoastal.com/WebContent/EN/CargoTracking"
        )
      },
    },
    "920-": {
      type: trackingTypes.manual,
      providerName: "Super Air Jet(IU)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://book.aircargolion.com/Tracking/AWB/")
      },
    },
    "921-": {
      type: trackingTypes.manual,
      providerName: "SF Airlines(O3)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.sf-airlines.com/sfa/en/index.html")
      },
    },
    "938-": {
      type: trackingTypes.manual,
      providerName: "Batik Air(ID)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://book.aircargolion.com/Tracking/AWB/")
      },
    },
    "990-": {
      type: trackingTypes.manual,
      providerName: "Lion Air(JT)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://book.aircargolion.com/Tracking/AWB/")
      },
    },
    "994-": {
      type: trackingTypes.manual,
      providerName: "Air Incheon(KJ)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("http://www.air-incheon.com/tracking.php?ckattempt=1")
      },
    },
    "064-": {
      type: trackingTypes.manual,
      providerName: "Czech Airlines(OK)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.skyteam.com/en/cargo/track-shipment/")
      },
    },
    "055-": {
      type: trackingTypes.manual,
      providerName: "ITA(AZ)",
      getTrackingInfo: (trackingNumber: string) => {
        navigator &&
          navigator.clipboard &&
          navigator.clipboard.writeText(trackingNumber)
        window.open("https://www.skyteam.com/en/cargo/track-shipment/")
      },
    },
    "689-": {
      type: trackingTypes.formSubmit,
      providerName: "CityJet(WX)",
      getTrackingInfo: (trackingNumber: string) => {
        const formContent = `<form id="tracking-form" action="https://parse.track-trace.com/" method="post" target="frame-783"><input name="p_action" type="hidden" value="https%3A%2F%2Ffr8manage.app%2Ftracking%2Frest%2Fjson%2FawbTracking%2Fget"><input name="p_method" type="hidden" value="get"><input name="p_input" type="hidden" value="awbNo%3D${trackingNumber.replace(
          "-",
          ""
        )}"><input name="p_parser" type="hidden" value="ecargoware"><input name="p_token" type="hidden" value="3521f5b79adbfbe4ce8a878398e24e435f17913e721e3a368e0483d2659c7bb5"></form>`
        const formContainer = document.getElementById("form-container")
        if (formContainer) {
          formContainer.innerHTML = formContent
          const form = document.getElementById(
            "tracking-form"
          ) as HTMLFormElement

          form && form.submit()
        }
      },
    },
  },
}
