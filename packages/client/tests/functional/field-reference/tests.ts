import testMatrix from './_matrix'

// @ts-ignore this is just for type checks
declare let prisma: import('@prisma/client').PrismaClient

testMatrix.setupTestSuite(() => {
  beforeAll(async () => {
    await prisma.product.create({
      data: {
        quantity: 100,
        warnQuantity: 50,
      },
    })

    await prisma.product.create({
      data: {
        quantity: 30,
        warnQuantity: 100,
      },
    })
  })

  test('example', async () => {
    async function foo() {
      await prisma.product.findMany({
        where: {
          quantity: { lt: prisma.product.fields.warnQuantity },
        },
      })
    }
  })
})
