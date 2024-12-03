export const useProducts = () => {
  const [products, setProducts] = window.React.useState(new Map())

  const addProduct = (
    productId: string | number,
    data: Record<string, any>
  ) => {
    return products.set(productId, data)
  }
  const getProduct = (productId: string | number) => {
    return products.get(productId)
  }
  // window.$openpixSDK.add()

  // window.reactLayer.addProduct = addProduct
  // window.reactLayer.getProduct = getProduct

  return [getProduct, addProduct, products] as const
}
