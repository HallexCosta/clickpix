import { openpix } from '../src/openpix.js'
console.log('testando')
function teste() {}
const createOrderWC = async (memoryOrder) => {
  console.log('create draft order')
  // await new Promise(res => setTimeout(res, 3000))

  const productId = memoryOrder.productId

  let resolve,
    reject = null
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })

  try {
    console.log({
      body: {
        price: memoryOrder.value,
        email: memoryOrder.email,
        phone: memoryOrder.phone,
        productId,
        correlationID: memoryOrder.correlationID,
        userId: 1
      }
    })

    const response = await fetch(
      'http://localhost:3001/wp-json/openpix/v1/woocommerce/create-order-clickpix',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Certifique-se de definir o tipo de conteúdo
        },
        body: JSON.stringify({
          price: memoryOrder.value,
          email: memoryOrder.email,
          phone: memoryOrder.phone,
          productId,
          correlationID: memoryOrder.correlationID,
          userId: 1
        })
        // mode: 'no-cors'
      }
    )
    // console.log(response.body)
    const data = await response.json()
    resolve(data)
  } catch (e) {
    resolve(null)
    console.log(e.message)
  }
  // const order = await response.json()

  return promise
}

window.$openpixSDK.addEvent(
  'beforeCreateCharge',
  async (nextFn, states, productId) => {
    console.log('beforeHook inside Called')
    console.log({ nextFn, states, productId })

    const order = await createOrderWC(states.products.get(productId))
    // simulate fail
    // const order = null
    if (!order) {
      return
    }

    const orderId = order.orderId
    const oldProductOrder = window.$openpixSDK.get(productId, 'products')

    window.$openpixSDK.updateIn(productId, 'products', {
      ...oldProductOrder,
      orderId,
      comment: `WooCoommerce #${orderId}`,
      additionalInfo: `orderId:${order.orderId},${oldProductOrder.additionalInfo}`,
      productId
    })

    console.log('calling nextFn')
    return nextFn()
  }
)

openpix.init()
