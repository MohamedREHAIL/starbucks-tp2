import {NextRequest, NextResponse} from "next/server";
import prisma from "../../../utils/prisma";


export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get("search");
    const cat = request.nextUrl.searchParams.getAll("cat");


console.log(search, cat)
    const categories = await prisma.productCategory.findMany({
        ...(cat.length > 0 ? {where: {
            slug: {
                in: cat,
            },
        }} : {}),
        include:{
            products: search? {
                where: {
                    name: {
                        contains: search,
                        mode: "insensitive"
                    },
                },
            }: true,
        },
    });

    // return NextResponse.json(categories)

    const responseObject = {
        params: {
            cat,
            search: search || "",
        },
        categories,
    };

    return new Response(JSON.stringify(responseObject), {
        headers: {
            "Content-Type": "application/json",
        },
    });


}