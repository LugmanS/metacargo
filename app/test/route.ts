export const runtime = "edge"

function delayedValue() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Your returned value after 4 seconds")
    }, 6000) // 4000 milliseconds (4 seconds)
  })
}

export async function GET(request: Request) {
  const result = await delayedValue()
  return new Response(`Time-${Date.now()}`)
}
