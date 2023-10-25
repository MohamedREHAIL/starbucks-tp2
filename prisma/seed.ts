import { PrismaClient } from '@prisma/client'
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data"

const prisma = new PrismaClient()

const datas = PRODUCTS_CATEGORY_DATA
const datass=PRODUCTS_CATEGORY_DATA[0]

async function main() {
    
    await prisma.productCategory.deleteMany({})


    for (const a of datas) {
        const category = {
            slug: a.slug,
            name: a.name,
            products: {
                createMany: {
                    data: a.products.map(b => ({
                        slug: b.slug,
                        path: b.path,
                        name: b.name,
                        desc: b.desc,
                        img: b.img,
                        price: b.price,
                    }))
                }
            }
        }

        
        const createCategory = await prisma.productCategory.create({
            data: category
        })

       
        const getCategory = await prisma.productCategory.findUnique({
            where: { id: createCategory.id },
            include: { products: true }
        })

        console.log(getCategory)

        


    }
}

main()
